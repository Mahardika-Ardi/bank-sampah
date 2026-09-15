import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TenantService } from './tenant.service.js';
import { CreateTenantDto } from './dto/create-tenant.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  async create(@Body() createTenantDto: CreateTenantDto) {
    const data = await this.tenantService.create(createTenantDto);
    return {
      message: 'Tenant created successfully',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.tenantService.findAll();
    return {
      message: 'Tenants retrieved successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.tenantService.findOne(id);
    return {
      message: 'Tenant retrieved successfully',
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTenantDto: UpdateTenantDto,
  ) {
    const data = await this.tenantService.update(id, updateTenantDto);
    return {
      message: 'Tenant updated successfully',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.tenantService.remove(id);
    return {
      message: 'Tenant deleted successfully',
      data,
    };
  }
}
