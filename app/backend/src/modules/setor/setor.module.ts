import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SetorService } from './setor.service.js';
import { SetorController } from './setor.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [SetorController],
  providers: [SetorService],
  exports: [SetorService],
})
export class SetorModule {}
