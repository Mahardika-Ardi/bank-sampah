import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DetailSetorModel = runtime.Types.Result.DefaultSelection<Prisma.$DetailSetorPayload>;
export type AggregateDetailSetor = {
    _count: DetailSetorCountAggregateOutputType | null;
    _avg: DetailSetorAvgAggregateOutputType | null;
    _sum: DetailSetorSumAggregateOutputType | null;
    _min: DetailSetorMinAggregateOutputType | null;
    _max: DetailSetorMaxAggregateOutputType | null;
};
export type DetailSetorAvgAggregateOutputType = {
    beratKg: runtime.Decimal | null;
    beratEstimasiKg: runtime.Decimal | null;
    beratTerverifikasiKg: runtime.Decimal | null;
    subtotalPoin: runtime.Decimal | null;
    subtotalHarga: runtime.Decimal | null;
};
export type DetailSetorSumAggregateOutputType = {
    beratKg: runtime.Decimal | null;
    beratEstimasiKg: runtime.Decimal | null;
    beratTerverifikasiKg: runtime.Decimal | null;
    subtotalPoin: runtime.Decimal | null;
    subtotalHarga: runtime.Decimal | null;
};
export type DetailSetorMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    idSetor: string | null;
    idKategori: string | null;
    beratKg: runtime.Decimal | null;
    beratEstimasiKg: runtime.Decimal | null;
    beratTerverifikasiKg: runtime.Decimal | null;
    subtotalPoin: runtime.Decimal | null;
    subtotalHarga: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type DetailSetorMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    idSetor: string | null;
    idKategori: string | null;
    beratKg: runtime.Decimal | null;
    beratEstimasiKg: runtime.Decimal | null;
    beratTerverifikasiKg: runtime.Decimal | null;
    subtotalPoin: runtime.Decimal | null;
    subtotalHarga: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type DetailSetorCountAggregateOutputType = {
    id: number;
    tenantId: number;
    idSetor: number;
    idKategori: number;
    beratKg: number;
    beratEstimasiKg: number;
    beratTerverifikasiKg: number;
    subtotalPoin: number;
    subtotalHarga: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type DetailSetorAvgAggregateInputType = {
    beratKg?: true;
    beratEstimasiKg?: true;
    beratTerverifikasiKg?: true;
    subtotalPoin?: true;
    subtotalHarga?: true;
};
export type DetailSetorSumAggregateInputType = {
    beratKg?: true;
    beratEstimasiKg?: true;
    beratTerverifikasiKg?: true;
    subtotalPoin?: true;
    subtotalHarga?: true;
};
export type DetailSetorMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    idSetor?: true;
    idKategori?: true;
    beratKg?: true;
    beratEstimasiKg?: true;
    beratTerverifikasiKg?: true;
    subtotalPoin?: true;
    subtotalHarga?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type DetailSetorMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    idSetor?: true;
    idKategori?: true;
    beratKg?: true;
    beratEstimasiKg?: true;
    beratTerverifikasiKg?: true;
    subtotalPoin?: true;
    subtotalHarga?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type DetailSetorCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    idSetor?: true;
    idKategori?: true;
    beratKg?: true;
    beratEstimasiKg?: true;
    beratTerverifikasiKg?: true;
    subtotalPoin?: true;
    subtotalHarga?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type DetailSetorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailSetorWhereInput;
    orderBy?: Prisma.DetailSetorOrderByWithRelationInput | Prisma.DetailSetorOrderByWithRelationInput[];
    cursor?: Prisma.DetailSetorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DetailSetorCountAggregateInputType;
    _avg?: DetailSetorAvgAggregateInputType;
    _sum?: DetailSetorSumAggregateInputType;
    _min?: DetailSetorMinAggregateInputType;
    _max?: DetailSetorMaxAggregateInputType;
};
export type GetDetailSetorAggregateType<T extends DetailSetorAggregateArgs> = {
    [P in keyof T & keyof AggregateDetailSetor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetailSetor[P]> : Prisma.GetScalarType<T[P], AggregateDetailSetor[P]>;
};
export type DetailSetorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailSetorWhereInput;
    orderBy?: Prisma.DetailSetorOrderByWithAggregationInput | Prisma.DetailSetorOrderByWithAggregationInput[];
    by: Prisma.DetailSetorScalarFieldEnum[] | Prisma.DetailSetorScalarFieldEnum;
    having?: Prisma.DetailSetorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DetailSetorCountAggregateInputType | true;
    _avg?: DetailSetorAvgAggregateInputType;
    _sum?: DetailSetorSumAggregateInputType;
    _min?: DetailSetorMinAggregateInputType;
    _max?: DetailSetorMaxAggregateInputType;
};
export type DetailSetorGroupByOutputType = {
    id: string;
    tenantId: string;
    idSetor: string;
    idKategori: string;
    beratKg: runtime.Decimal;
    beratEstimasiKg: runtime.Decimal | null;
    beratTerverifikasiKg: runtime.Decimal | null;
    subtotalPoin: runtime.Decimal;
    subtotalHarga: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: DetailSetorCountAggregateOutputType | null;
    _avg: DetailSetorAvgAggregateOutputType | null;
    _sum: DetailSetorSumAggregateOutputType | null;
    _min: DetailSetorMinAggregateOutputType | null;
    _max: DetailSetorMaxAggregateOutputType | null;
};
export type GetDetailSetorGroupByPayload<T extends DetailSetorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DetailSetorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DetailSetorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DetailSetorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DetailSetorGroupByOutputType[P]>;
}>>;
export type DetailSetorWhereInput = {
    AND?: Prisma.DetailSetorWhereInput | Prisma.DetailSetorWhereInput[];
    OR?: Prisma.DetailSetorWhereInput[];
    NOT?: Prisma.DetailSetorWhereInput | Prisma.DetailSetorWhereInput[];
    id?: Prisma.UuidFilter<"DetailSetor"> | string;
    tenantId?: Prisma.UuidFilter<"DetailSetor"> | string;
    idSetor?: Prisma.UuidFilter<"DetailSetor"> | string;
    idKategori?: Prisma.UuidFilter<"DetailSetor"> | string;
    beratKg?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.DecimalNullableFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.DecimalNullableFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"DetailSetor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DetailSetor"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"DetailSetor"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"DetailSetor"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"DetailSetor"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"DetailSetor"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    setor?: Prisma.XOR<Prisma.SetorSampahScalarRelationFilter, Prisma.SetorSampahWhereInput>;
    kategori?: Prisma.XOR<Prisma.KategoriSampahScalarRelationFilter, Prisma.KategoriSampahWhereInput>;
};
export type DetailSetorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idKategori?: Prisma.SortOrder;
    beratKg?: Prisma.SortOrder;
    beratEstimasiKg?: Prisma.SortOrderInput | Prisma.SortOrder;
    beratTerverifikasiKg?: Prisma.SortOrderInput | Prisma.SortOrder;
    subtotalPoin?: Prisma.SortOrder;
    subtotalHarga?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    setor?: Prisma.SetorSampahOrderByWithRelationInput;
    kategori?: Prisma.KategoriSampahOrderByWithRelationInput;
};
export type DetailSetorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DetailSetorWhereInput | Prisma.DetailSetorWhereInput[];
    OR?: Prisma.DetailSetorWhereInput[];
    NOT?: Prisma.DetailSetorWhereInput | Prisma.DetailSetorWhereInput[];
    tenantId?: Prisma.UuidFilter<"DetailSetor"> | string;
    idSetor?: Prisma.UuidFilter<"DetailSetor"> | string;
    idKategori?: Prisma.UuidFilter<"DetailSetor"> | string;
    beratKg?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.DecimalNullableFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.DecimalNullableFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"DetailSetor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DetailSetor"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"DetailSetor"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"DetailSetor"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"DetailSetor"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"DetailSetor"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    setor?: Prisma.XOR<Prisma.SetorSampahScalarRelationFilter, Prisma.SetorSampahWhereInput>;
    kategori?: Prisma.XOR<Prisma.KategoriSampahScalarRelationFilter, Prisma.KategoriSampahWhereInput>;
}, "id">;
export type DetailSetorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idKategori?: Prisma.SortOrder;
    beratKg?: Prisma.SortOrder;
    beratEstimasiKg?: Prisma.SortOrderInput | Prisma.SortOrder;
    beratTerverifikasiKg?: Prisma.SortOrderInput | Prisma.SortOrder;
    subtotalPoin?: Prisma.SortOrder;
    subtotalHarga?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DetailSetorCountOrderByAggregateInput;
    _avg?: Prisma.DetailSetorAvgOrderByAggregateInput;
    _max?: Prisma.DetailSetorMaxOrderByAggregateInput;
    _min?: Prisma.DetailSetorMinOrderByAggregateInput;
    _sum?: Prisma.DetailSetorSumOrderByAggregateInput;
};
export type DetailSetorScalarWhereWithAggregatesInput = {
    AND?: Prisma.DetailSetorScalarWhereWithAggregatesInput | Prisma.DetailSetorScalarWhereWithAggregatesInput[];
    OR?: Prisma.DetailSetorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DetailSetorScalarWhereWithAggregatesInput | Prisma.DetailSetorScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DetailSetor"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"DetailSetor"> | string;
    idSetor?: Prisma.UuidWithAggregatesFilter<"DetailSetor"> | string;
    idKategori?: Prisma.UuidWithAggregatesFilter<"DetailSetor"> | string;
    beratKg?: Prisma.DecimalWithAggregatesFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.DecimalNullableWithAggregatesFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.DecimalNullableWithAggregatesFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalWithAggregatesFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalWithAggregatesFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DetailSetor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DetailSetor"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DetailSetor"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"DetailSetor"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DetailSetor"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"DetailSetor"> | string | null;
};
export type DetailSetorCreateInput = {
    id?: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutDetailSetorsInput;
    setor: Prisma.SetorSampahCreateNestedOneWithoutDetailInput;
    kategori: Prisma.KategoriSampahCreateNestedOneWithoutDetailSetorInput;
};
export type DetailSetorUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    idSetor: string;
    idKategori: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutDetailSetorsNestedInput;
    setor?: Prisma.SetorSampahUpdateOneRequiredWithoutDetailNestedInput;
    kategori?: Prisma.KategoriSampahUpdateOneRequiredWithoutDetailSetorNestedInput;
};
export type DetailSetorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    idSetor?: Prisma.StringFieldUpdateOperationsInput | string;
    idKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorCreateManyInput = {
    id?: string;
    tenantId: string;
    idSetor: string;
    idKategori: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    idSetor?: Prisma.StringFieldUpdateOperationsInput | string;
    idKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorListRelationFilter = {
    every?: Prisma.DetailSetorWhereInput;
    some?: Prisma.DetailSetorWhereInput;
    none?: Prisma.DetailSetorWhereInput;
};
export type DetailSetorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DetailSetorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idKategori?: Prisma.SortOrder;
    beratKg?: Prisma.SortOrder;
    beratEstimasiKg?: Prisma.SortOrder;
    beratTerverifikasiKg?: Prisma.SortOrder;
    subtotalPoin?: Prisma.SortOrder;
    subtotalHarga?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type DetailSetorAvgOrderByAggregateInput = {
    beratKg?: Prisma.SortOrder;
    beratEstimasiKg?: Prisma.SortOrder;
    beratTerverifikasiKg?: Prisma.SortOrder;
    subtotalPoin?: Prisma.SortOrder;
    subtotalHarga?: Prisma.SortOrder;
};
export type DetailSetorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idKategori?: Prisma.SortOrder;
    beratKg?: Prisma.SortOrder;
    beratEstimasiKg?: Prisma.SortOrder;
    beratTerverifikasiKg?: Prisma.SortOrder;
    subtotalPoin?: Prisma.SortOrder;
    subtotalHarga?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type DetailSetorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idKategori?: Prisma.SortOrder;
    beratKg?: Prisma.SortOrder;
    beratEstimasiKg?: Prisma.SortOrder;
    beratTerverifikasiKg?: Prisma.SortOrder;
    subtotalPoin?: Prisma.SortOrder;
    subtotalHarga?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type DetailSetorSumOrderByAggregateInput = {
    beratKg?: Prisma.SortOrder;
    beratEstimasiKg?: Prisma.SortOrder;
    beratTerverifikasiKg?: Prisma.SortOrder;
    subtotalPoin?: Prisma.SortOrder;
    subtotalHarga?: Prisma.SortOrder;
};
export type DetailSetorCreateNestedManyWithoutKategoriInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutKategoriInput, Prisma.DetailSetorUncheckedCreateWithoutKategoriInput> | Prisma.DetailSetorCreateWithoutKategoriInput[] | Prisma.DetailSetorUncheckedCreateWithoutKategoriInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutKategoriInput | Prisma.DetailSetorCreateOrConnectWithoutKategoriInput[];
    createMany?: Prisma.DetailSetorCreateManyKategoriInputEnvelope;
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
};
export type DetailSetorUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutKategoriInput, Prisma.DetailSetorUncheckedCreateWithoutKategoriInput> | Prisma.DetailSetorCreateWithoutKategoriInput[] | Prisma.DetailSetorUncheckedCreateWithoutKategoriInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutKategoriInput | Prisma.DetailSetorCreateOrConnectWithoutKategoriInput[];
    createMany?: Prisma.DetailSetorCreateManyKategoriInputEnvelope;
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
};
export type DetailSetorUpdateManyWithoutKategoriNestedInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutKategoriInput, Prisma.DetailSetorUncheckedCreateWithoutKategoriInput> | Prisma.DetailSetorCreateWithoutKategoriInput[] | Prisma.DetailSetorUncheckedCreateWithoutKategoriInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutKategoriInput | Prisma.DetailSetorCreateOrConnectWithoutKategoriInput[];
    upsert?: Prisma.DetailSetorUpsertWithWhereUniqueWithoutKategoriInput | Prisma.DetailSetorUpsertWithWhereUniqueWithoutKategoriInput[];
    createMany?: Prisma.DetailSetorCreateManyKategoriInputEnvelope;
    set?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    disconnect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    delete?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    update?: Prisma.DetailSetorUpdateWithWhereUniqueWithoutKategoriInput | Prisma.DetailSetorUpdateWithWhereUniqueWithoutKategoriInput[];
    updateMany?: Prisma.DetailSetorUpdateManyWithWhereWithoutKategoriInput | Prisma.DetailSetorUpdateManyWithWhereWithoutKategoriInput[];
    deleteMany?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
};
export type DetailSetorUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutKategoriInput, Prisma.DetailSetorUncheckedCreateWithoutKategoriInput> | Prisma.DetailSetorCreateWithoutKategoriInput[] | Prisma.DetailSetorUncheckedCreateWithoutKategoriInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutKategoriInput | Prisma.DetailSetorCreateOrConnectWithoutKategoriInput[];
    upsert?: Prisma.DetailSetorUpsertWithWhereUniqueWithoutKategoriInput | Prisma.DetailSetorUpsertWithWhereUniqueWithoutKategoriInput[];
    createMany?: Prisma.DetailSetorCreateManyKategoriInputEnvelope;
    set?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    disconnect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    delete?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    update?: Prisma.DetailSetorUpdateWithWhereUniqueWithoutKategoriInput | Prisma.DetailSetorUpdateWithWhereUniqueWithoutKategoriInput[];
    updateMany?: Prisma.DetailSetorUpdateManyWithWhereWithoutKategoriInput | Prisma.DetailSetorUpdateManyWithWhereWithoutKategoriInput[];
    deleteMany?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
};
export type DetailSetorCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutSetorInput, Prisma.DetailSetorUncheckedCreateWithoutSetorInput> | Prisma.DetailSetorCreateWithoutSetorInput[] | Prisma.DetailSetorUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutSetorInput | Prisma.DetailSetorCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.DetailSetorCreateManySetorInputEnvelope;
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
};
export type DetailSetorUncheckedCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutSetorInput, Prisma.DetailSetorUncheckedCreateWithoutSetorInput> | Prisma.DetailSetorCreateWithoutSetorInput[] | Prisma.DetailSetorUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutSetorInput | Prisma.DetailSetorCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.DetailSetorCreateManySetorInputEnvelope;
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
};
export type DetailSetorUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutSetorInput, Prisma.DetailSetorUncheckedCreateWithoutSetorInput> | Prisma.DetailSetorCreateWithoutSetorInput[] | Prisma.DetailSetorUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutSetorInput | Prisma.DetailSetorCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.DetailSetorUpsertWithWhereUniqueWithoutSetorInput | Prisma.DetailSetorUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.DetailSetorCreateManySetorInputEnvelope;
    set?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    disconnect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    delete?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    update?: Prisma.DetailSetorUpdateWithWhereUniqueWithoutSetorInput | Prisma.DetailSetorUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.DetailSetorUpdateManyWithWhereWithoutSetorInput | Prisma.DetailSetorUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
};
export type DetailSetorUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutSetorInput, Prisma.DetailSetorUncheckedCreateWithoutSetorInput> | Prisma.DetailSetorCreateWithoutSetorInput[] | Prisma.DetailSetorUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutSetorInput | Prisma.DetailSetorCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.DetailSetorUpsertWithWhereUniqueWithoutSetorInput | Prisma.DetailSetorUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.DetailSetorCreateManySetorInputEnvelope;
    set?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    disconnect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    delete?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    update?: Prisma.DetailSetorUpdateWithWhereUniqueWithoutSetorInput | Prisma.DetailSetorUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.DetailSetorUpdateManyWithWhereWithoutSetorInput | Prisma.DetailSetorUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetailSetorCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutTenantInput, Prisma.DetailSetorUncheckedCreateWithoutTenantInput> | Prisma.DetailSetorCreateWithoutTenantInput[] | Prisma.DetailSetorUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutTenantInput | Prisma.DetailSetorCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.DetailSetorCreateManyTenantInputEnvelope;
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
};
export type DetailSetorUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutTenantInput, Prisma.DetailSetorUncheckedCreateWithoutTenantInput> | Prisma.DetailSetorCreateWithoutTenantInput[] | Prisma.DetailSetorUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutTenantInput | Prisma.DetailSetorCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.DetailSetorCreateManyTenantInputEnvelope;
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
};
export type DetailSetorUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutTenantInput, Prisma.DetailSetorUncheckedCreateWithoutTenantInput> | Prisma.DetailSetorCreateWithoutTenantInput[] | Prisma.DetailSetorUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutTenantInput | Prisma.DetailSetorCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.DetailSetorUpsertWithWhereUniqueWithoutTenantInput | Prisma.DetailSetorUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.DetailSetorCreateManyTenantInputEnvelope;
    set?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    disconnect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    delete?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    update?: Prisma.DetailSetorUpdateWithWhereUniqueWithoutTenantInput | Prisma.DetailSetorUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.DetailSetorUpdateManyWithWhereWithoutTenantInput | Prisma.DetailSetorUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
};
export type DetailSetorUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.DetailSetorCreateWithoutTenantInput, Prisma.DetailSetorUncheckedCreateWithoutTenantInput> | Prisma.DetailSetorCreateWithoutTenantInput[] | Prisma.DetailSetorUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DetailSetorCreateOrConnectWithoutTenantInput | Prisma.DetailSetorCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.DetailSetorUpsertWithWhereUniqueWithoutTenantInput | Prisma.DetailSetorUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.DetailSetorCreateManyTenantInputEnvelope;
    set?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    disconnect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    delete?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    connect?: Prisma.DetailSetorWhereUniqueInput | Prisma.DetailSetorWhereUniqueInput[];
    update?: Prisma.DetailSetorUpdateWithWhereUniqueWithoutTenantInput | Prisma.DetailSetorUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.DetailSetorUpdateManyWithWhereWithoutTenantInput | Prisma.DetailSetorUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
};
export type DetailSetorCreateWithoutKategoriInput = {
    id?: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutDetailSetorsInput;
    setor: Prisma.SetorSampahCreateNestedOneWithoutDetailInput;
};
export type DetailSetorUncheckedCreateWithoutKategoriInput = {
    id?: string;
    idSetor: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorCreateOrConnectWithoutKategoriInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetailSetorCreateWithoutKategoriInput, Prisma.DetailSetorUncheckedCreateWithoutKategoriInput>;
};
export type DetailSetorCreateManyKategoriInputEnvelope = {
    data: Prisma.DetailSetorCreateManyKategoriInput | Prisma.DetailSetorCreateManyKategoriInput[];
    skipDuplicates?: boolean;
};
export type DetailSetorUpsertWithWhereUniqueWithoutKategoriInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetailSetorUpdateWithoutKategoriInput, Prisma.DetailSetorUncheckedUpdateWithoutKategoriInput>;
    create: Prisma.XOR<Prisma.DetailSetorCreateWithoutKategoriInput, Prisma.DetailSetorUncheckedCreateWithoutKategoriInput>;
};
export type DetailSetorUpdateWithWhereUniqueWithoutKategoriInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetailSetorUpdateWithoutKategoriInput, Prisma.DetailSetorUncheckedUpdateWithoutKategoriInput>;
};
export type DetailSetorUpdateManyWithWhereWithoutKategoriInput = {
    where: Prisma.DetailSetorScalarWhereInput;
    data: Prisma.XOR<Prisma.DetailSetorUpdateManyMutationInput, Prisma.DetailSetorUncheckedUpdateManyWithoutKategoriInput>;
};
export type DetailSetorScalarWhereInput = {
    AND?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
    OR?: Prisma.DetailSetorScalarWhereInput[];
    NOT?: Prisma.DetailSetorScalarWhereInput | Prisma.DetailSetorScalarWhereInput[];
    id?: Prisma.UuidFilter<"DetailSetor"> | string;
    tenantId?: Prisma.UuidFilter<"DetailSetor"> | string;
    idSetor?: Prisma.UuidFilter<"DetailSetor"> | string;
    idKategori?: Prisma.UuidFilter<"DetailSetor"> | string;
    beratKg?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.DecimalNullableFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.DecimalNullableFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFilter<"DetailSetor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"DetailSetor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DetailSetor"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"DetailSetor"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"DetailSetor"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"DetailSetor"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"DetailSetor"> | string | null;
};
export type DetailSetorCreateWithoutSetorInput = {
    id?: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutDetailSetorsInput;
    kategori: Prisma.KategoriSampahCreateNestedOneWithoutDetailSetorInput;
};
export type DetailSetorUncheckedCreateWithoutSetorInput = {
    id?: string;
    idKategori: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorCreateOrConnectWithoutSetorInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetailSetorCreateWithoutSetorInput, Prisma.DetailSetorUncheckedCreateWithoutSetorInput>;
};
export type DetailSetorCreateManySetorInputEnvelope = {
    data: Prisma.DetailSetorCreateManySetorInput | Prisma.DetailSetorCreateManySetorInput[];
    skipDuplicates?: boolean;
};
export type DetailSetorUpsertWithWhereUniqueWithoutSetorInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetailSetorUpdateWithoutSetorInput, Prisma.DetailSetorUncheckedUpdateWithoutSetorInput>;
    create: Prisma.XOR<Prisma.DetailSetorCreateWithoutSetorInput, Prisma.DetailSetorUncheckedCreateWithoutSetorInput>;
};
export type DetailSetorUpdateWithWhereUniqueWithoutSetorInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetailSetorUpdateWithoutSetorInput, Prisma.DetailSetorUncheckedUpdateWithoutSetorInput>;
};
export type DetailSetorUpdateManyWithWhereWithoutSetorInput = {
    where: Prisma.DetailSetorScalarWhereInput;
    data: Prisma.XOR<Prisma.DetailSetorUpdateManyMutationInput, Prisma.DetailSetorUncheckedUpdateManyWithoutSetorInput>;
};
export type DetailSetorCreateWithoutTenantInput = {
    id?: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setor: Prisma.SetorSampahCreateNestedOneWithoutDetailInput;
    kategori: Prisma.KategoriSampahCreateNestedOneWithoutDetailSetorInput;
};
export type DetailSetorUncheckedCreateWithoutTenantInput = {
    id?: string;
    idSetor: string;
    idKategori: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorCreateOrConnectWithoutTenantInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetailSetorCreateWithoutTenantInput, Prisma.DetailSetorUncheckedCreateWithoutTenantInput>;
};
export type DetailSetorCreateManyTenantInputEnvelope = {
    data: Prisma.DetailSetorCreateManyTenantInput | Prisma.DetailSetorCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type DetailSetorUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetailSetorUpdateWithoutTenantInput, Prisma.DetailSetorUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.DetailSetorCreateWithoutTenantInput, Prisma.DetailSetorUncheckedCreateWithoutTenantInput>;
};
export type DetailSetorUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.DetailSetorWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetailSetorUpdateWithoutTenantInput, Prisma.DetailSetorUncheckedUpdateWithoutTenantInput>;
};
export type DetailSetorUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.DetailSetorScalarWhereInput;
    data: Prisma.XOR<Prisma.DetailSetorUpdateManyMutationInput, Prisma.DetailSetorUncheckedUpdateManyWithoutTenantInput>;
};
export type DetailSetorCreateManyKategoriInput = {
    id?: string;
    idSetor: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorUpdateWithoutKategoriInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutDetailSetorsNestedInput;
    setor?: Prisma.SetorSampahUpdateOneRequiredWithoutDetailNestedInput;
};
export type DetailSetorUncheckedUpdateWithoutKategoriInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idSetor?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorUncheckedUpdateManyWithoutKategoriInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idSetor?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorCreateManySetorInput = {
    id?: string;
    idKategori: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutDetailSetorsNestedInput;
    kategori?: Prisma.KategoriSampahUpdateOneRequiredWithoutDetailSetorNestedInput;
};
export type DetailSetorUncheckedUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorUncheckedUpdateManyWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorCreateManyTenantInput = {
    id?: string;
    idSetor: string;
    idKategori: string;
    beratKg: runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type DetailSetorUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setor?: Prisma.SetorSampahUpdateOneRequiredWithoutDetailNestedInput;
    kategori?: Prisma.KategoriSampahUpdateOneRequiredWithoutDetailSetorNestedInput;
};
export type DetailSetorUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idSetor?: Prisma.StringFieldUpdateOperationsInput | string;
    idKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idSetor?: Prisma.StringFieldUpdateOperationsInput | string;
    idKategori?: Prisma.StringFieldUpdateOperationsInput | string;
    beratKg?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    beratEstimasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    beratTerverifikasiKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    subtotalPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotalHarga?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DetailSetorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    idSetor?: boolean;
    idKategori?: boolean;
    beratKg?: boolean;
    beratEstimasiKg?: boolean;
    beratTerverifikasiKg?: boolean;
    subtotalPoin?: boolean;
    subtotalHarga?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.SetorSampahDefaultArgs<ExtArgs>;
    kategori?: boolean | Prisma.KategoriSampahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detailSetor"]>;
