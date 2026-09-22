import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PenukaranService } from './penukaran.service.js';
import { PenukaranController } from './penukaran.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { RedisModule } from '../../infra/redis/redis.module.js';

@Module({
  imports: [PrismaModule, RedisModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [PenukaranController],
  providers: [PenukaranService],
  exports: [PenukaranService],
})
export class PenukaranModule {}
