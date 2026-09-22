import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SetorService } from './setor.service.js';
import { SetorController } from './setor.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { RedisModule } from '../../infra/redis/redis.module.js';

@Module({
  imports: [PrismaModule, RedisModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [SetorController],
  providers: [SetorService],
  exports: [SetorService],
})
export class SetorModule {}
