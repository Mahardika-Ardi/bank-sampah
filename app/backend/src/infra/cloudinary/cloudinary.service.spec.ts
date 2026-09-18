import { Test, TestingModule } from '@nestjs/testing';
import { CloudinaryService } from './cloudinary.service.js';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '../logger/logger.service.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadResponseCallback,
} from 'cloudinary';
import type { Writable } from 'stream';

vi.mock('cloudinary', () => ({
  v2: {
    config: vi.fn(),
    uploader: {
      upload_stream: vi.fn(),
      destroy: vi.fn(),
    },
  },
}));

describe('CloudinaryService', () => {
  let service: CloudinaryService;

  const mockConfigService = {
    getOrThrow: vi.fn((key: string) => {
      const values: Record<string, string> = {
        'cloudinary.name': 'demo',
        'cloudinary.apiKey': 'key',
        'cloudinary.apiSecret': 'secret',
      };
      const value = values[key];
      if (!value) throw new Error(`Unexpected key: ${key}`);
      return value;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CloudinaryService,
        { provide: ConfigService, useValue: mockConfigService },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn(), error: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<CloudinaryService>(CloudinaryService);
  });

  it('should be defined and configure the SDK', () => {
    expect(service).toBeDefined();
    expect(cloudinary.config).toHaveBeenCalledWith(
      expect.objectContaining({ cloud_name: 'demo', secure: true }),
    );
  });

  it('should resolve asset metadata on successful upload', async () => {
    const uploadStream = vi.mocked(cloudinary.uploader.upload_stream);
    const fakeResult = {
      secure_url: 'https://cdn.test/foto.jpg',
      public_id: 'pub-1',
      bytes: 100,
      format: 'jpg',
    } as unknown as UploadApiResponse;
    uploadStream.mockImplementation(
      ((first?: unknown, second?: unknown) => {
        const callback =
          (typeof first === 'function' ? first : second) as
            | UploadResponseCallback
            | undefined;
        callback?.(undefined, fakeResult);
        return { end: vi.fn() } as unknown as Writable;
      }) as never,
    );

    const result = await service.upload(
      Buffer.from('img'),
      'bank-sampah/t-1/kategori',
    );

    expect(result).toEqual({
      url: 'https://cdn.test/foto.jpg',
      publicId: 'pub-1',
      bytes: 100,
      format: 'jpg',
    });
  });

  it('should throw when upload reports an error', async () => {
    const uploadStream = vi.mocked(cloudinary.uploader.upload_stream);
    uploadStream.mockImplementation(
      ((first?: unknown, second?: unknown) => {
        const callback =
          (typeof first === 'function' ? first : second) as
            | UploadResponseCallback
            | undefined;
        callback?.(new Error('upstream down') as never);
        return { end: vi.fn() } as unknown as Writable;
      }) as never,
    );

    await expect(service.upload(Buffer.from('img'), 'folder')).rejects.toThrow(
      'Failed to upload image',
    );
  });

  it('should destroy existing assets and tolerate not-found', async () => {
    const destroy = vi.mocked(cloudinary.uploader.destroy);
    destroy
      .mockResolvedValueOnce({ result: 'ok' } as never)
      .mockResolvedValueOnce({ result: 'not found' } as never);

    await expect(service.destroy('pub-1')).resolves.toBeUndefined();
    await expect(service.destroy('pub-gone')).resolves.toBeUndefined();
  });

  it('should throw when destroy reports an unexpected result', async () => {
    const destroy = vi.mocked(cloudinary.uploader.destroy);
    destroy.mockResolvedValueOnce({ result: 'error' } as never);

    await expect(service.destroy('pub-1')).rejects.toThrow(
      'Failed to delete old image',
    );
  });
});
