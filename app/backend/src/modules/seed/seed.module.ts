import { Module } from '@nestjs/common';
import { SeedService } from './seed.service.js';
import { SeedController } from './seed.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { HashingModule } from '../../shared/hashing/hashing.module.js';

@Module({
  imports: [PrismaModule, HashingModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
