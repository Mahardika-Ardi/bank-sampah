import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { HadiahService } from './hadiah.service.js';
import { HadiahController } from './hadiah.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { MediaModule } from '../../infra/media/media.module.js';
import { CloudinaryModule } from '../../infra/cloudinary/cloudinary.module.js';

@Module({
  imports: [
    PrismaModule,
    MediaModule,
    CloudinaryModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [HadiahController],
  providers: [HadiahService],
  exports: [HadiahService],
})
export class HadiahModule {}
