import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseUUIDPipe,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiBearerAuth, ApiConsumes, ApiBody, ApiParam } from '@nestjs/swagger';
import { NasabahService } from './nasabah.service.js';
import { CreateNasabahDto } from './dto/create-nasabah.dto.js';
import { UpdateNasabahDto } from './dto/update-nasabah.dto.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Role } from '../../shared/decorators/role.decorator.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import {
  photoUploadOptions,
  UploadedPhoto,
} from '../../shared/utils/multer-photo.utils.js';
import { UUID_EXAMPLE, NASABAH_LIST_RESPONSE } from '../../shared/swagger/api-examples.js';

@ApiTags('Nasabah')
@ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard, RolesGuard)
@Role(UserRole.admin_bank)
@Controller('admin/nasabah')
export class NasabahController {
  constructor(private readonly nasabahService: NasabahService) {}

  private requireTenant(req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    return tenant;
  }

  @Get()
  @ApiOperation({ summary: 'List all waste bank customers' })
  @ApiResponse({
    status: 200,
    description: 'Customer list retrieved',
    schema: { example: NASABAH_LIST_RESPONSE },
  })
  async findAll(@Req() req: Request) {
    const data = await this.nasabahService.findAll(this.requireTenant(req));
    return {
      message: 'Customer list retrieved successfully',
      data,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get customer detail by ID' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Customer detail retrieved' })
  async findOne(@Req() req: Request, @Param('id', ParseUUIDPipe) id: string) {
    const data = await this.nasabahService.findOne(this.requireTenant(req), id);
    return {
      message: 'Customer detail retrieved successfully',
      data,
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor('foto', photoUploadOptions()))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', example: 'nasabah_dewi' },
        password: { type: 'string', example: 'password123' },
        namaNasabah: { type: 'string', example: 'Dewi Lestari' },
        alamat: { type: 'string', example: 'Jl. Kenanga No. 5' },
        telp: { type: 'string', example: '081987654321' },
        foto: { type: 'string', format: 'binary' },
      },
      required: ['username', 'password', 'namaNasabah', 'alamat', 'telp'],
    },
  })
  @ApiOperation({ summary: 'Add new customer (photo optional)' })
  @ApiResponse({ status: 201, description: 'Customer created' })
  async create(
    @Req() req: Request,
    @Body() dto: CreateNasabahDto,
    @UploadedFile() file: UploadedPhoto | undefined,
  ) {
    const data = await this.nasabahService.create(
      this.requireTenant(req),
      dto,
      file,
    );
    return {
      message: 'New customer added successfully',
      data,
    };
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('foto', photoUploadOptions()))
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        namaLengkap: { type: 'string', example: 'Ahmad Dahlan Putra' },
        noTelepon: { type: 'string', example: '081299998888' },
        alamat: { type: 'string', example: 'Jl. Sudirman No. 120' },
        tanggalLahir: { type: 'string', example: '2000-01-15' },
        foto: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiOperation({ summary: 'Update customer data (photo optional)' })
  @ApiResponse({ status: 200, description: 'Customer updated' })
  async update(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateNasabahDto,
    @UploadedFile() file: UploadedPhoto | undefined,
  ) {
    const data = await this.nasabahService.update(
      this.requireTenant(req),
      id,
      dto,
      file,
      req.user?.sub,
    );
    return {
      message: 'Customer data updated successfully',
      data,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete customer (soft delete with login revoked)' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Customer deleted' })
  async remove(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const data = await this.nasabahService.remove(
      this.requireTenant(req),
      id,
      req.user?.sub,
    );
    return {
      message: 'Customer deleted successfully',
      data,
    };
  }
}