export type DetailSetorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    idSetor?: boolean;
    idKategori?: boolean;
    beratKg?: boolean;
    beratEstimasiKg?: boolean;
    beratTerverifikasiKg?: boolean;
    subtotalPoin?: boolean;
    subtotalHarga?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.SetorSampahDefaultArgs<ExtArgs>;
    kategori?: boolean | Prisma.KategoriSampahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detailSetor"]>;
export type DetailSetorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    idSetor?: boolean;
    idKategori?: boolean;
    beratKg?: boolean;
    beratEstimasiKg?: boolean;
    beratTerverifikasiKg?: boolean;
    subtotalPoin?: boolean;
    subtotalHarga?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.SetorSampahDefaultArgs<ExtArgs>;
    kategori?: boolean | Prisma.KategoriSampahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detailSetor"]>;
export type DetailSetorSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    idSetor?: boolean;
    idKategori?: boolean;
    beratKg?: boolean;
    beratEstimasiKg?: boolean;
    beratTerverifikasiKg?: boolean;
    subtotalPoin?: boolean;
    subtotalHarga?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type DetailSetorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "idSetor" | "idKategori" | "beratKg" | "beratEstimasiKg" | "beratTerverifikasiKg" | "subtotalPoin" | "subtotalHarga" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["detailSetor"]>;
