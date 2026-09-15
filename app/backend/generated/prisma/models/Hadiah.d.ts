import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HadiahModel = runtime.Types.Result.DefaultSelection<Prisma.$HadiahPayload>;
export type AggregateHadiah = {
    _count: HadiahCountAggregateOutputType | null;
    _avg: HadiahAvgAggregateOutputType | null;
    _sum: HadiahSumAggregateOutputType | null;
    _min: HadiahMinAggregateOutputType | null;
    _max: HadiahMaxAggregateOutputType | null;
};
export type HadiahAvgAggregateOutputType = {
    poinDibutuhkan: runtime.Decimal | null;
    stok: number | null;
};
export type HadiahSumAggregateOutputType = {
    poinDibutuhkan: runtime.Decimal | null;
    stok: number | null;
};
export type HadiahMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaHadiah: string | null;
    poinDibutuhkan: runtime.Decimal | null;
    stok: number | null;
    foto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type HadiahMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaHadiah: string | null;
    poinDibutuhkan: runtime.Decimal | null;
    stok: number | null;
    foto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type HadiahCountAggregateOutputType = {
    id: number;
    tenantId: number;
    namaHadiah: number;
    poinDibutuhkan: number;
    stok: number;
    foto: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type HadiahAvgAggregateInputType = {
    poinDibutuhkan?: true;
    stok?: true;
};
export type HadiahSumAggregateInputType = {
    poinDibutuhkan?: true;
    stok?: true;
};
export type HadiahMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaHadiah?: true;
    poinDibutuhkan?: true;
    stok?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type HadiahMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaHadiah?: true;
    poinDibutuhkan?: true;
    stok?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type HadiahCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaHadiah?: true;
    poinDibutuhkan?: true;
    stok?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type HadiahAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HadiahWhereInput;
    orderBy?: Prisma.HadiahOrderByWithRelationInput | Prisma.HadiahOrderByWithRelationInput[];
    cursor?: Prisma.HadiahWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HadiahCountAggregateInputType;
    _avg?: HadiahAvgAggregateInputType;
    _sum?: HadiahSumAggregateInputType;
    _min?: HadiahMinAggregateInputType;
    _max?: HadiahMaxAggregateInputType;
};
export type GetHadiahAggregateType<T extends HadiahAggregateArgs> = {
    [P in keyof T & keyof AggregateHadiah]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHadiah[P]> : Prisma.GetScalarType<T[P], AggregateHadiah[P]>;
};
export type HadiahGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HadiahWhereInput;
    orderBy?: Prisma.HadiahOrderByWithAggregationInput | Prisma.HadiahOrderByWithAggregationInput[];
    by: Prisma.HadiahScalarFieldEnum[] | Prisma.HadiahScalarFieldEnum;
    having?: Prisma.HadiahScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HadiahCountAggregateInputType | true;
    _avg?: HadiahAvgAggregateInputType;
    _sum?: HadiahSumAggregateInputType;
    _min?: HadiahMinAggregateInputType;
    _max?: HadiahMaxAggregateInputType;
};
export type HadiahGroupByOutputType = {
    id: string;
    tenantId: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal;
    stok: number;
    foto: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: HadiahCountAggregateOutputType | null;
    _avg: HadiahAvgAggregateOutputType | null;
    _sum: HadiahSumAggregateOutputType | null;
    _min: HadiahMinAggregateOutputType | null;
    _max: HadiahMaxAggregateOutputType | null;
};
export type GetHadiahGroupByPayload<T extends HadiahGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HadiahGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HadiahGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HadiahGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HadiahGroupByOutputType[P]>;
}>>;
export type HadiahWhereInput = {
    AND?: Prisma.HadiahWhereInput | Prisma.HadiahWhereInput[];
    OR?: Prisma.HadiahWhereInput[];
    NOT?: Prisma.HadiahWhereInput | Prisma.HadiahWhereInput[];
    id?: Prisma.UuidFilter<"Hadiah"> | string;
    tenantId?: Prisma.UuidFilter<"Hadiah"> | string;
    namaHadiah?: Prisma.StringFilter<"Hadiah"> | string;
    poinDibutuhkan?: Prisma.DecimalFilter<"Hadiah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFilter<"Hadiah"> | number;
    foto?: Prisma.StringNullableFilter<"Hadiah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Hadiah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Hadiah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Hadiah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Hadiah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Hadiah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Hadiah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    penukaran?: Prisma.PenukaranPoinListRelationFilter;
};
export type HadiahOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaHadiah?: Prisma.SortOrder;
    poinDibutuhkan?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    foto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    penukaran?: Prisma.PenukaranPoinOrderByRelationAggregateInput;
};
export type HadiahWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenantId_namaHadiah?: Prisma.HadiahTenantIdNamaHadiahCompoundUniqueInput;
    id_tenantId?: Prisma.HadiahIdTenantIdCompoundUniqueInput;
    AND?: Prisma.HadiahWhereInput | Prisma.HadiahWhereInput[];
    OR?: Prisma.HadiahWhereInput[];
    NOT?: Prisma.HadiahWhereInput | Prisma.HadiahWhereInput[];
    tenantId?: Prisma.UuidFilter<"Hadiah"> | string;
    namaHadiah?: Prisma.StringFilter<"Hadiah"> | string;
    poinDibutuhkan?: Prisma.DecimalFilter<"Hadiah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFilter<"Hadiah"> | number;
    foto?: Prisma.StringNullableFilter<"Hadiah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Hadiah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Hadiah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Hadiah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Hadiah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Hadiah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Hadiah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    penukaran?: Prisma.PenukaranPoinListRelationFilter;
}, "id" | "tenantId_namaHadiah" | "id_tenantId">;
export type HadiahOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaHadiah?: Prisma.SortOrder;
    poinDibutuhkan?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    foto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.HadiahCountOrderByAggregateInput;
    _avg?: Prisma.HadiahAvgOrderByAggregateInput;
    _max?: Prisma.HadiahMaxOrderByAggregateInput;
    _min?: Prisma.HadiahMinOrderByAggregateInput;
    _sum?: Prisma.HadiahSumOrderByAggregateInput;
};
export type HadiahScalarWhereWithAggregatesInput = {
    AND?: Prisma.HadiahScalarWhereWithAggregatesInput | Prisma.HadiahScalarWhereWithAggregatesInput[];
    OR?: Prisma.HadiahScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HadiahScalarWhereWithAggregatesInput | Prisma.HadiahScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Hadiah"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"Hadiah"> | string;
    namaHadiah?: Prisma.StringWithAggregatesFilter<"Hadiah"> | string;
    poinDibutuhkan?: Prisma.DecimalWithAggregatesFilter<"Hadiah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntWithAggregatesFilter<"Hadiah"> | number;
    foto?: Prisma.StringNullableWithAggregatesFilter<"Hadiah"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Hadiah"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Hadiah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Hadiah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"Hadiah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Hadiah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"Hadiah"> | string | null;
};
export type HadiahCreateInput = {
    id?: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutHadiahsInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutHadiahInput;
};
export type HadiahUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutHadiahInput;
};
export type HadiahUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutHadiahsNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutHadiahNestedInput;
};
export type HadiahUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutHadiahNestedInput;
};
export type HadiahCreateManyInput = {
    id?: string;
    tenantId: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type HadiahUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type HadiahUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type HadiahTenantIdNamaHadiahCompoundUniqueInput = {
    tenantId: string;
    namaHadiah: string;
};
export type HadiahIdTenantIdCompoundUniqueInput = {
    id: string;
    tenantId: string;
};
export type HadiahCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaHadiah?: Prisma.SortOrder;
    poinDibutuhkan?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type HadiahAvgOrderByAggregateInput = {
    poinDibutuhkan?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
};
export type HadiahMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaHadiah?: Prisma.SortOrder;
    poinDibutuhkan?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type HadiahMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaHadiah?: Prisma.SortOrder;
    poinDibutuhkan?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type HadiahSumOrderByAggregateInput = {
    poinDibutuhkan?: Prisma.SortOrder;
    stok?: Prisma.SortOrder;
};
export type HadiahScalarRelationFilter = {
    is?: Prisma.HadiahWhereInput;
    isNot?: Prisma.HadiahWhereInput;
};
export type HadiahListRelationFilter = {
    every?: Prisma.HadiahWhereInput;
    some?: Prisma.HadiahWhereInput;
    none?: Prisma.HadiahWhereInput;
};
export type HadiahOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type HadiahCreateNestedOneWithoutPenukaranInput = {
    create?: Prisma.XOR<Prisma.HadiahCreateWithoutPenukaranInput, Prisma.HadiahUncheckedCreateWithoutPenukaranInput>;
    connectOrCreate?: Prisma.HadiahCreateOrConnectWithoutPenukaranInput;
    connect?: Prisma.HadiahWhereUniqueInput;
};
export type HadiahUpdateOneRequiredWithoutPenukaranNestedInput = {
    create?: Prisma.XOR<Prisma.HadiahCreateWithoutPenukaranInput, Prisma.HadiahUncheckedCreateWithoutPenukaranInput>;
    connectOrCreate?: Prisma.HadiahCreateOrConnectWithoutPenukaranInput;
    upsert?: Prisma.HadiahUpsertWithoutPenukaranInput;
    connect?: Prisma.HadiahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HadiahUpdateToOneWithWhereWithoutPenukaranInput, Prisma.HadiahUpdateWithoutPenukaranInput>, Prisma.HadiahUncheckedUpdateWithoutPenukaranInput>;
};
export type HadiahCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.HadiahCreateWithoutTenantInput, Prisma.HadiahUncheckedCreateWithoutTenantInput> | Prisma.HadiahCreateWithoutTenantInput[] | Prisma.HadiahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.HadiahCreateOrConnectWithoutTenantInput | Prisma.HadiahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.HadiahCreateManyTenantInputEnvelope;
    connect?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
};
export type HadiahUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.HadiahCreateWithoutTenantInput, Prisma.HadiahUncheckedCreateWithoutTenantInput> | Prisma.HadiahCreateWithoutTenantInput[] | Prisma.HadiahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.HadiahCreateOrConnectWithoutTenantInput | Prisma.HadiahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.HadiahCreateManyTenantInputEnvelope;
    connect?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
};
export type HadiahUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.HadiahCreateWithoutTenantInput, Prisma.HadiahUncheckedCreateWithoutTenantInput> | Prisma.HadiahCreateWithoutTenantInput[] | Prisma.HadiahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.HadiahCreateOrConnectWithoutTenantInput | Prisma.HadiahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.HadiahUpsertWithWhereUniqueWithoutTenantInput | Prisma.HadiahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.HadiahCreateManyTenantInputEnvelope;
    set?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    disconnect?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    delete?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    connect?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    update?: Prisma.HadiahUpdateWithWhereUniqueWithoutTenantInput | Prisma.HadiahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.HadiahUpdateManyWithWhereWithoutTenantInput | Prisma.HadiahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.HadiahScalarWhereInput | Prisma.HadiahScalarWhereInput[];
};
export type HadiahUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.HadiahCreateWithoutTenantInput, Prisma.HadiahUncheckedCreateWithoutTenantInput> | Prisma.HadiahCreateWithoutTenantInput[] | Prisma.HadiahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.HadiahCreateOrConnectWithoutTenantInput | Prisma.HadiahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.HadiahUpsertWithWhereUniqueWithoutTenantInput | Prisma.HadiahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.HadiahCreateManyTenantInputEnvelope;
    set?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    disconnect?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    delete?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    connect?: Prisma.HadiahWhereUniqueInput | Prisma.HadiahWhereUniqueInput[];
    update?: Prisma.HadiahUpdateWithWhereUniqueWithoutTenantInput | Prisma.HadiahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.HadiahUpdateManyWithWhereWithoutTenantInput | Prisma.HadiahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.HadiahScalarWhereInput | Prisma.HadiahScalarWhereInput[];
};
export type HadiahCreateWithoutPenukaranInput = {
    id?: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutHadiahsInput;
};
export type HadiahUncheckedCreateWithoutPenukaranInput = {
    id?: string;
    tenantId: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type HadiahCreateOrConnectWithoutPenukaranInput = {
    where: Prisma.HadiahWhereUniqueInput;
    create: Prisma.XOR<Prisma.HadiahCreateWithoutPenukaranInput, Prisma.HadiahUncheckedCreateWithoutPenukaranInput>;
};
export type HadiahUpsertWithoutPenukaranInput = {
    update: Prisma.XOR<Prisma.HadiahUpdateWithoutPenukaranInput, Prisma.HadiahUncheckedUpdateWithoutPenukaranInput>;
    create: Prisma.XOR<Prisma.HadiahCreateWithoutPenukaranInput, Prisma.HadiahUncheckedCreateWithoutPenukaranInput>;
    where?: Prisma.HadiahWhereInput;
};
export type HadiahUpdateToOneWithWhereWithoutPenukaranInput = {
    where?: Prisma.HadiahWhereInput;
    data: Prisma.XOR<Prisma.HadiahUpdateWithoutPenukaranInput, Prisma.HadiahUncheckedUpdateWithoutPenukaranInput>;
};
export type HadiahUpdateWithoutPenukaranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutHadiahsNestedInput;
};
export type HadiahUncheckedUpdateWithoutPenukaranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type HadiahCreateWithoutTenantInput = {
    id?: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutHadiahInput;
};
export type HadiahUncheckedCreateWithoutTenantInput = {
    id?: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutHadiahInput;
};
export type HadiahCreateOrConnectWithoutTenantInput = {
    where: Prisma.HadiahWhereUniqueInput;
    create: Prisma.XOR<Prisma.HadiahCreateWithoutTenantInput, Prisma.HadiahUncheckedCreateWithoutTenantInput>;
};
export type HadiahCreateManyTenantInputEnvelope = {
    data: Prisma.HadiahCreateManyTenantInput | Prisma.HadiahCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type HadiahUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.HadiahWhereUniqueInput;
    update: Prisma.XOR<Prisma.HadiahUpdateWithoutTenantInput, Prisma.HadiahUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.HadiahCreateWithoutTenantInput, Prisma.HadiahUncheckedCreateWithoutTenantInput>;
};
export type HadiahUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.HadiahWhereUniqueInput;
    data: Prisma.XOR<Prisma.HadiahUpdateWithoutTenantInput, Prisma.HadiahUncheckedUpdateWithoutTenantInput>;
};
export type HadiahUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.HadiahScalarWhereInput;
    data: Prisma.XOR<Prisma.HadiahUpdateManyMutationInput, Prisma.HadiahUncheckedUpdateManyWithoutTenantInput>;
};
export type HadiahScalarWhereInput = {
    AND?: Prisma.HadiahScalarWhereInput | Prisma.HadiahScalarWhereInput[];
    OR?: Prisma.HadiahScalarWhereInput[];
    NOT?: Prisma.HadiahScalarWhereInput | Prisma.HadiahScalarWhereInput[];
    id?: Prisma.UuidFilter<"Hadiah"> | string;
    tenantId?: Prisma.UuidFilter<"Hadiah"> | string;
    namaHadiah?: Prisma.StringFilter<"Hadiah"> | string;
    poinDibutuhkan?: Prisma.DecimalFilter<"Hadiah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFilter<"Hadiah"> | number;
    foto?: Prisma.StringNullableFilter<"Hadiah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Hadiah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Hadiah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Hadiah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Hadiah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Hadiah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Hadiah"> | string | null;
};
export type HadiahCreateManyTenantInput = {
    id?: string;
    namaHadiah: string;
    poinDibutuhkan: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok: number;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type HadiahUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutHadiahNestedInput;
};
export type HadiahUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutHadiahNestedInput;
};
export type HadiahUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinDibutuhkan?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stok?: Prisma.IntFieldUpdateOperationsInput | number;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type HadiahCountOutputType = {
    penukaran: number;
};
export type HadiahCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    penukaran?: boolean | HadiahCountOutputTypeCountPenukaranArgs;
};
export type HadiahCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahCountOutputTypeSelect<ExtArgs> | null;
};
export type HadiahCountOutputTypeCountPenukaranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenukaranPoinWhereInput;
};
export type HadiahSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaHadiah?: boolean;
    poinDibutuhkan?: boolean;
    stok?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    penukaran?: boolean | Prisma.Hadiah$penukaranArgs<ExtArgs>;
    _count?: boolean | Prisma.HadiahCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hadiah"]>;
