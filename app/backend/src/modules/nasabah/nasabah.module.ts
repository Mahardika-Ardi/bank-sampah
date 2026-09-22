import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BullModule } from '@nestjs/bullmq';
import { NasabahService } from './nasabah.service.js';
import { NasabahController } from './nasabah.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { HashingModule } from '../../shared/hashing/hashing.module.js';
import { MediaModule } from '../../infra/media/media.module.js';
import { CloudinaryModule } from '../../infra/cloudinary/cloudinary.module.js';
import { RedisModule } from '../../infra/redis/redis.module.js';
import { MEDIA_UPLOAD_QUEUE } from '../../infra/queue/media-upload.job.js';

@Module({
  imports: [
    PrismaModule,
    HashingModule,
    MediaModule,
    CloudinaryModule,
    RedisModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    BullModule.registerQueue({ name: MEDIA_UPLOAD_QUEUE }),
  ],
  controllers: [NasabahController],
  providers: [NasabahService],
  exports: [NasabahService],
})
export class NasabahModule {}
