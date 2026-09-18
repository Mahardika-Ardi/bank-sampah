import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { LoggerService } from '../logger/logger.service.js';

export type UploadedAsset = {
  url: string;
  publicId: string;
  bytes: number;
  format: string;
};

@Injectable()
export class CloudinaryService {
  private readonly context = CloudinaryService.name;

  constructor(
    private readonly config: ConfigService,
    private readonly logger: LoggerService,
  ) {
    cloudinary.config({
      cloud_name: config.getOrThrow<string>('cloudinary.name'),
      api_key: config.getOrThrow<string>('cloudinary.apiKey'),
      api_secret: config.getOrThrow<string>('cloudinary.apiSecret'),
      secure: true,
    });
  }

  upload(buffer: Buffer, folder: string): Promise<UploadedAsset> {
    this.logger.debug(`upload start folder=${folder} bytes=${buffer.length}`, {
      context: this.context,
    });

    return new Promise<UploadedAsset>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder, resource_type: 'image' },
        (error, result: UploadApiResponse | undefined) => {
          if (error || !result?.secure_url || !result.public_id) {
            this.logger.error('upload failed', error as Error | undefined, {
              context: this.context,
              folder,
            });
            reject(
              new InternalServerErrorException(
                'Failed to upload image. Please try again.',
              ),
            );
            return;
          }
          this.logger.debug(`upload completed publicId=${result.public_id}`, {
            context: this.context,
          });
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            bytes: result.bytes,
            format: result.format,
          });
        },
      );
      stream.end(buffer);
    });
  }

  async destroy(publicId: string): Promise<void> {
    this.logger.debug(`destroy start publicId=${publicId}`, {
      context: this.context,
    });
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
    });
    if (result.result !== 'ok' && result.result !== 'not found') {
      this.logger.error(`destroy failed publicId=${publicId}`, undefined, {
        context: this.context,
        result: result.result,
      });
      throw new InternalServerErrorException(
        'Failed to delete old image. Please try again.',
      );
    }
    this.logger.debug(`destroy completed publicId=${publicId}`, {
      context: this.context,
    });
  }
}