export type HadiahSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaHadiah?: boolean;
    poinDibutuhkan?: boolean;
    stok?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hadiah"]>;
export type HadiahSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaHadiah?: boolean;
    poinDibutuhkan?: boolean;
    stok?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hadiah"]>;
export type HadiahSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    namaHadiah?: boolean;
    poinDibutuhkan?: boolean;
    stok?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type HadiahOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "namaHadiah" | "poinDibutuhkan" | "stok" | "foto" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["hadiah"]>;
export type HadiahInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    penukaran?: boolean | Prisma.Hadiah$penukaranArgs<ExtArgs>;
    _count?: boolean | Prisma.HadiahCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HadiahIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type HadiahIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $HadiahPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Hadiah";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        penukaran: Prisma.$PenukaranPoinPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        namaHadiah: string;
        poinDibutuhkan: runtime.Decimal;
        stok: number;
        foto: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["hadiah"]>;
    composites: {};
};
export type HadiahGetPayload<S extends boolean | null | undefined | HadiahDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HadiahPayload, S>;
export type HadiahCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HadiahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HadiahCountAggregateInputType | true;
};
export interface HadiahDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Hadiah'];
        meta: {
            name: 'Hadiah';
        };
    };
    findUnique<T extends HadiahFindUniqueArgs>(args: Prisma.SelectSubset<T, HadiahFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HadiahFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HadiahFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HadiahFindFirstArgs>(args?: Prisma.SelectSubset<T, HadiahFindFirstArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HadiahFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HadiahFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HadiahFindManyArgs>(args?: Prisma.SelectSubset<T, HadiahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HadiahCreateArgs>(args: Prisma.SelectSubset<T, HadiahCreateArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HadiahCreateManyArgs>(args?: Prisma.SelectSubset<T, HadiahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HadiahCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HadiahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HadiahDeleteArgs>(args: Prisma.SelectSubset<T, HadiahDeleteArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HadiahUpdateArgs>(args: Prisma.SelectSubset<T, HadiahUpdateArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HadiahDeleteManyArgs>(args?: Prisma.SelectSubset<T, HadiahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HadiahUpdateManyArgs>(args: Prisma.SelectSubset<T, HadiahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HadiahUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HadiahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HadiahUpsertArgs>(args: Prisma.SelectSubset<T, HadiahUpsertArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HadiahCountArgs>(args?: Prisma.Subset<T, HadiahCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HadiahCountAggregateOutputType> : number>;
    aggregate<T extends HadiahAggregateArgs>(args: Prisma.Subset<T, HadiahAggregateArgs>): Prisma.PrismaPromise<GetHadiahAggregateType<T>>;
    groupBy<T extends HadiahGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HadiahGroupByArgs['orderBy'];
    } : {
        orderBy?: HadiahGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HadiahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHadiahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HadiahFieldRefs;
}
export interface Prisma__HadiahClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    penukaran<T extends Prisma.Hadiah$penukaranArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Hadiah$penukaranArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HadiahFieldRefs {
    readonly id: Prisma.FieldRef<"Hadiah", 'String'>;
    readonly tenantId: Prisma.FieldRef<"Hadiah", 'String'>;
    readonly namaHadiah: Prisma.FieldRef<"Hadiah", 'String'>;
    readonly poinDibutuhkan: Prisma.FieldRef<"Hadiah", 'Decimal'>;
    readonly stok: Prisma.FieldRef<"Hadiah", 'Int'>;
    readonly foto: Prisma.FieldRef<"Hadiah", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Hadiah", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Hadiah", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Hadiah", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"Hadiah", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"Hadiah", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"Hadiah", 'String'>;
}
export type HadiahFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    where: Prisma.HadiahWhereUniqueInput;
};
export type HadiahFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    where: Prisma.HadiahWhereUniqueInput;
};
export type HadiahFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    where?: Prisma.HadiahWhereInput;
    orderBy?: Prisma.HadiahOrderByWithRelationInput | Prisma.HadiahOrderByWithRelationInput[];
    cursor?: Prisma.HadiahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HadiahScalarFieldEnum | Prisma.HadiahScalarFieldEnum[];
};
export type HadiahFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    where?: Prisma.HadiahWhereInput;
    orderBy?: Prisma.HadiahOrderByWithRelationInput | Prisma.HadiahOrderByWithRelationInput[];
    cursor?: Prisma.HadiahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HadiahScalarFieldEnum | Prisma.HadiahScalarFieldEnum[];
};
export type HadiahFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    where?: Prisma.HadiahWhereInput;
    orderBy?: Prisma.HadiahOrderByWithRelationInput | Prisma.HadiahOrderByWithRelationInput[];
    cursor?: Prisma.HadiahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HadiahScalarFieldEnum | Prisma.HadiahScalarFieldEnum[];
};
export type HadiahCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HadiahCreateInput, Prisma.HadiahUncheckedCreateInput>;
};
export type HadiahCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HadiahCreateManyInput | Prisma.HadiahCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HadiahCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    data: Prisma.HadiahCreateManyInput | Prisma.HadiahCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HadiahIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HadiahUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HadiahUpdateInput, Prisma.HadiahUncheckedUpdateInput>;
    where: Prisma.HadiahWhereUniqueInput;
};
export type HadiahUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HadiahUpdateManyMutationInput, Prisma.HadiahUncheckedUpdateManyInput>;
    where?: Prisma.HadiahWhereInput;
    limit?: number;
};
export type HadiahUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HadiahUpdateManyMutationInput, Prisma.HadiahUncheckedUpdateManyInput>;
    where?: Prisma.HadiahWhereInput;
    limit?: number;
    include?: Prisma.HadiahIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HadiahUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    where: Prisma.HadiahWhereUniqueInput;
    create: Prisma.XOR<Prisma.HadiahCreateInput, Prisma.HadiahUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HadiahUpdateInput, Prisma.HadiahUncheckedUpdateInput>;
};
export type HadiahDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
    where: Prisma.HadiahWhereUniqueInput;
};
export type HadiahDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HadiahWhereInput;
    limit?: number;
};
export type Hadiah$penukaranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HadiahDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HadiahSelect<ExtArgs> | null;
    omit?: Prisma.HadiahOmit<ExtArgs> | null;
    include?: Prisma.HadiahInclude<ExtArgs> | null;
};
