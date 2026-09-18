import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { TenantService } from './tenant.service.js';
import { CreateTenantDto } from './dto/create-tenant.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';
import { UUID_EXAMPLE } from '../../shared/swagger/api-examples.js';

@ApiTags('Tenants')
@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tenant' })
  @ApiBody({ type: CreateTenantDto })
  @ApiResponse({ status: 201, description: 'Tenant created successfully' })
  async create(@Body() createTenantDto: CreateTenantDto) {
    const data = await this.tenantService.create(createTenantDto);
    return {
      message: 'Tenant created successfully',
      data,
    };
  }

  @Get()
  @ApiOperation({ summary: 'List all active tenants' })
  @ApiResponse({ status: 200, description: 'Tenants retrieved successfully' })
  async findAll() {
    const data = await this.tenantService.findAll();
    return {
      message: 'Tenants retrieved successfully',
      data,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tenant detail by ID' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Tenant retrieved successfully' })
  async findOne(@Param('id') id: string) {
    const data = await this.tenantService.findOne(id);
    return {
      message: 'Tenant retrieved successfully',
      data,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update tenant data' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiBody({ type: UpdateTenantDto })
  @ApiResponse({ status: 200, description: 'Tenant updated successfully' })
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

  @Patch(':id/restore')
  @ApiOperation({ summary: 'Restore a soft-deleted tenant' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Tenant restored successfully' })
  async restore(@Param('id') id: string, @Req() req: Request) {
    const data = await this.tenantService.restore(id, req.user?.sub);
    return {
      message: 'Tenant restored successfully',
      data,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft-delete a tenant' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Tenant deleted successfully' })
  async remove(@Param('id') id: string, @Req() req: Request) {
    const data = await this.tenantService.remove(id, req.user?.sub);
    return {
      message: 'Tenant deleted successfully',
      data,
    };
  }
}
