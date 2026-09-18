import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { NasabahService } from './nasabah.service.js';
import { NasabahController } from './nasabah.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { HashingModule } from '../../shared/hashing/hashing.module.js';
import { MediaModule } from '../../infra/media/media.module.js';
import { CloudinaryModule } from '../../infra/cloudinary/cloudinary.module.js';

@Module({
  imports: [
    PrismaModule,
    HashingModule,
    MediaModule,
    CloudinaryModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [NasabahController],
  providers: [NasabahService],
  exports: [NasabahService],
})
export class NasabahModule {}
