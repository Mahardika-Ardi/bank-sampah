import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ReportsService } from './reports.service.js';
import { ReportsController } from './reports.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { RedisModule } from '../../infra/redis/redis.module.js';

@Module({
  imports: [PrismaModule, RedisModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}
