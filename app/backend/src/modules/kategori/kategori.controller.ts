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
} from '@nestjs/common';
import type { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiBearerAuth, ApiConsumes, ApiBody, ApiParam } from '@nestjs/swagger';
import { UnauthorizedException } from '@nestjs/common';
import { KategoriService } from './kategori.service.js';
import { CreateKategoriSampahDto } from './dto/create-kategori.dto.js';
import { UpdateKategoriSampahDto } from './dto/update-kategori.dto.js';
import {
  KATEGORI_LIST_RESPONSE,
  KATEGORI_DETAIL_RESPONSE,
  KATEGORI_CREATE_RESPONSE,
  UUID_EXAMPLE,
} from '../../shared/swagger/api-examples.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Role } from '../../shared/decorators/role.decorator.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import {
  photoUploadOptions,
  UploadedPhoto,
} from '../../shared/utils/multer-photo.utils.js';

@ApiTags('Kategori Sampah')
@ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
@Controller('kategori-sampah')
export class KategoriController {
  constructor(private readonly kategoriService: KategoriService) {}

  private requireTenant(req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    return tenant;
  }

  @Get()
  @ApiOperation({ summary: 'List waste categories with price and points per kg' })
  @ApiResponse({
    status: 200,
    description: 'Category list retrieved',
    schema: { example: KATEGORI_LIST_RESPONSE },
  })
  async findAll(@Req() req: Request) {
    const data = await this.kategoriService.findAll(this.requireTenant(req));
    return {
      message: 'Recyclable waste category list retrieved successfully',
      data,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get waste category detail' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({
    status: 200,
    description: 'Category detail retrieved',
    schema: { example: KATEGORI_DETAIL_RESPONSE },
  })
  async findOne(@Req() req: Request, @Param('id', ParseUUIDPipe) id: string) {
    const data = await this.kategoriService.findOne(this.requireTenant(req), id);
    return {
      message: 'Waste category detail retrieved successfully',
      data,
    };
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Role(UserRole.admin_bank)
  @ApiBearerAuth('JWT-auth')
  @UseInterceptors(FileInterceptor('foto', photoUploadOptions()))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        namaKategori: { type: 'string', example: 'Tembaga Super' },
        hargaPerKg: { type: 'number', example: 75000 },
        poinPerKg: { type: 'number', example: 150 },
        jenis: {
          type: 'string',
          enum: ['plastik', 'kertas', 'logam', 'kaca'],
          example: 'logam',
        },
        foto: { type: 'string', format: 'binary' },
      },
      required: ['namaKategori', 'hargaPerKg', 'poinPerKg', 'jenis'],
    },
  })
  @ApiOperation({ summary: 'Add a new waste category (Admin, photo optional)' })
  @ApiResponse({
    status: 201,
    description: 'Category created',
    schema: { example: KATEGORI_CREATE_RESPONSE },
  })
  async create(
    @Req() req: Request,
    @Body() dto: CreateKategoriSampahDto,
    @UploadedFile() file: UploadedPhoto | undefined,
  ) {
    const data = await this.kategoriService.create(
      this.requireTenant(req),
      dto,
      file,
    );
    return {
      message: 'New waste category saved successfully',
      data,
    };
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Role(UserRole.admin_bank)
  @ApiBearerAuth('JWT-auth')
  @UseInterceptors(FileInterceptor('foto', photoUploadOptions()))
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        namaKategori: { type: 'string', example: 'Tembaga Super' },
        hargaPerKg: { type: 'number', example: 75000 },
        poinPerKg: { type: 'number', example: 150 },
        jenis: {
          type: 'string',
          enum: ['plastik', 'kertas', 'logam', 'kaca'],
          example: 'logam',
        },
        foto: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiOperation({ summary: 'Update a waste category (Admin, photo optional)' })
  @ApiResponse({
    status: 200,
    description: 'Category updated',
    schema: { example: KATEGORI_DETAIL_RESPONSE },
  })
  async update(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateKategoriSampahDto,
    @UploadedFile() file: UploadedPhoto | undefined,
  ) {
    const user = req.user;
    const data = await this.kategoriService.update(
      this.requireTenant(req),
      id,
      dto,
      file,
      user?.sub,
    );
    return {
      message: 'Waste category updated successfully',
      data,
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Role(UserRole.admin_bank)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Delete a waste category (Admin, soft delete)' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Category deleted' })
  async remove(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const user = req.user;
    const data = await this.kategoriService.remove(
      this.requireTenant(req),
      id,
      user?.sub,
    );
    return {
      message: 'Waste category deleted successfully',
      data,
    };
  }
}
