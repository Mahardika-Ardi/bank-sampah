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
import { HadiahService } from './hadiah.service.js';
import { CreateHadiahDto } from './dto/create-hadiah.dto.js';
import { UpdateHadiahDto } from './dto/update-hadiah.dto.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Role } from '../../shared/decorators/role.decorator.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import {
  photoUploadOptions,
  UploadedPhoto,
} from '../../shared/utils/multer-photo.utils.js';
import { UUID_EXAMPLE, HADIAH_LIST_RESPONSE } from '../../shared/swagger/api-examples.js';

@ApiTags('Hadiah')
@ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
@Controller('hadiah')
export class HadiahController {
  constructor(private readonly hadiahService: HadiahService) {}

  private requireTenant(req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    return tenant;
  }

  @Get()
  @ApiOperation({ summary: 'Get reward / voucher catalog' })
  @ApiResponse({
    status: 200,
    description: 'Catalog retrieved',
    schema: { example: HADIAH_LIST_RESPONSE },
  })
  async findAll(@Req() req: Request) {
    const data = await this.hadiahService.findAll(this.requireTenant(req));
    return {
      message: 'Reward catalog retrieved successfully',
      data,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get reward detail' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Reward detail retrieved' })
  async findOne(@Req() req: Request, @Param('id', ParseUUIDPipe) id: string) {
    const data = await this.hadiahService.findOne(this.requireTenant(req), id);
    return {
      message: 'Reward detail retrieved successfully',
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
        namaHadiah: { type: 'string', example: 'Gula Pasir 1 Kg' },
        poinDibutuhkan: { type: 'number', example: 60 },
        stok: { type: 'number', example: 30 },
        foto: { type: 'string', format: 'binary' },
      },
      required: ['namaHadiah', 'poinDibutuhkan', 'stok'],
    },
  })
  @ApiOperation({ summary: 'Add new reward (Admin, photo optional)' })
  @ApiResponse({ status: 201, description: 'Reward created' })
  async create(
    @Req() req: Request,
    @Body() dto: CreateHadiahDto,
    @UploadedFile() file: UploadedPhoto | undefined,
  ) {
    const data = await this.hadiahService.create(
      this.requireTenant(req),
      dto,
      file,
    );
    return {
      message: 'New reward added successfully',
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
        namaHadiah: { type: 'string', example: 'Gula Pasir 1 Kg' },
        poinDibutuhkan: { type: 'number', example: 60 },
        stok: { type: 'number', example: 30 },
        foto: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiOperation({ summary: 'Update reward (Admin, photo optional)' })
  @ApiResponse({ status: 200, description: 'Reward updated' })
  async update(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateHadiahDto,
    @UploadedFile() file: UploadedPhoto | undefined,
  ) {
    const data = await this.hadiahService.update(
      this.requireTenant(req),
      id,
      dto,
      file,
      req.user?.sub,
    );
    return {
      message: 'Reward data updated successfully',
      data,
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Role(UserRole.admin_bank)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Delete reward (Admin, soft delete)' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({ status: 200, description: 'Reward deleted' })
  async remove(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const data = await this.hadiahService.remove(
      this.requireTenant(req),
      id,
      req.user?.sub,
    );
    return {
      message: 'Reward deleted successfully',
      data,
    };
  }
}
