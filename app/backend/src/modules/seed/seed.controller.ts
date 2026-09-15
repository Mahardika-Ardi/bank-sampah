import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { SeedService } from './seed.service.js';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async seedDatabase() {
    const data = await this.seedService.runSeed();
    return {
      message: 'Seed executed successfully',
      data,
    };
  }
}
