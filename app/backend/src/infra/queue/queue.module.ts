import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import { MediaUploadProcessor } from '../../jobs/media-upload.processor.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { MediaModule } from '../media/media.module.js';
import { CloudinaryModule } from '../cloudinary/cloudinary.module.js';
import { MEDIA_UPLOAD_QUEUE } from './media-upload.job.js';

@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          host: config.get<string>('redis.host') ?? 'localhost',
          port: Number(config.get<string>('redis.port') ?? 6379),
          password: config.get<string>('redis.password') || undefined,
        },
      }),
    }),
    BullModule.registerQueue({
      name: MEDIA_UPLOAD_QUEUE,
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: 100,
        removeOnFail: 500,
      },
    }),
    PrismaModule,
    MediaModule,
    CloudinaryModule,
  ],
  providers: [MediaUploadProcessor],
})
export class QueueModule {}
