import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { KategoriService } from './kategori.service.js';
import { KategoriController } from './kategori.controller.js';
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
  controllers: [KategoriController],
  providers: [KategoriService],
  exports: [KategoriService],
})
export class KategoriModule {}