export type DetailSetorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.SetorSampahDefaultArgs<ExtArgs>;
    kategori?: boolean | Prisma.KategoriSampahDefaultArgs<ExtArgs>;
};
export type DetailSetorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.SetorSampahDefaultArgs<ExtArgs>;
    kategori?: boolean | Prisma.KategoriSampahDefaultArgs<ExtArgs>;
};
export type DetailSetorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.SetorSampahDefaultArgs<ExtArgs>;
    kategori?: boolean | Prisma.KategoriSampahDefaultArgs<ExtArgs>;
};
export type $DetailSetorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DetailSetor";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        setor: Prisma.$SetorSampahPayload<ExtArgs>;
        kategori: Prisma.$KategoriSampahPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        idSetor: string;
        idKategori: string;
        beratKg: runtime.Decimal;
        beratEstimasiKg: runtime.Decimal | null;
        beratTerverifikasiKg: runtime.Decimal | null;
        subtotalPoin: runtime.Decimal;
        subtotalHarga: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["detailSetor"]>;
    composites: {};
};
export type DetailSetorGetPayload<S extends boolean | null | undefined | DetailSetorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload, S>;
export type DetailSetorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DetailSetorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DetailSetorCountAggregateInputType | true;
};
export interface DetailSetorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DetailSetor'];
        meta: {
            name: 'DetailSetor';
        };
    };
    findUnique<T extends DetailSetorFindUniqueArgs>(args: Prisma.SelectSubset<T, DetailSetorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DetailSetorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DetailSetorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DetailSetorFindFirstArgs>(args?: Prisma.SelectSubset<T, DetailSetorFindFirstArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DetailSetorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DetailSetorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DetailSetorFindManyArgs>(args?: Prisma.SelectSubset<T, DetailSetorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DetailSetorCreateArgs>(args: Prisma.SelectSubset<T, DetailSetorCreateArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DetailSetorCreateManyArgs>(args?: Prisma.SelectSubset<T, DetailSetorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DetailSetorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DetailSetorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DetailSetorDeleteArgs>(args: Prisma.SelectSubset<T, DetailSetorDeleteArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DetailSetorUpdateArgs>(args: Prisma.SelectSubset<T, DetailSetorUpdateArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DetailSetorDeleteManyArgs>(args?: Prisma.SelectSubset<T, DetailSetorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DetailSetorUpdateManyArgs>(args: Prisma.SelectSubset<T, DetailSetorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DetailSetorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DetailSetorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DetailSetorUpsertArgs>(args: Prisma.SelectSubset<T, DetailSetorUpsertArgs<ExtArgs>>): Prisma.Prisma__DetailSetorClient<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DetailSetorCountArgs>(args?: Prisma.Subset<T, DetailSetorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DetailSetorCountAggregateOutputType> : number>;
    aggregate<T extends DetailSetorAggregateArgs>(args: Prisma.Subset<T, DetailSetorAggregateArgs>): Prisma.PrismaPromise<GetDetailSetorAggregateType<T>>;
    groupBy<T extends DetailSetorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DetailSetorGroupByArgs['orderBy'];
    } : {
        orderBy?: DetailSetorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DetailSetorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailSetorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DetailSetorFieldRefs;
}
export interface Prisma__DetailSetorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    setor<T extends Prisma.SetorSampahDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SetorSampahDefaultArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    kategori<T extends Prisma.KategoriSampahDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KategoriSampahDefaultArgs<ExtArgs>>): Prisma.Prisma__KategoriSampahClient<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DetailSetorFieldRefs {
    readonly id: Prisma.FieldRef<"DetailSetor", 'String'>;
    readonly tenantId: Prisma.FieldRef<"DetailSetor", 'String'>;
    readonly idSetor: Prisma.FieldRef<"DetailSetor", 'String'>;
    readonly idKategori: Prisma.FieldRef<"DetailSetor", 'String'>;
    readonly beratKg: Prisma.FieldRef<"DetailSetor", 'Decimal'>;
    readonly beratEstimasiKg: Prisma.FieldRef<"DetailSetor", 'Decimal'>;
    readonly beratTerverifikasiKg: Prisma.FieldRef<"DetailSetor", 'Decimal'>;
    readonly subtotalPoin: Prisma.FieldRef<"DetailSetor", 'Decimal'>;
    readonly subtotalHarga: Prisma.FieldRef<"DetailSetor", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"DetailSetor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DetailSetor", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"DetailSetor", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"DetailSetor", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"DetailSetor", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"DetailSetor", 'String'>;
}
export type DetailSetorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
    where: Prisma.DetailSetorWhereUniqueInput;
};
export type DetailSetorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
    where: Prisma.DetailSetorWhereUniqueInput;
};
export type DetailSetorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DetailSetorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DetailSetorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DetailSetorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetailSetorCreateInput, Prisma.DetailSetorUncheckedCreateInput>;
};
export type DetailSetorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DetailSetorCreateManyInput | Prisma.DetailSetorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DetailSetorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    data: Prisma.DetailSetorCreateManyInput | Prisma.DetailSetorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DetailSetorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DetailSetorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetailSetorUpdateInput, Prisma.DetailSetorUncheckedUpdateInput>;
    where: Prisma.DetailSetorWhereUniqueInput;
};
export type DetailSetorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DetailSetorUpdateManyMutationInput, Prisma.DetailSetorUncheckedUpdateManyInput>;
    where?: Prisma.DetailSetorWhereInput;
    limit?: number;
};
export type DetailSetorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetailSetorUpdateManyMutationInput, Prisma.DetailSetorUncheckedUpdateManyInput>;
    where?: Prisma.DetailSetorWhereInput;
    limit?: number;
    include?: Prisma.DetailSetorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DetailSetorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
    where: Prisma.DetailSetorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetailSetorCreateInput, Prisma.DetailSetorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DetailSetorUpdateInput, Prisma.DetailSetorUncheckedUpdateInput>;
};
export type DetailSetorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
    where: Prisma.DetailSetorWhereUniqueInput;
};
export type DetailSetorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailSetorWhereInput;
    limit?: number;
};
export type DetailSetorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetailSetorSelect<ExtArgs> | null;
    omit?: Prisma.DetailSetorOmit<ExtArgs> | null;
    include?: Prisma.DetailSetorInclude<ExtArgs> | null;
};
