import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SetorSampahModel = runtime.Types.Result.DefaultSelection<Prisma.$SetorSampahPayload>;
export type AggregateSetorSampah = {
    _count: SetorSampahCountAggregateOutputType | null;
    _avg: SetorSampahAvgAggregateOutputType | null;
    _sum: SetorSampahSumAggregateOutputType | null;
    _min: SetorSampahMinAggregateOutputType | null;
    _max: SetorSampahMaxAggregateOutputType | null;
};
export type SetorSampahAvgAggregateOutputType = {
    totalHarga: runtime.Decimal | null;
    totalPoin: runtime.Decimal | null;
};
export type SetorSampahSumAggregateOutputType = {
    totalHarga: runtime.Decimal | null;
    totalPoin: runtime.Decimal | null;
};
export type SetorSampahMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    tanggal: Date | null;
    idAdmin: string | null;
    idNasabah: string | null;
    status: $Enums.StatusSetor | null;
    totalHarga: runtime.Decimal | null;
    totalPoin: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type SetorSampahMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    tanggal: Date | null;
    idAdmin: string | null;
    idNasabah: string | null;
    status: $Enums.StatusSetor | null;
    totalHarga: runtime.Decimal | null;
    totalPoin: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type SetorSampahCountAggregateOutputType = {
    id: number;
    tenantId: number;
    tanggal: number;
    idAdmin: number;
    idNasabah: number;
    status: number;
    totalHarga: number;
    totalPoin: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type SetorSampahAvgAggregateInputType = {
    totalHarga?: true;
    totalPoin?: true;
};
export type SetorSampahSumAggregateInputType = {
    totalHarga?: true;
    totalPoin?: true;
};
export type SetorSampahMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    tanggal?: true;
    idAdmin?: true;
    idNasabah?: true;
    status?: true;
    totalHarga?: true;
    totalPoin?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type SetorSampahMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    tanggal?: true;
    idAdmin?: true;
    idNasabah?: true;
    status?: true;
    totalHarga?: true;
    totalPoin?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type SetorSampahCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    tanggal?: true;
    idAdmin?: true;
    idNasabah?: true;
    status?: true;
    totalHarga?: true;
    totalPoin?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type SetorSampahAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorSampahWhereInput;
    orderBy?: Prisma.SetorSampahOrderByWithRelationInput | Prisma.SetorSampahOrderByWithRelationInput[];
    cursor?: Prisma.SetorSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SetorSampahCountAggregateInputType;
    _avg?: SetorSampahAvgAggregateInputType;
    _sum?: SetorSampahSumAggregateInputType;
    _min?: SetorSampahMinAggregateInputType;
    _max?: SetorSampahMaxAggregateInputType;
};
export type GetSetorSampahAggregateType<T extends SetorSampahAggregateArgs> = {
    [P in keyof T & keyof AggregateSetorSampah]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSetorSampah[P]> : Prisma.GetScalarType<T[P], AggregateSetorSampah[P]>;
};
export type SetorSampahGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorSampahWhereInput;
    orderBy?: Prisma.SetorSampahOrderByWithAggregationInput | Prisma.SetorSampahOrderByWithAggregationInput[];
    by: Prisma.SetorSampahScalarFieldEnum[] | Prisma.SetorSampahScalarFieldEnum;
    having?: Prisma.SetorSampahScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SetorSampahCountAggregateInputType | true;
    _avg?: SetorSampahAvgAggregateInputType;
    _sum?: SetorSampahSumAggregateInputType;
    _min?: SetorSampahMinAggregateInputType;
    _max?: SetorSampahMaxAggregateInputType;
};
export type SetorSampahGroupByOutputType = {
    id: string;
    tenantId: string;
    tanggal: Date;
    idAdmin: string | null;
    idNasabah: string;
    status: $Enums.StatusSetor;
    totalHarga: runtime.Decimal;
    totalPoin: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: SetorSampahCountAggregateOutputType | null;
    _avg: SetorSampahAvgAggregateOutputType | null;
    _sum: SetorSampahSumAggregateOutputType | null;
    _min: SetorSampahMinAggregateOutputType | null;
    _max: SetorSampahMaxAggregateOutputType | null;
};
export type GetSetorSampahGroupByPayload<T extends SetorSampahGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SetorSampahGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SetorSampahGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SetorSampahGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SetorSampahGroupByOutputType[P]>;
}>>;
export type SetorSampahWhereInput = {
    AND?: Prisma.SetorSampahWhereInput | Prisma.SetorSampahWhereInput[];
    OR?: Prisma.SetorSampahWhereInput[];
    NOT?: Prisma.SetorSampahWhereInput | Prisma.SetorSampahWhereInput[];
    id?: Prisma.UuidFilter<"SetorSampah"> | string;
    tenantId?: Prisma.UuidFilter<"SetorSampah"> | string;
    tanggal?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    idAdmin?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    idNasabah?: Prisma.UuidFilter<"SetorSampah"> | string;
    status?: Prisma.EnumStatusSetorFilter<"SetorSampah"> | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"SetorSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"SetorSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    admin?: Prisma.XOR<Prisma.AdminBankNullableScalarRelationFilter, Prisma.AdminBankWhereInput> | null;
    nasabah?: Prisma.XOR<Prisma.NasabahScalarRelationFilter, Prisma.NasabahWhereInput>;
    detail?: Prisma.DetailSetorListRelationFilter;
    penukaran?: Prisma.PenukaranPoinListRelationFilter;
};
export type SetorSampahOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idAdmin?: Prisma.SortOrderInput | Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalHarga?: Prisma.SortOrder;
    totalPoin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    admin?: Prisma.AdminBankOrderByWithRelationInput;
    nasabah?: Prisma.NasabahOrderByWithRelationInput;
    detail?: Prisma.DetailSetorOrderByRelationAggregateInput;
    penukaran?: Prisma.PenukaranPoinOrderByRelationAggregateInput;
};
export type SetorSampahWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_tenantId?: Prisma.SetorSampahIdTenantIdCompoundUniqueInput;
    AND?: Prisma.SetorSampahWhereInput | Prisma.SetorSampahWhereInput[];
    OR?: Prisma.SetorSampahWhereInput[];
    NOT?: Prisma.SetorSampahWhereInput | Prisma.SetorSampahWhereInput[];
    tenantId?: Prisma.UuidFilter<"SetorSampah"> | string;
    tanggal?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    idAdmin?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    idNasabah?: Prisma.UuidFilter<"SetorSampah"> | string;
    status?: Prisma.EnumStatusSetorFilter<"SetorSampah"> | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"SetorSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"SetorSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    admin?: Prisma.XOR<Prisma.AdminBankNullableScalarRelationFilter, Prisma.AdminBankWhereInput> | null;
    nasabah?: Prisma.XOR<Prisma.NasabahScalarRelationFilter, Prisma.NasabahWhereInput>;
    detail?: Prisma.DetailSetorListRelationFilter;
    penukaran?: Prisma.PenukaranPoinListRelationFilter;
}, "id" | "id_tenantId">;
export type SetorSampahOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idAdmin?: Prisma.SortOrderInput | Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalHarga?: Prisma.SortOrder;
    totalPoin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SetorSampahCountOrderByAggregateInput;
    _avg?: Prisma.SetorSampahAvgOrderByAggregateInput;
    _max?: Prisma.SetorSampahMaxOrderByAggregateInput;
    _min?: Prisma.SetorSampahMinOrderByAggregateInput;
    _sum?: Prisma.SetorSampahSumOrderByAggregateInput;
};
export type SetorSampahScalarWhereWithAggregatesInput = {
    AND?: Prisma.SetorSampahScalarWhereWithAggregatesInput | Prisma.SetorSampahScalarWhereWithAggregatesInput[];
    OR?: Prisma.SetorSampahScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SetorSampahScalarWhereWithAggregatesInput | Prisma.SetorSampahScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SetorSampah"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"SetorSampah"> | string;
    tanggal?: Prisma.DateTimeWithAggregatesFilter<"SetorSampah"> | Date | string;
    idAdmin?: Prisma.UuidNullableWithAggregatesFilter<"SetorSampah"> | string | null;
    idNasabah?: Prisma.UuidWithAggregatesFilter<"SetorSampah"> | string;
    status?: Prisma.EnumStatusSetorWithAggregatesFilter<"SetorSampah"> | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalWithAggregatesFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalWithAggregatesFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SetorSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SetorSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SetorSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"SetorSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SetorSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"SetorSampah"> | string | null;
};
export type SetorSampahCreateInput = {
    id?: string;
    tanggal?: Date | string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutSetorSampahsInput;
    admin?: Prisma.AdminBankCreateNestedOneWithoutSetoranInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutSetoranInput;
    detail?: Prisma.DetailSetorCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutSetorInput;
};
export type SetorSampahUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detail?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorSampahUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSetorSampahsNestedInput;
    admin?: Prisma.AdminBankUpdateOneWithoutSetoranNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutSetoranNestedInput;
    detail?: Prisma.DetailSetorUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.DetailSetorUncheckedUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahCreateManyInput = {
    id?: string;
    tenantId: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type SetorSampahUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SetorSampahUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SetorSampahListRelationFilter = {
    every?: Prisma.SetorSampahWhereInput;
    some?: Prisma.SetorSampahWhereInput;
    none?: Prisma.SetorSampahWhereInput;
};
export type SetorSampahOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SetorSampahIdTenantIdCompoundUniqueInput = {
    id: string;
    tenantId: string;
};
export type SetorSampahCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idAdmin?: Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalHarga?: Prisma.SortOrder;
    totalPoin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type SetorSampahAvgOrderByAggregateInput = {
    totalHarga?: Prisma.SortOrder;
    totalPoin?: Prisma.SortOrder;
};
export type SetorSampahMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idAdmin?: Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalHarga?: Prisma.SortOrder;
    totalPoin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type SetorSampahMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idAdmin?: Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalHarga?: Prisma.SortOrder;
    totalPoin?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type SetorSampahSumOrderByAggregateInput = {
    totalHarga?: Prisma.SortOrder;
    totalPoin?: Prisma.SortOrder;
};
export type SetorSampahScalarRelationFilter = {
    is?: Prisma.SetorSampahWhereInput;
    isNot?: Prisma.SetorSampahWhereInput;
};
export type SetorSampahNullableScalarRelationFilter = {
    is?: Prisma.SetorSampahWhereInput | null;
    isNot?: Prisma.SetorSampahWhereInput | null;
};
export type SetorSampahCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutAdminInput, Prisma.SetorSampahUncheckedCreateWithoutAdminInput> | Prisma.SetorSampahCreateWithoutAdminInput[] | Prisma.SetorSampahUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutAdminInput | Prisma.SetorSampahCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.SetorSampahCreateManyAdminInputEnvelope;
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
};
export type SetorSampahUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutAdminInput, Prisma.SetorSampahUncheckedCreateWithoutAdminInput> | Prisma.SetorSampahCreateWithoutAdminInput[] | Prisma.SetorSampahUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutAdminInput | Prisma.SetorSampahCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.SetorSampahCreateManyAdminInputEnvelope;
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
};
export type SetorSampahUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutAdminInput, Prisma.SetorSampahUncheckedCreateWithoutAdminInput> | Prisma.SetorSampahCreateWithoutAdminInput[] | Prisma.SetorSampahUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutAdminInput | Prisma.SetorSampahCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.SetorSampahUpsertWithWhereUniqueWithoutAdminInput | Prisma.SetorSampahUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.SetorSampahCreateManyAdminInputEnvelope;
    set?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    disconnect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    delete?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    update?: Prisma.SetorSampahUpdateWithWhereUniqueWithoutAdminInput | Prisma.SetorSampahUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.SetorSampahUpdateManyWithWhereWithoutAdminInput | Prisma.SetorSampahUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
};
export type SetorSampahUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutAdminInput, Prisma.SetorSampahUncheckedCreateWithoutAdminInput> | Prisma.SetorSampahCreateWithoutAdminInput[] | Prisma.SetorSampahUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutAdminInput | Prisma.SetorSampahCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.SetorSampahUpsertWithWhereUniqueWithoutAdminInput | Prisma.SetorSampahUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.SetorSampahCreateManyAdminInputEnvelope;
    set?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    disconnect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    delete?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    update?: Prisma.SetorSampahUpdateWithWhereUniqueWithoutAdminInput | Prisma.SetorSampahUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.SetorSampahUpdateManyWithWhereWithoutAdminInput | Prisma.SetorSampahUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
};
export type SetorSampahCreateNestedManyWithoutNasabahInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutNasabahInput, Prisma.SetorSampahUncheckedCreateWithoutNasabahInput> | Prisma.SetorSampahCreateWithoutNasabahInput[] | Prisma.SetorSampahUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutNasabahInput | Prisma.SetorSampahCreateOrConnectWithoutNasabahInput[];
    createMany?: Prisma.SetorSampahCreateManyNasabahInputEnvelope;
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
};
export type SetorSampahUncheckedCreateNestedManyWithoutNasabahInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutNasabahInput, Prisma.SetorSampahUncheckedCreateWithoutNasabahInput> | Prisma.SetorSampahCreateWithoutNasabahInput[] | Prisma.SetorSampahUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutNasabahInput | Prisma.SetorSampahCreateOrConnectWithoutNasabahInput[];
    createMany?: Prisma.SetorSampahCreateManyNasabahInputEnvelope;
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
};
export type SetorSampahUpdateManyWithoutNasabahNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutNasabahInput, Prisma.SetorSampahUncheckedCreateWithoutNasabahInput> | Prisma.SetorSampahCreateWithoutNasabahInput[] | Prisma.SetorSampahUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutNasabahInput | Prisma.SetorSampahCreateOrConnectWithoutNasabahInput[];
    upsert?: Prisma.SetorSampahUpsertWithWhereUniqueWithoutNasabahInput | Prisma.SetorSampahUpsertWithWhereUniqueWithoutNasabahInput[];
    createMany?: Prisma.SetorSampahCreateManyNasabahInputEnvelope;
    set?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    disconnect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    delete?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    update?: Prisma.SetorSampahUpdateWithWhereUniqueWithoutNasabahInput | Prisma.SetorSampahUpdateWithWhereUniqueWithoutNasabahInput[];
    updateMany?: Prisma.SetorSampahUpdateManyWithWhereWithoutNasabahInput | Prisma.SetorSampahUpdateManyWithWhereWithoutNasabahInput[];
    deleteMany?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
};
export type SetorSampahUncheckedUpdateManyWithoutNasabahNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutNasabahInput, Prisma.SetorSampahUncheckedCreateWithoutNasabahInput> | Prisma.SetorSampahCreateWithoutNasabahInput[] | Prisma.SetorSampahUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutNasabahInput | Prisma.SetorSampahCreateOrConnectWithoutNasabahInput[];
    upsert?: Prisma.SetorSampahUpsertWithWhereUniqueWithoutNasabahInput | Prisma.SetorSampahUpsertWithWhereUniqueWithoutNasabahInput[];
    createMany?: Prisma.SetorSampahCreateManyNasabahInputEnvelope;
    set?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    disconnect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    delete?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    update?: Prisma.SetorSampahUpdateWithWhereUniqueWithoutNasabahInput | Prisma.SetorSampahUpdateWithWhereUniqueWithoutNasabahInput[];
    updateMany?: Prisma.SetorSampahUpdateManyWithWhereWithoutNasabahInput | Prisma.SetorSampahUpdateManyWithWhereWithoutNasabahInput[];
    deleteMany?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
};
export type EnumStatusSetorFieldUpdateOperationsInput = {
    set?: $Enums.StatusSetor;
};
export type SetorSampahCreateNestedOneWithoutDetailInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutDetailInput, Prisma.SetorSampahUncheckedCreateWithoutDetailInput>;
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutDetailInput;
    connect?: Prisma.SetorSampahWhereUniqueInput;
};
export type SetorSampahUpdateOneRequiredWithoutDetailNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutDetailInput, Prisma.SetorSampahUncheckedCreateWithoutDetailInput>;
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutDetailInput;
    upsert?: Prisma.SetorSampahUpsertWithoutDetailInput;
    connect?: Prisma.SetorSampahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SetorSampahUpdateToOneWithWhereWithoutDetailInput, Prisma.SetorSampahUpdateWithoutDetailInput>, Prisma.SetorSampahUncheckedUpdateWithoutDetailInput>;
};
export type SetorSampahCreateNestedOneWithoutPenukaranInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutPenukaranInput, Prisma.SetorSampahUncheckedCreateWithoutPenukaranInput>;
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutPenukaranInput;
    connect?: Prisma.SetorSampahWhereUniqueInput;
};
export type SetorSampahUpdateOneWithoutPenukaranNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutPenukaranInput, Prisma.SetorSampahUncheckedCreateWithoutPenukaranInput>;
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutPenukaranInput;
    upsert?: Prisma.SetorSampahUpsertWithoutPenukaranInput;
    disconnect?: Prisma.SetorSampahWhereInput | boolean;
    delete?: Prisma.SetorSampahWhereInput | boolean;
    connect?: Prisma.SetorSampahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SetorSampahUpdateToOneWithWhereWithoutPenukaranInput, Prisma.SetorSampahUpdateWithoutPenukaranInput>, Prisma.SetorSampahUncheckedUpdateWithoutPenukaranInput>;
};
export type SetorSampahCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutTenantInput, Prisma.SetorSampahUncheckedCreateWithoutTenantInput> | Prisma.SetorSampahCreateWithoutTenantInput[] | Prisma.SetorSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutTenantInput | Prisma.SetorSampahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.SetorSampahCreateManyTenantInputEnvelope;
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
};
export type SetorSampahUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutTenantInput, Prisma.SetorSampahUncheckedCreateWithoutTenantInput> | Prisma.SetorSampahCreateWithoutTenantInput[] | Prisma.SetorSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutTenantInput | Prisma.SetorSampahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.SetorSampahCreateManyTenantInputEnvelope;
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
};
export type SetorSampahUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutTenantInput, Prisma.SetorSampahUncheckedCreateWithoutTenantInput> | Prisma.SetorSampahCreateWithoutTenantInput[] | Prisma.SetorSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutTenantInput | Prisma.SetorSampahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.SetorSampahUpsertWithWhereUniqueWithoutTenantInput | Prisma.SetorSampahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.SetorSampahCreateManyTenantInputEnvelope;
    set?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    disconnect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    delete?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    update?: Prisma.SetorSampahUpdateWithWhereUniqueWithoutTenantInput | Prisma.SetorSampahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.SetorSampahUpdateManyWithWhereWithoutTenantInput | Prisma.SetorSampahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
};
export type SetorSampahUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.SetorSampahCreateWithoutTenantInput, Prisma.SetorSampahUncheckedCreateWithoutTenantInput> | Prisma.SetorSampahCreateWithoutTenantInput[] | Prisma.SetorSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SetorSampahCreateOrConnectWithoutTenantInput | Prisma.SetorSampahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.SetorSampahUpsertWithWhereUniqueWithoutTenantInput | Prisma.SetorSampahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.SetorSampahCreateManyTenantInputEnvelope;
    set?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    disconnect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    delete?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    connect?: Prisma.SetorSampahWhereUniqueInput | Prisma.SetorSampahWhereUniqueInput[];
    update?: Prisma.SetorSampahUpdateWithWhereUniqueWithoutTenantInput | Prisma.SetorSampahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.SetorSampahUpdateManyWithWhereWithoutTenantInput | Prisma.SetorSampahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
};
export type SetorSampahCreateWithoutAdminInput = {
    id?: string;
    tanggal?: Date | string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutSetorSampahsInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutSetoranInput;
    detail?: Prisma.DetailSetorCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutSetorInput;
};
export type SetorSampahUncheckedCreateWithoutAdminInput = {
    id?: string;
    tanggal?: Date | string;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detail?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorSampahCreateOrConnectWithoutAdminInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutAdminInput, Prisma.SetorSampahUncheckedCreateWithoutAdminInput>;
};
export type SetorSampahCreateManyAdminInputEnvelope = {
    data: Prisma.SetorSampahCreateManyAdminInput | Prisma.SetorSampahCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type SetorSampahUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    update: Prisma.XOR<Prisma.SetorSampahUpdateWithoutAdminInput, Prisma.SetorSampahUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutAdminInput, Prisma.SetorSampahUncheckedCreateWithoutAdminInput>;
};
export type SetorSampahUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateWithoutAdminInput, Prisma.SetorSampahUncheckedUpdateWithoutAdminInput>;
};
export type SetorSampahUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.SetorSampahScalarWhereInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateManyMutationInput, Prisma.SetorSampahUncheckedUpdateManyWithoutAdminInput>;
};
export type SetorSampahScalarWhereInput = {
    AND?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
    OR?: Prisma.SetorSampahScalarWhereInput[];
    NOT?: Prisma.SetorSampahScalarWhereInput | Prisma.SetorSampahScalarWhereInput[];
    id?: Prisma.UuidFilter<"SetorSampah"> | string;
    tenantId?: Prisma.UuidFilter<"SetorSampah"> | string;
    tanggal?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    idAdmin?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    idNasabah?: Prisma.UuidFilter<"SetorSampah"> | string;
    status?: Prisma.EnumStatusSetorFilter<"SetorSampah"> | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFilter<"SetorSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SetorSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"SetorSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"SetorSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"SetorSampah"> | string | null;
};
export type SetorSampahCreateWithoutNasabahInput = {
    id?: string;
    tanggal?: Date | string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutSetorSampahsInput;
    admin?: Prisma.AdminBankCreateNestedOneWithoutSetoranInput;
    detail?: Prisma.DetailSetorCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutSetorInput;
};
export type SetorSampahUncheckedCreateWithoutNasabahInput = {
    id?: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detail?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorSampahCreateOrConnectWithoutNasabahInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutNasabahInput, Prisma.SetorSampahUncheckedCreateWithoutNasabahInput>;
};
export type SetorSampahCreateManyNasabahInputEnvelope = {
    data: Prisma.SetorSampahCreateManyNasabahInput | Prisma.SetorSampahCreateManyNasabahInput[];
    skipDuplicates?: boolean;
};
export type SetorSampahUpsertWithWhereUniqueWithoutNasabahInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    update: Prisma.XOR<Prisma.SetorSampahUpdateWithoutNasabahInput, Prisma.SetorSampahUncheckedUpdateWithoutNasabahInput>;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutNasabahInput, Prisma.SetorSampahUncheckedCreateWithoutNasabahInput>;
};
export type SetorSampahUpdateWithWhereUniqueWithoutNasabahInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateWithoutNasabahInput, Prisma.SetorSampahUncheckedUpdateWithoutNasabahInput>;
};
export type SetorSampahUpdateManyWithWhereWithoutNasabahInput = {
    where: Prisma.SetorSampahScalarWhereInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateManyMutationInput, Prisma.SetorSampahUncheckedUpdateManyWithoutNasabahInput>;
};
export type SetorSampahCreateWithoutDetailInput = {
    id?: string;
    tanggal?: Date | string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutSetorSampahsInput;
    admin?: Prisma.AdminBankCreateNestedOneWithoutSetoranInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutSetoranInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutSetorInput;
};
export type SetorSampahUncheckedCreateWithoutDetailInput = {
    id?: string;
    tenantId: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorSampahCreateOrConnectWithoutDetailInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutDetailInput, Prisma.SetorSampahUncheckedCreateWithoutDetailInput>;
};
export type SetorSampahUpsertWithoutDetailInput = {
    update: Prisma.XOR<Prisma.SetorSampahUpdateWithoutDetailInput, Prisma.SetorSampahUncheckedUpdateWithoutDetailInput>;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutDetailInput, Prisma.SetorSampahUncheckedCreateWithoutDetailInput>;
    where?: Prisma.SetorSampahWhereInput;
};
export type SetorSampahUpdateToOneWithWhereWithoutDetailInput = {
    where?: Prisma.SetorSampahWhereInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateWithoutDetailInput, Prisma.SetorSampahUncheckedUpdateWithoutDetailInput>;
};
export type SetorSampahUpdateWithoutDetailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSetorSampahsNestedInput;
    admin?: Prisma.AdminBankUpdateOneWithoutSetoranNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutSetoranNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateWithoutDetailInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahCreateWithoutPenukaranInput = {
    id?: string;
    tanggal?: Date | string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutSetorSampahsInput;
    admin?: Prisma.AdminBankCreateNestedOneWithoutSetoranInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutSetoranInput;
    detail?: Prisma.DetailSetorCreateNestedManyWithoutSetorInput;
};
export type SetorSampahUncheckedCreateWithoutPenukaranInput = {
    id?: string;
    tenantId: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detail?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorSampahCreateOrConnectWithoutPenukaranInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutPenukaranInput, Prisma.SetorSampahUncheckedCreateWithoutPenukaranInput>;
};
export type SetorSampahUpsertWithoutPenukaranInput = {
    update: Prisma.XOR<Prisma.SetorSampahUpdateWithoutPenukaranInput, Prisma.SetorSampahUncheckedUpdateWithoutPenukaranInput>;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutPenukaranInput, Prisma.SetorSampahUncheckedCreateWithoutPenukaranInput>;
    where?: Prisma.SetorSampahWhereInput;
};
export type SetorSampahUpdateToOneWithWhereWithoutPenukaranInput = {
    where?: Prisma.SetorSampahWhereInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateWithoutPenukaranInput, Prisma.SetorSampahUncheckedUpdateWithoutPenukaranInput>;
};
export type SetorSampahUpdateWithoutPenukaranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSetorSampahsNestedInput;
    admin?: Prisma.AdminBankUpdateOneWithoutSetoranNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutSetoranNestedInput;
    detail?: Prisma.DetailSetorUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateWithoutPenukaranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.DetailSetorUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahCreateWithoutTenantInput = {
    id?: string;
    tanggal?: Date | string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    admin?: Prisma.AdminBankCreateNestedOneWithoutSetoranInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutSetoranInput;
    detail?: Prisma.DetailSetorCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutSetorInput;
};
export type SetorSampahUncheckedCreateWithoutTenantInput = {
    id?: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detail?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutSetorInput;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutSetorInput;
};
export type SetorSampahCreateOrConnectWithoutTenantInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutTenantInput, Prisma.SetorSampahUncheckedCreateWithoutTenantInput>;
};
export type SetorSampahCreateManyTenantInputEnvelope = {
    data: Prisma.SetorSampahCreateManyTenantInput | Prisma.SetorSampahCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type SetorSampahUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    update: Prisma.XOR<Prisma.SetorSampahUpdateWithoutTenantInput, Prisma.SetorSampahUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.SetorSampahCreateWithoutTenantInput, Prisma.SetorSampahUncheckedCreateWithoutTenantInput>;
};
export type SetorSampahUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.SetorSampahWhereUniqueInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateWithoutTenantInput, Prisma.SetorSampahUncheckedUpdateWithoutTenantInput>;
};
export type SetorSampahUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.SetorSampahScalarWhereInput;
    data: Prisma.XOR<Prisma.SetorSampahUpdateManyMutationInput, Prisma.SetorSampahUncheckedUpdateManyWithoutTenantInput>;
};
export type SetorSampahCreateManyAdminInput = {
    id?: string;
    tanggal?: Date | string;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type SetorSampahUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSetorSampahsNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutSetoranNestedInput;
    detail?: Prisma.DetailSetorUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.DetailSetorUncheckedUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SetorSampahCreateManyNasabahInput = {
    id?: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type SetorSampahUpdateWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSetorSampahsNestedInput;
    admin?: Prisma.AdminBankUpdateOneWithoutSetoranNestedInput;
    detail?: Prisma.DetailSetorUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.DetailSetorUncheckedUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateManyWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SetorSampahCreateManyTenantInput = {
    id?: string;
    tanggal?: Date | string;
    idAdmin?: string | null;
    idNasabah: string;
    status?: $Enums.StatusSetor;
    totalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type SetorSampahUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.AdminBankUpdateOneWithoutSetoranNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutSetoranNestedInput;
    detail?: Prisma.DetailSetorUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.DetailSetorUncheckedUpdateManyWithoutSetorNestedInput;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutSetorNestedInput;
};
export type SetorSampahUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idAdmin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSetorFieldUpdateOperationsInput | $Enums.StatusSetor;
    totalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SetorSampahCountOutputType = {
    detail: number;
    penukaran: number;
};
export type SetorSampahCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail?: boolean | SetorSampahCountOutputTypeCountDetailArgs;
    penukaran?: boolean | SetorSampahCountOutputTypeCountPenukaranArgs;
};
export type SetorSampahCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahCountOutputTypeSelect<ExtArgs> | null;
};
export type SetorSampahCountOutputTypeCountDetailArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailSetorWhereInput;
};
export type SetorSampahCountOutputTypeCountPenukaranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenukaranPoinWhereInput;
};
export type SetorSampahSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idAdmin?: boolean;
    idNasabah?: boolean;
    status?: boolean;
    totalHarga?: boolean;
    totalPoin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.SetorSampah$adminArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    detail?: boolean | Prisma.SetorSampah$detailArgs<ExtArgs>;
    penukaran?: boolean | Prisma.SetorSampah$penukaranArgs<ExtArgs>;
    _count?: boolean | Prisma.SetorSampahCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["setorSampah"]>;
