import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KategoriSampahModel = runtime.Types.Result.DefaultSelection<Prisma.$KategoriSampahPayload>;
export type AggregateKategoriSampah = {
    _count: KategoriSampahCountAggregateOutputType | null;
    _avg: KategoriSampahAvgAggregateOutputType | null;
    _sum: KategoriSampahSumAggregateOutputType | null;
    _min: KategoriSampahMinAggregateOutputType | null;
    _max: KategoriSampahMaxAggregateOutputType | null;
};
export type KategoriSampahAvgAggregateOutputType = {
    hargaPerKg: runtime.Decimal | null;
    poinPerKg: runtime.Decimal | null;
};
export type KategoriSampahSumAggregateOutputType = {
    hargaPerKg: runtime.Decimal | null;
    poinPerKg: runtime.Decimal | null;
};
export type KategoriSampahMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaKategori: string | null;
    hargaPerKg: runtime.Decimal | null;
    poinPerKg: runtime.Decimal | null;
    jenis: $Enums.JenisSampah | null;
    foto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type KategoriSampahMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaKategori: string | null;
    hargaPerKg: runtime.Decimal | null;
    poinPerKg: runtime.Decimal | null;
    jenis: $Enums.JenisSampah | null;
    foto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type KategoriSampahCountAggregateOutputType = {
    id: number;
    tenantId: number;
    namaKategori: number;
    hargaPerKg: number;
    poinPerKg: number;
    jenis: number;
    foto: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type KategoriSampahAvgAggregateInputType = {
    hargaPerKg?: true;
    poinPerKg?: true;
};
export type KategoriSampahSumAggregateInputType = {
    hargaPerKg?: true;
    poinPerKg?: true;
};
export type KategoriSampahMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaKategori?: true;
    hargaPerKg?: true;
    poinPerKg?: true;
    jenis?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type KategoriSampahMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaKategori?: true;
    hargaPerKg?: true;
    poinPerKg?: true;
    jenis?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type KategoriSampahCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaKategori?: true;
    hargaPerKg?: true;
    poinPerKg?: true;
    jenis?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type KategoriSampahAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KategoriSampahWhereInput;
    orderBy?: Prisma.KategoriSampahOrderByWithRelationInput | Prisma.KategoriSampahOrderByWithRelationInput[];
    cursor?: Prisma.KategoriSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KategoriSampahCountAggregateInputType;
    _avg?: KategoriSampahAvgAggregateInputType;
    _sum?: KategoriSampahSumAggregateInputType;
    _min?: KategoriSampahMinAggregateInputType;
    _max?: KategoriSampahMaxAggregateInputType;
};
export type GetKategoriSampahAggregateType<T extends KategoriSampahAggregateArgs> = {
    [P in keyof T & keyof AggregateKategoriSampah]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKategoriSampah[P]> : Prisma.GetScalarType<T[P], AggregateKategoriSampah[P]>;
};
export type KategoriSampahGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KategoriSampahWhereInput;
    orderBy?: Prisma.KategoriSampahOrderByWithAggregationInput | Prisma.KategoriSampahOrderByWithAggregationInput[];
    by: Prisma.KategoriSampahScalarFieldEnum[] | Prisma.KategoriSampahScalarFieldEnum;
    having?: Prisma.KategoriSampahScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KategoriSampahCountAggregateInputType | true;
    _avg?: KategoriSampahAvgAggregateInputType;
    _sum?: KategoriSampahSumAggregateInputType;
    _min?: KategoriSampahMinAggregateInputType;
    _max?: KategoriSampahMaxAggregateInputType;
};
export type KategoriSampahGroupByOutputType = {
    id: string;
    tenantId: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal;
    poinPerKg: runtime.Decimal;
    jenis: $Enums.JenisSampah;
    foto: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: KategoriSampahCountAggregateOutputType | null;
    _avg: KategoriSampahAvgAggregateOutputType | null;
    _sum: KategoriSampahSumAggregateOutputType | null;
    _min: KategoriSampahMinAggregateOutputType | null;
    _max: KategoriSampahMaxAggregateOutputType | null;
};
export type GetKategoriSampahGroupByPayload<T extends KategoriSampahGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KategoriSampahGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KategoriSampahGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KategoriSampahGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KategoriSampahGroupByOutputType[P]>;
}>>;
export type KategoriSampahWhereInput = {
    AND?: Prisma.KategoriSampahWhereInput | Prisma.KategoriSampahWhereInput[];
    OR?: Prisma.KategoriSampahWhereInput[];
    NOT?: Prisma.KategoriSampahWhereInput | Prisma.KategoriSampahWhereInput[];
    id?: Prisma.UuidFilter<"KategoriSampah"> | string;
    tenantId?: Prisma.UuidFilter<"KategoriSampah"> | string;
    namaKategori?: Prisma.StringFilter<"KategoriSampah"> | string;
    hargaPerKg?: Prisma.DecimalFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFilter<"KategoriSampah"> | $Enums.JenisSampah;
    foto?: Prisma.StringNullableFilter<"KategoriSampah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KategoriSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"KategoriSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"KategoriSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"KategoriSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"KategoriSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"KategoriSampah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    detailSetor?: Prisma.DetailSetorListRelationFilter;
};
export type KategoriSampahOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaKategori?: Prisma.SortOrder;
    hargaPerKg?: Prisma.SortOrder;
    poinPerKg?: Prisma.SortOrder;
    jenis?: Prisma.SortOrder;
    foto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    detailSetor?: Prisma.DetailSetorOrderByRelationAggregateInput;
};
export type KategoriSampahWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenantId_namaKategori?: Prisma.KategoriSampahTenantIdNamaKategoriCompoundUniqueInput;
    id_tenantId?: Prisma.KategoriSampahIdTenantIdCompoundUniqueInput;
    AND?: Prisma.KategoriSampahWhereInput | Prisma.KategoriSampahWhereInput[];
    OR?: Prisma.KategoriSampahWhereInput[];
    NOT?: Prisma.KategoriSampahWhereInput | Prisma.KategoriSampahWhereInput[];
    tenantId?: Prisma.UuidFilter<"KategoriSampah"> | string;
    namaKategori?: Prisma.StringFilter<"KategoriSampah"> | string;
    hargaPerKg?: Prisma.DecimalFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFilter<"KategoriSampah"> | $Enums.JenisSampah;
    foto?: Prisma.StringNullableFilter<"KategoriSampah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KategoriSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"KategoriSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"KategoriSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"KategoriSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"KategoriSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"KategoriSampah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    detailSetor?: Prisma.DetailSetorListRelationFilter;
}, "id" | "tenantId_namaKategori" | "id_tenantId">;
export type KategoriSampahOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaKategori?: Prisma.SortOrder;
    hargaPerKg?: Prisma.SortOrder;
    poinPerKg?: Prisma.SortOrder;
    jenis?: Prisma.SortOrder;
    foto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.KategoriSampahCountOrderByAggregateInput;
    _avg?: Prisma.KategoriSampahAvgOrderByAggregateInput;
    _max?: Prisma.KategoriSampahMaxOrderByAggregateInput;
    _min?: Prisma.KategoriSampahMinOrderByAggregateInput;
    _sum?: Prisma.KategoriSampahSumOrderByAggregateInput;
};
export type KategoriSampahScalarWhereWithAggregatesInput = {
    AND?: Prisma.KategoriSampahScalarWhereWithAggregatesInput | Prisma.KategoriSampahScalarWhereWithAggregatesInput[];
    OR?: Prisma.KategoriSampahScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KategoriSampahScalarWhereWithAggregatesInput | Prisma.KategoriSampahScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"KategoriSampah"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"KategoriSampah"> | string;
    namaKategori?: Prisma.StringWithAggregatesFilter<"KategoriSampah"> | string;
    hargaPerKg?: Prisma.DecimalWithAggregatesFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalWithAggregatesFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahWithAggregatesFilter<"KategoriSampah"> | $Enums.JenisSampah;
    foto?: Prisma.StringNullableWithAggregatesFilter<"KategoriSampah"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KategoriSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"KategoriSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"KategoriSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"KategoriSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"KategoriSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"KategoriSampah"> | string | null;
};
export type KategoriSampahCreateInput = {
    id?: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutKategoriSampahsInput;
    detailSetor?: Prisma.DetailSetorCreateNestedManyWithoutKategoriInput;
};
export type KategoriSampahUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detailSetor?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutKategoriInput;
};
export type KategoriSampahUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutKategoriSampahsNestedInput;
    detailSetor?: Prisma.DetailSetorUpdateManyWithoutKategoriNestedInput;
};
export type KategoriSampahUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detailSetor?: Prisma.DetailSetorUncheckedUpdateManyWithoutKategoriNestedInput;
};
export type KategoriSampahCreateManyInput = {
    id?: string;
    tenantId: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type KategoriSampahUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type KategoriSampahUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type KategoriSampahTenantIdNamaKategoriCompoundUniqueInput = {
    tenantId: string;
    namaKategori: string;
};
export type KategoriSampahIdTenantIdCompoundUniqueInput = {
    id: string;
    tenantId: string;
};
export type KategoriSampahCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaKategori?: Prisma.SortOrder;
    hargaPerKg?: Prisma.SortOrder;
    poinPerKg?: Prisma.SortOrder;
    jenis?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type KategoriSampahAvgOrderByAggregateInput = {
    hargaPerKg?: Prisma.SortOrder;
    poinPerKg?: Prisma.SortOrder;
};
export type KategoriSampahMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaKategori?: Prisma.SortOrder;
    hargaPerKg?: Prisma.SortOrder;
    poinPerKg?: Prisma.SortOrder;
    jenis?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type KategoriSampahMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaKategori?: Prisma.SortOrder;
    hargaPerKg?: Prisma.SortOrder;
    poinPerKg?: Prisma.SortOrder;
    jenis?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type KategoriSampahSumOrderByAggregateInput = {
    hargaPerKg?: Prisma.SortOrder;
    poinPerKg?: Prisma.SortOrder;
};
export type KategoriSampahScalarRelationFilter = {
    is?: Prisma.KategoriSampahWhereInput;
    isNot?: Prisma.KategoriSampahWhereInput;
};
export type KategoriSampahListRelationFilter = {
    every?: Prisma.KategoriSampahWhereInput;
    some?: Prisma.KategoriSampahWhereInput;
    none?: Prisma.KategoriSampahWhereInput;
};
export type KategoriSampahOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumJenisSampahFieldUpdateOperationsInput = {
    set?: $Enums.JenisSampah;
};
export type KategoriSampahCreateNestedOneWithoutDetailSetorInput = {
    create?: Prisma.XOR<Prisma.KategoriSampahCreateWithoutDetailSetorInput, Prisma.KategoriSampahUncheckedCreateWithoutDetailSetorInput>;
    connectOrCreate?: Prisma.KategoriSampahCreateOrConnectWithoutDetailSetorInput;
    connect?: Prisma.KategoriSampahWhereUniqueInput;
};
export type KategoriSampahUpdateOneRequiredWithoutDetailSetorNestedInput = {
    create?: Prisma.XOR<Prisma.KategoriSampahCreateWithoutDetailSetorInput, Prisma.KategoriSampahUncheckedCreateWithoutDetailSetorInput>;
    connectOrCreate?: Prisma.KategoriSampahCreateOrConnectWithoutDetailSetorInput;
    upsert?: Prisma.KategoriSampahUpsertWithoutDetailSetorInput;
    connect?: Prisma.KategoriSampahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.KategoriSampahUpdateToOneWithWhereWithoutDetailSetorInput, Prisma.KategoriSampahUpdateWithoutDetailSetorInput>, Prisma.KategoriSampahUncheckedUpdateWithoutDetailSetorInput>;
};
export type KategoriSampahCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.KategoriSampahCreateWithoutTenantInput, Prisma.KategoriSampahUncheckedCreateWithoutTenantInput> | Prisma.KategoriSampahCreateWithoutTenantInput[] | Prisma.KategoriSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.KategoriSampahCreateOrConnectWithoutTenantInput | Prisma.KategoriSampahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.KategoriSampahCreateManyTenantInputEnvelope;
    connect?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
};
export type KategoriSampahUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.KategoriSampahCreateWithoutTenantInput, Prisma.KategoriSampahUncheckedCreateWithoutTenantInput> | Prisma.KategoriSampahCreateWithoutTenantInput[] | Prisma.KategoriSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.KategoriSampahCreateOrConnectWithoutTenantInput | Prisma.KategoriSampahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.KategoriSampahCreateManyTenantInputEnvelope;
    connect?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
};
export type KategoriSampahUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.KategoriSampahCreateWithoutTenantInput, Prisma.KategoriSampahUncheckedCreateWithoutTenantInput> | Prisma.KategoriSampahCreateWithoutTenantInput[] | Prisma.KategoriSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.KategoriSampahCreateOrConnectWithoutTenantInput | Prisma.KategoriSampahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.KategoriSampahUpsertWithWhereUniqueWithoutTenantInput | Prisma.KategoriSampahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.KategoriSampahCreateManyTenantInputEnvelope;
    set?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    disconnect?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    delete?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    connect?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    update?: Prisma.KategoriSampahUpdateWithWhereUniqueWithoutTenantInput | Prisma.KategoriSampahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.KategoriSampahUpdateManyWithWhereWithoutTenantInput | Prisma.KategoriSampahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.KategoriSampahScalarWhereInput | Prisma.KategoriSampahScalarWhereInput[];
};
export type KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.KategoriSampahCreateWithoutTenantInput, Prisma.KategoriSampahUncheckedCreateWithoutTenantInput> | Prisma.KategoriSampahCreateWithoutTenantInput[] | Prisma.KategoriSampahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.KategoriSampahCreateOrConnectWithoutTenantInput | Prisma.KategoriSampahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.KategoriSampahUpsertWithWhereUniqueWithoutTenantInput | Prisma.KategoriSampahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.KategoriSampahCreateManyTenantInputEnvelope;
    set?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    disconnect?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    delete?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    connect?: Prisma.KategoriSampahWhereUniqueInput | Prisma.KategoriSampahWhereUniqueInput[];
    update?: Prisma.KategoriSampahUpdateWithWhereUniqueWithoutTenantInput | Prisma.KategoriSampahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.KategoriSampahUpdateManyWithWhereWithoutTenantInput | Prisma.KategoriSampahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.KategoriSampahScalarWhereInput | Prisma.KategoriSampahScalarWhereInput[];
};
export type KategoriSampahCreateWithoutDetailSetorInput = {
    id?: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutKategoriSampahsInput;
};
export type KategoriSampahUncheckedCreateWithoutDetailSetorInput = {
    id?: string;
    tenantId: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type KategoriSampahCreateOrConnectWithoutDetailSetorInput = {
    where: Prisma.KategoriSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.KategoriSampahCreateWithoutDetailSetorInput, Prisma.KategoriSampahUncheckedCreateWithoutDetailSetorInput>;
};
export type KategoriSampahUpsertWithoutDetailSetorInput = {
    update: Prisma.XOR<Prisma.KategoriSampahUpdateWithoutDetailSetorInput, Prisma.KategoriSampahUncheckedUpdateWithoutDetailSetorInput>;
    create: Prisma.XOR<Prisma.KategoriSampahCreateWithoutDetailSetorInput, Prisma.KategoriSampahUncheckedCreateWithoutDetailSetorInput>;
    where?: Prisma.KategoriSampahWhereInput;
};
export type KategoriSampahUpdateToOneWithWhereWithoutDetailSetorInput = {
    where?: Prisma.KategoriSampahWhereInput;
    data: Prisma.XOR<Prisma.KategoriSampahUpdateWithoutDetailSetorInput, Prisma.KategoriSampahUncheckedUpdateWithoutDetailSetorInput>;
};
export type KategoriSampahUpdateWithoutDetailSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutKategoriSampahsNestedInput;
};
export type KategoriSampahUncheckedUpdateWithoutDetailSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type KategoriSampahCreateWithoutTenantInput = {
    id?: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detailSetor?: Prisma.DetailSetorCreateNestedManyWithoutKategoriInput;
};
export type KategoriSampahUncheckedCreateWithoutTenantInput = {
    id?: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    detailSetor?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutKategoriInput;
};
export type KategoriSampahCreateOrConnectWithoutTenantInput = {
    where: Prisma.KategoriSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.KategoriSampahCreateWithoutTenantInput, Prisma.KategoriSampahUncheckedCreateWithoutTenantInput>;
};
export type KategoriSampahCreateManyTenantInputEnvelope = {
    data: Prisma.KategoriSampahCreateManyTenantInput | Prisma.KategoriSampahCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type KategoriSampahUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.KategoriSampahWhereUniqueInput;
    update: Prisma.XOR<Prisma.KategoriSampahUpdateWithoutTenantInput, Prisma.KategoriSampahUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.KategoriSampahCreateWithoutTenantInput, Prisma.KategoriSampahUncheckedCreateWithoutTenantInput>;
};
export type KategoriSampahUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.KategoriSampahWhereUniqueInput;
    data: Prisma.XOR<Prisma.KategoriSampahUpdateWithoutTenantInput, Prisma.KategoriSampahUncheckedUpdateWithoutTenantInput>;
};
export type KategoriSampahUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.KategoriSampahScalarWhereInput;
    data: Prisma.XOR<Prisma.KategoriSampahUpdateManyMutationInput, Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantInput>;
};
export type KategoriSampahScalarWhereInput = {
    AND?: Prisma.KategoriSampahScalarWhereInput | Prisma.KategoriSampahScalarWhereInput[];
    OR?: Prisma.KategoriSampahScalarWhereInput[];
    NOT?: Prisma.KategoriSampahScalarWhereInput | Prisma.KategoriSampahScalarWhereInput[];
    id?: Prisma.UuidFilter<"KategoriSampah"> | string;
    tenantId?: Prisma.UuidFilter<"KategoriSampah"> | string;
    namaKategori?: Prisma.StringFilter<"KategoriSampah"> | string;
    hargaPerKg?: Prisma.DecimalFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFilter<"KategoriSampah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFilter<"KategoriSampah"> | $Enums.JenisSampah;
    foto?: Prisma.StringNullableFilter<"KategoriSampah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KategoriSampah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"KategoriSampah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"KategoriSampah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"KategoriSampah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"KategoriSampah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"KategoriSampah"> | string | null;
};
export type KategoriSampahCreateManyTenantInput = {
    id?: string;
    namaKategori: string;
    hargaPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis: $Enums.JenisSampah;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type KategoriSampahUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detailSetor?: Prisma.DetailSetorUpdateManyWithoutKategoriNestedInput;
};
export type KategoriSampahUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detailSetor?: Prisma.DetailSetorUncheckedUpdateManyWithoutKategoriNestedInput;
};
export type KategoriSampahUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    hargaPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    poinPerKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    jenis?: Prisma.EnumJenisSampahFieldUpdateOperationsInput | $Enums.JenisSampah;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type KategoriSampahCountOutputType = {
    detailSetor: number;
};
export type KategoriSampahCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detailSetor?: boolean | KategoriSampahCountOutputTypeCountDetailSetorArgs;
};
export type KategoriSampahCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahCountOutputTypeSelect<ExtArgs> | null;
};
export type KategoriSampahCountOutputTypeCountDetailSetorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailSetorWhereInput;
};
export type KategoriSampahSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaKategori?: boolean;
    hargaPerKg?: boolean;
    poinPerKg?: boolean;
    jenis?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    detailSetor?: boolean | Prisma.KategoriSampah$detailSetorArgs<ExtArgs>;
    _count?: boolean | Prisma.KategoriSampahCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kategoriSampah"]>;
