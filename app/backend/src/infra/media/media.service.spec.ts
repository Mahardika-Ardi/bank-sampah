import { Test, TestingModule } from '@nestjs/testing';
import { MediaService } from './media.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoggerService } from '../logger/logger.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { MediaKind } from '../../../generated/prisma/client.js';

describe('MediaService', () => {
  let service: MediaService;

  let mockPrisma: {
    media: { create: Mock; findFirst: Mock; findMany: Mock; update: Mock; updateMany: Mock };
    $transaction: Mock;
  };

  const base = {
    tenantId: 'tenant-id',
    kind: MediaKind.kategori_foto,
    ownerId: 'kat-id',
  };

  beforeEach(async () => {
    mockPrisma = {
      media: {
        create: vi.fn(),
        findFirst: vi.fn().mockResolvedValue(null),
        findMany: vi.fn().mockResolvedValue([]),
        update: vi.fn(),
        updateMany: vi.fn(),
      },
      $transaction: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaService,
        { provide: PrismaService, useValue: mockPrisma },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<MediaService>(MediaService);
    vi.clearAllMocks();
  });

  const txStub = () => ({ media: mockPrisma.media });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('replacePhoto should destroy the previous asset and soft-delete its row', async () => {
    const tx = txStub();
    mockPrisma.media.findFirst.mockResolvedValue({
      id: 'old-media',
      publicId: 'pub-old',
    });
    const mockCloudinary = { destroy: vi.fn().mockResolvedValue(undefined) };

    await service.replacePhoto(tx as never, mockCloudinary as never, {
      ...base,
      asset: { url: 'https://cdn.test/new.jpg', publicId: 'pub-new' },
      deletedBy: 'user-1',
    });

    expect(mockCloudinary.destroy).toHaveBeenCalledWith('pub-old');
    expect(mockPrisma.media.update).toHaveBeenCalledWith(
      expect.objectContaining({ where: { id: 'old-media' } }),
    );
  });

  it('replacePhoto should skip destroy when previous row has no publicId', async () => {
    const tx = txStub();
    mockPrisma.media.findFirst.mockResolvedValue({
      id: 'old-media',
      publicId: null,
    });
    const mockCloudinary = { destroy: vi.fn() };

    await service.replacePhoto(tx as never, mockCloudinary as never, {
      ...base,
      asset: { url: 'https://cdn.test/new.jpg', publicId: 'pub-new' },
    });

    expect(mockCloudinary.destroy).not.toHaveBeenCalled();
    expect(mockPrisma.media.update).toHaveBeenCalledOnce();
  });

  it('retirePhotosForOwner should return only non-null publicIds', async () => {
    const tx = txStub();
    mockPrisma.media.findMany.mockResolvedValue([
      { id: 'm-1', publicId: 'pub-1' },
      { id: 'm-2', publicId: null },
    ]);

    const result = await service.retirePhotosForOwner(tx as never, {
      ...base,
      deletedBy: 'user-1',
    });

    expect(result).toEqual(['pub-1']);
    expect(mockPrisma.media.updateMany).toHaveBeenCalledOnce();
  });
});