export type SetorSampahSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idAdmin?: boolean;
    idNasabah?: boolean;
    status?: boolean;
    totalHarga?: boolean;
    totalPoin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.SetorSampah$adminArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["setorSampah"]>;
export type SetorSampahSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idAdmin?: boolean;
    idNasabah?: boolean;
    status?: boolean;
    totalHarga?: boolean;
    totalPoin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.SetorSampah$adminArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["setorSampah"]>;
export type SetorSampahSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idAdmin?: boolean;
    idNasabah?: boolean;
    status?: boolean;
    totalHarga?: boolean;
    totalPoin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type SetorSampahOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "tanggal" | "idAdmin" | "idNasabah" | "status" | "totalHarga" | "totalPoin" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["setorSampah"]>;
export type SetorSampahInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.SetorSampah$adminArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    detail?: boolean | Prisma.SetorSampah$detailArgs<ExtArgs>;
    penukaran?: boolean | Prisma.SetorSampah$penukaranArgs<ExtArgs>;
    _count?: boolean | Prisma.SetorSampahCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SetorSampahIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.SetorSampah$adminArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
};
export type SetorSampahIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.SetorSampah$adminArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
};
export type $SetorSampahPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SetorSampah";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        admin: Prisma.$AdminBankPayload<ExtArgs> | null;
        nasabah: Prisma.$NasabahPayload<ExtArgs>;
        detail: Prisma.$DetailSetorPayload<ExtArgs>[];
        penukaran: Prisma.$PenukaranPoinPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        tanggal: Date;
        idAdmin: string | null;
        idNasabah: string;
        status: $Enums.StatusSetor;
        totalHarga: runtime.Decimal;
        totalPoin: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["setorSampah"]>;
    composites: {};
};
export type SetorSampahGetPayload<S extends boolean | null | undefined | SetorSampahDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload, S>;
export type SetorSampahCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SetorSampahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SetorSampahCountAggregateInputType | true;
};
export interface SetorSampahDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SetorSampah'];
        meta: {
            name: 'SetorSampah';
        };
    };
    findUnique<T extends SetorSampahFindUniqueArgs>(args: Prisma.SelectSubset<T, SetorSampahFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SetorSampahFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SetorSampahFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SetorSampahFindFirstArgs>(args?: Prisma.SelectSubset<T, SetorSampahFindFirstArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SetorSampahFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SetorSampahFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SetorSampahFindManyArgs>(args?: Prisma.SelectSubset<T, SetorSampahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SetorSampahCreateArgs>(args: Prisma.SelectSubset<T, SetorSampahCreateArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SetorSampahCreateManyArgs>(args?: Prisma.SelectSubset<T, SetorSampahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SetorSampahCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SetorSampahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SetorSampahDeleteArgs>(args: Prisma.SelectSubset<T, SetorSampahDeleteArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SetorSampahUpdateArgs>(args: Prisma.SelectSubset<T, SetorSampahUpdateArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SetorSampahDeleteManyArgs>(args?: Prisma.SelectSubset<T, SetorSampahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SetorSampahUpdateManyArgs>(args: Prisma.SelectSubset<T, SetorSampahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SetorSampahUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SetorSampahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SetorSampahUpsertArgs>(args: Prisma.SelectSubset<T, SetorSampahUpsertArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SetorSampahCountArgs>(args?: Prisma.Subset<T, SetorSampahCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SetorSampahCountAggregateOutputType> : number>;
    aggregate<T extends SetorSampahAggregateArgs>(args: Prisma.Subset<T, SetorSampahAggregateArgs>): Prisma.PrismaPromise<GetSetorSampahAggregateType<T>>;
    groupBy<T extends SetorSampahGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SetorSampahGroupByArgs['orderBy'];
    } : {
        orderBy?: SetorSampahGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SetorSampahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetorSampahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SetorSampahFieldRefs;
}
export interface Prisma__SetorSampahClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    admin<T extends Prisma.SetorSampah$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SetorSampah$adminArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    nasabah<T extends Prisma.NasabahDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NasabahDefaultArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detail<T extends Prisma.SetorSampah$detailArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SetorSampah$detailArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    penukaran<T extends Prisma.SetorSampah$penukaranArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SetorSampah$penukaranArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SetorSampahFieldRefs {
    readonly id: Prisma.FieldRef<"SetorSampah", 'String'>;
    readonly tenantId: Prisma.FieldRef<"SetorSampah", 'String'>;
    readonly tanggal: Prisma.FieldRef<"SetorSampah", 'DateTime'>;
    readonly idAdmin: Prisma.FieldRef<"SetorSampah", 'String'>;
    readonly idNasabah: Prisma.FieldRef<"SetorSampah", 'String'>;
    readonly status: Prisma.FieldRef<"SetorSampah", 'StatusSetor'>;
    readonly totalHarga: Prisma.FieldRef<"SetorSampah", 'Decimal'>;
    readonly totalPoin: Prisma.FieldRef<"SetorSampah", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"SetorSampah", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SetorSampah", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"SetorSampah", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"SetorSampah", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"SetorSampah", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"SetorSampah", 'String'>;
}
export type SetorSampahFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where: Prisma.SetorSampahWhereUniqueInput;
};
export type SetorSampahFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where: Prisma.SetorSampahWhereUniqueInput;
};
export type SetorSampahFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where?: Prisma.SetorSampahWhereInput;
    orderBy?: Prisma.SetorSampahOrderByWithRelationInput | Prisma.SetorSampahOrderByWithRelationInput[];
    cursor?: Prisma.SetorSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SetorSampahScalarFieldEnum | Prisma.SetorSampahScalarFieldEnum[];
};
export type SetorSampahFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where?: Prisma.SetorSampahWhereInput;
    orderBy?: Prisma.SetorSampahOrderByWithRelationInput | Prisma.SetorSampahOrderByWithRelationInput[];
    cursor?: Prisma.SetorSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SetorSampahScalarFieldEnum | Prisma.SetorSampahScalarFieldEnum[];
};
export type SetorSampahFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where?: Prisma.SetorSampahWhereInput;
    orderBy?: Prisma.SetorSampahOrderByWithRelationInput | Prisma.SetorSampahOrderByWithRelationInput[];
    cursor?: Prisma.SetorSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SetorSampahScalarFieldEnum | Prisma.SetorSampahScalarFieldEnum[];
};
export type SetorSampahCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetorSampahCreateInput, Prisma.SetorSampahUncheckedCreateInput>;
};
export type SetorSampahCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SetorSampahCreateManyInput | Prisma.SetorSampahCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SetorSampahCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    data: Prisma.SetorSampahCreateManyInput | Prisma.SetorSampahCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SetorSampahIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SetorSampahUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetorSampahUpdateInput, Prisma.SetorSampahUncheckedUpdateInput>;
    where: Prisma.SetorSampahWhereUniqueInput;
};
export type SetorSampahUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SetorSampahUpdateManyMutationInput, Prisma.SetorSampahUncheckedUpdateManyInput>;
    where?: Prisma.SetorSampahWhereInput;
    limit?: number;
};
export type SetorSampahUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetorSampahUpdateManyMutationInput, Prisma.SetorSampahUncheckedUpdateManyInput>;
    where?: Prisma.SetorSampahWhereInput;
    limit?: number;
    include?: Prisma.SetorSampahIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SetorSampahUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where: Prisma.SetorSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetorSampahCreateInput, Prisma.SetorSampahUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SetorSampahUpdateInput, Prisma.SetorSampahUncheckedUpdateInput>;
};
export type SetorSampahDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where: Prisma.SetorSampahWhereUniqueInput;
};
export type SetorSampahDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorSampahWhereInput;
    limit?: number;
};
export type SetorSampah$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where?: Prisma.AdminBankWhereInput;
};
export type SetorSampah$detailArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
    where?: Prisma.DetailSetorWhereInput;
    orderBy?: Prisma.DetailSetorOrderByWithRelationInput | Prisma.DetailSetorOrderByWithRelationInput[];
    cursor?: Prisma.DetailSetorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetailSetorScalarFieldEnum | Prisma.DetailSetorScalarFieldEnum[];
};
export type SetorSampah$penukaranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
    where?: Prisma.PenukaranPoinWhereInput;
    orderBy?: Prisma.PenukaranPoinOrderByWithRelationInput | Prisma.PenukaranPoinOrderByWithRelationInput[];
    cursor?: Prisma.PenukaranPoinWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PenukaranPoinScalarFieldEnum | Prisma.PenukaranPoinScalarFieldEnum[];
};
export type SetorSampahDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
};