export type KategoriSampahSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaKategori?: boolean;
    hargaPerKg?: boolean;
    poinPerKg?: boolean;
    jenis?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kategoriSampah"]>;
export type KategoriSampahSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaKategori?: boolean;
    hargaPerKg?: boolean;
    poinPerKg?: boolean;
    jenis?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kategoriSampah"]>;
export type KategoriSampahSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    namaKategori?: boolean;
    hargaPerKg?: boolean;
    poinPerKg?: boolean;
    jenis?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type KategoriSampahOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "namaKategori" | "hargaPerKg" | "poinPerKg" | "jenis" | "foto" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["kategoriSampah"]>;
export type KategoriSampahInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    detailSetor?: boolean | Prisma.KategoriSampah$detailSetorArgs<ExtArgs>;
    _count?: boolean | Prisma.KategoriSampahCountOutputTypeDefaultArgs<ExtArgs>;
};
export type KategoriSampahIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type KategoriSampahIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $KategoriSampahPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KategoriSampah";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        detailSetor: Prisma.$DetailSetorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        namaKategori: string;
        hargaPerKg: runtime.Decimal;
        poinPerKg: runtime.Decimal;
        jenis: $Enums.JenisSampah;
        foto: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["kategoriSampah"]>;
    composites: {};
};
export type KategoriSampahGetPayload<S extends boolean | null | undefined | KategoriSampahDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload, S>;
export type KategoriSampahCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KategoriSampahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KategoriSampahCountAggregateInputType | true;
};
export interface KategoriSampahDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KategoriSampah'];
        meta: {
            name: 'KategoriSampah';
        };
    };
    findUnique<T extends KategoriSampahFindUniqueArgs>(args: Prisma.SelectSubset<T, KategoriSampahFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KategoriSampahFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KategoriSampahFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KategoriSampahFindFirstArgs>(args?: Prisma.SelectSubset<T, KategoriSampahFindFirstArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KategoriSampahFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KategoriSampahFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KategoriSampahFindManyArgs>(args?: Prisma.SelectSubset<T, KategoriSampahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KategoriSampahCreateArgs>(args: Prisma.SelectSubset<T, KategoriSampahCreateArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KategoriSampahCreateManyArgs>(args?: Prisma.SelectSubset<T, KategoriSampahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KategoriSampahCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KategoriSampahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KategoriSampahDeleteArgs>(args: Prisma.SelectSubset<T, KategoriSampahDeleteArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KategoriSampahUpdateArgs>(args: Prisma.SelectSubset<T, KategoriSampahUpdateArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KategoriSampahDeleteManyArgs>(args?: Prisma.SelectSubset<T, KategoriSampahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KategoriSampahUpdateManyArgs>(args: Prisma.SelectSubset<T, KategoriSampahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KategoriSampahUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KategoriSampahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KategoriSampahUpsertArgs>(args: Prisma.SelectSubset<T, KategoriSampahUpsertArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KategoriSampahCountArgs>(args?: Prisma.Subset<T, KategoriSampahCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KategoriSampahCountAggregateOutputType> : number>;
    aggregate<T extends KategoriSampahAggregateArgs>(args: Prisma.Subset<T, KategoriSampahAggregateArgs>): Prisma.PrismaPromise<GetKategoriSampahAggregateType<T>>;
    groupBy<T extends KategoriSampahGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KategoriSampahGroupByArgs['orderBy'];
    } : {
        orderBy?: KategoriSampahGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KategoriSampahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriSampahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KategoriSampahFieldRefs;
}
export interface Prisma__KategoriSampahClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detailSetor<T extends Prisma.KategoriSampah$detailSetorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KategoriSampah$detailSetorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KategoriSampahFieldRefs {
    readonly id: Prisma.FieldRef<"KategoriSampah", 'String'>;
    readonly tenantId: Prisma.FieldRef<"KategoriSampah", 'String'>;
    readonly namaKategori: Prisma.FieldRef<"KategoriSampah", 'String'>;
    readonly hargaPerKg: Prisma.FieldRef<"KategoriSampah", 'Decimal'>;
    readonly poinPerKg: Prisma.FieldRef<"KategoriSampah", 'Decimal'>;
    readonly jenis: Prisma.FieldRef<"KategoriSampah", 'JenisSampah'>;
    readonly foto: Prisma.FieldRef<"KategoriSampah", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KategoriSampah", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"KategoriSampah", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"KategoriSampah", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"KategoriSampah", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"KategoriSampah", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"KategoriSampah", 'String'>;
}
export type KategoriSampahFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    where: Prisma.KategoriSampahWhereUniqueInput;
};
export type KategoriSampahFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    where: Prisma.KategoriSampahWhereUniqueInput;
};
export type KategoriSampahFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    where?: Prisma.KategoriSampahWhereInput;
    orderBy?: Prisma.KategoriSampahOrderByWithRelationInput | Prisma.KategoriSampahOrderByWithRelationInput[];
    cursor?: Prisma.KategoriSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KategoriSampahScalarFieldEnum | Prisma.KategoriSampahScalarFieldEnum[];
};
export type KategoriSampahFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    where?: Prisma.KategoriSampahWhereInput;
    orderBy?: Prisma.KategoriSampahOrderByWithRelationInput | Prisma.KategoriSampahOrderByWithRelationInput[];
    cursor?: Prisma.KategoriSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KategoriSampahScalarFieldEnum | Prisma.KategoriSampahScalarFieldEnum[];
};
export type KategoriSampahFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    where?: Prisma.KategoriSampahWhereInput;
    orderBy?: Prisma.KategoriSampahOrderByWithRelationInput | Prisma.KategoriSampahOrderByWithRelationInput[];
    cursor?: Prisma.KategoriSampahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KategoriSampahScalarFieldEnum | Prisma.KategoriSampahScalarFieldEnum[];
};
export type KategoriSampahCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KategoriSampahCreateInput, Prisma.KategoriSampahUncheckedCreateInput>;
};
export type KategoriSampahCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KategoriSampahCreateManyInput | Prisma.KategoriSampahCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KategoriSampahCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    data: Prisma.KategoriSampahCreateManyInput | Prisma.KategoriSampahCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KategoriSampahIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KategoriSampahUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KategoriSampahUpdateInput, Prisma.KategoriSampahUncheckedUpdateInput>;
    where: Prisma.KategoriSampahWhereUniqueInput;
};
export type KategoriSampahUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KategoriSampahUpdateManyMutationInput, Prisma.KategoriSampahUncheckedUpdateManyInput>;
    where?: Prisma.KategoriSampahWhereInput;
    limit?: number;
};
export type KategoriSampahUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KategoriSampahUpdateManyMutationInput, Prisma.KategoriSampahUncheckedUpdateManyInput>;
    where?: Prisma.KategoriSampahWhereInput;
    limit?: number;
    include?: Prisma.KategoriSampahIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KategoriSampahUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    where: Prisma.KategoriSampahWhereUniqueInput;
    create: Prisma.XOR<Prisma.KategoriSampahCreateInput, Prisma.KategoriSampahUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KategoriSampahUpdateInput, Prisma.KategoriSampahUncheckedUpdateInput>;
};
export type KategoriSampahDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
    where: Prisma.KategoriSampahWhereUniqueInput;
};
export type KategoriSampahDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KategoriSampahWhereInput;
    limit?: number;
};
export type KategoriSampah$detailSetorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type KategoriSampahDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KategoriSampahSelect<ExtArgs> | null;
    omit?: Prisma.KategoriSampahOmit<ExtArgs> | null;
    include?: Prisma.KategoriSampahInclude<ExtArgs> | null;
};
