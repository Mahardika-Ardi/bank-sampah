import { PartialType } from '@nestjs/mapped-types';
import { CreateKategoriSampahDto } from './create-kategori.dto.js';

export class UpdateKategoriSampahDto extends PartialType(
  CreateKategoriSampahDto,
) {}
