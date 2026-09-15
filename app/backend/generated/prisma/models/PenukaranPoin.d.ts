import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PenukaranPoinModel = runtime.Types.Result.DefaultSelection<Prisma.$PenukaranPoinPayload>;
export type AggregatePenukaranPoin = {
    _count: PenukaranPoinCountAggregateOutputType | null;
    _avg: PenukaranPoinAvgAggregateOutputType | null;
    _sum: PenukaranPoinSumAggregateOutputType | null;
    _min: PenukaranPoinMinAggregateOutputType | null;
    _max: PenukaranPoinMaxAggregateOutputType | null;
};
export type PenukaranPoinAvgAggregateOutputType = {
    poinTerpakai: runtime.Decimal | null;
};
export type PenukaranPoinSumAggregateOutputType = {
    poinTerpakai: runtime.Decimal | null;
};
export type PenukaranPoinMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    tanggal: Date | null;
    idSetor: string | null;
    idNasabah: string | null;
    idHadiah: string | null;
    poinTerpakai: runtime.Decimal | null;
    status: $Enums.StatusPenukaran | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type PenukaranPoinMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    tanggal: Date | null;
    idSetor: string | null;
    idNasabah: string | null;
    idHadiah: string | null;
    poinTerpakai: runtime.Decimal | null;
    status: $Enums.StatusPenukaran | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type PenukaranPoinCountAggregateOutputType = {
    id: number;
    tenantId: number;
    tanggal: number;
    idSetor: number;
    idNasabah: number;
    idHadiah: number;
    poinTerpakai: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type PenukaranPoinAvgAggregateInputType = {
    poinTerpakai?: true;
};
export type PenukaranPoinSumAggregateInputType = {
    poinTerpakai?: true;
};
export type PenukaranPoinMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    tanggal?: true;
    idSetor?: true;
    idNasabah?: true;
    idHadiah?: true;
    poinTerpakai?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type PenukaranPoinMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    tanggal?: true;
    idSetor?: true;
    idNasabah?: true;
    idHadiah?: true;
    poinTerpakai?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type PenukaranPoinCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    tanggal?: true;
    idSetor?: true;
    idNasabah?: true;
    idHadiah?: true;
    poinTerpakai?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type PenukaranPoinAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenukaranPoinWhereInput;
    orderBy?: Prisma.PenukaranPoinOrderByWithRelationInput | Prisma.PenukaranPoinOrderByWithRelationInput[];
    cursor?: Prisma.PenukaranPoinWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PenukaranPoinCountAggregateInputType;
    _avg?: PenukaranPoinAvgAggregateInputType;
    _sum?: PenukaranPoinSumAggregateInputType;
    _min?: PenukaranPoinMinAggregateInputType;
    _max?: PenukaranPoinMaxAggregateInputType;
};
export type GetPenukaranPoinAggregateType<T extends PenukaranPoinAggregateArgs> = {
    [P in keyof T & keyof AggregatePenukaranPoin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePenukaranPoin[P]> : Prisma.GetScalarType<T[P], AggregatePenukaranPoin[P]>;
};
export type PenukaranPoinGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenukaranPoinWhereInput;
    orderBy?: Prisma.PenukaranPoinOrderByWithAggregationInput | Prisma.PenukaranPoinOrderByWithAggregationInput[];
    by: Prisma.PenukaranPoinScalarFieldEnum[] | Prisma.PenukaranPoinScalarFieldEnum;
    having?: Prisma.PenukaranPoinScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PenukaranPoinCountAggregateInputType | true;
    _avg?: PenukaranPoinAvgAggregateInputType;
    _sum?: PenukaranPoinSumAggregateInputType;
    _min?: PenukaranPoinMinAggregateInputType;
    _max?: PenukaranPoinMaxAggregateInputType;
};
export type PenukaranPoinGroupByOutputType = {
    id: string;
    tenantId: string;
    tanggal: Date;
    idSetor: string | null;
    idNasabah: string;
    idHadiah: string;
    poinTerpakai: runtime.Decimal;
    status: $Enums.StatusPenukaran;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: PenukaranPoinCountAggregateOutputType | null;
    _avg: PenukaranPoinAvgAggregateOutputType | null;
    _sum: PenukaranPoinSumAggregateOutputType | null;
    _min: PenukaranPoinMinAggregateOutputType | null;
    _max: PenukaranPoinMaxAggregateOutputType | null;
};
export type GetPenukaranPoinGroupByPayload<T extends PenukaranPoinGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PenukaranPoinGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PenukaranPoinGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PenukaranPoinGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PenukaranPoinGroupByOutputType[P]>;
}>>;
export type PenukaranPoinWhereInput = {
    AND?: Prisma.PenukaranPoinWhereInput | Prisma.PenukaranPoinWhereInput[];
    OR?: Prisma.PenukaranPoinWhereInput[];
    NOT?: Prisma.PenukaranPoinWhereInput | Prisma.PenukaranPoinWhereInput[];
    id?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    tenantId?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    tanggal?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    idSetor?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    idNasabah?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    idHadiah?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    poinTerpakai?: Prisma.DecimalFilter<"PenukaranPoin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFilter<"PenukaranPoin"> | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"PenukaranPoin"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"PenukaranPoin"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    setor?: Prisma.XOR<Prisma.SetorSampahNullableScalarRelationFilter, Prisma.SetorSampahWhereInput> | null;
    nasabah?: Prisma.XOR<Prisma.NasabahScalarRelationFilter, Prisma.NasabahWhereInput>;
    hadiah?: Prisma.XOR<Prisma.HadiahScalarRelationFilter, Prisma.HadiahWhereInput>;
};
export type PenukaranPoinOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrderInput | Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    idHadiah?: Prisma.SortOrder;
    poinTerpakai?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    setor?: Prisma.SetorSampahOrderByWithRelationInput;
    nasabah?: Prisma.NasabahOrderByWithRelationInput;
    hadiah?: Prisma.HadiahOrderByWithRelationInput;
};
export type PenukaranPoinWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PenukaranPoinWhereInput | Prisma.PenukaranPoinWhereInput[];
    OR?: Prisma.PenukaranPoinWhereInput[];
    NOT?: Prisma.PenukaranPoinWhereInput | Prisma.PenukaranPoinWhereInput[];
    tenantId?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    tanggal?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    idSetor?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    idNasabah?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    idHadiah?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    poinTerpakai?: Prisma.DecimalFilter<"PenukaranPoin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFilter<"PenukaranPoin"> | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"PenukaranPoin"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"PenukaranPoin"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    setor?: Prisma.XOR<Prisma.SetorSampahNullableScalarRelationFilter, Prisma.SetorSampahWhereInput> | null;
    nasabah?: Prisma.XOR<Prisma.NasabahScalarRelationFilter, Prisma.NasabahWhereInput>;
    hadiah?: Prisma.XOR<Prisma.HadiahScalarRelationFilter, Prisma.HadiahWhereInput>;
}, "id">;
export type PenukaranPoinOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrderInput | Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    idHadiah?: Prisma.SortOrder;
    poinTerpakai?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PenukaranPoinCountOrderByAggregateInput;
    _avg?: Prisma.PenukaranPoinAvgOrderByAggregateInput;
    _max?: Prisma.PenukaranPoinMaxOrderByAggregateInput;
    _min?: Prisma.PenukaranPoinMinOrderByAggregateInput;
    _sum?: Prisma.PenukaranPoinSumOrderByAggregateInput;
};
export type PenukaranPoinScalarWhereWithAggregatesInput = {
    AND?: Prisma.PenukaranPoinScalarWhereWithAggregatesInput | Prisma.PenukaranPoinScalarWhereWithAggregatesInput[];
    OR?: Prisma.PenukaranPoinScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PenukaranPoinScalarWhereWithAggregatesInput | Prisma.PenukaranPoinScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PenukaranPoin"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"PenukaranPoin"> | string;
    tanggal?: Prisma.DateTimeWithAggregatesFilter<"PenukaranPoin"> | Date | string;
    idSetor?: Prisma.UuidNullableWithAggregatesFilter<"PenukaranPoin"> | string | null;
    idNasabah?: Prisma.UuidWithAggregatesFilter<"PenukaranPoin"> | string;
    idHadiah?: Prisma.UuidWithAggregatesFilter<"PenukaranPoin"> | string;
    poinTerpakai?: Prisma.DecimalWithAggregatesFilter<"PenukaranPoin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranWithAggregatesFilter<"PenukaranPoin"> | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PenukaranPoin"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PenukaranPoin"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PenukaranPoin"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"PenukaranPoin"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PenukaranPoin"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"PenukaranPoin"> | string | null;
};
export type PenukaranPoinCreateInput = {
    id?: string;
    tanggal?: Date | string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutPenukaranPoinsInput;
    setor?: Prisma.SetorSampahCreateNestedOneWithoutPenukaranInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutPenukaranInput;
    hadiah: Prisma.HadiahCreateNestedOneWithoutPenukaranInput;
};
export type PenukaranPoinUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idNasabah: string;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutPenukaranPoinsNestedInput;
    setor?: Prisma.SetorSampahUpdateOneWithoutPenukaranNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutPenukaranNestedInput;
    hadiah?: Prisma.HadiahUpdateOneRequiredWithoutPenukaranNestedInput;
};
export type PenukaranPoinUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinCreateManyInput = {
    id?: string;
    tenantId: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idNasabah: string;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinListRelationFilter = {
    every?: Prisma.PenukaranPoinWhereInput;
    some?: Prisma.PenukaranPoinWhereInput;
    none?: Prisma.PenukaranPoinWhereInput;
};
export type PenukaranPoinOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PenukaranPoinCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    idHadiah?: Prisma.SortOrder;
    poinTerpakai?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type PenukaranPoinAvgOrderByAggregateInput = {
    poinTerpakai?: Prisma.SortOrder;
};
export type PenukaranPoinMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    idHadiah?: Prisma.SortOrder;
    poinTerpakai?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type PenukaranPoinMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tanggal?: Prisma.SortOrder;
    idSetor?: Prisma.SortOrder;
    idNasabah?: Prisma.SortOrder;
    idHadiah?: Prisma.SortOrder;
    poinTerpakai?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type PenukaranPoinSumOrderByAggregateInput = {
    poinTerpakai?: Prisma.SortOrder;
};
export type PenukaranPoinCreateNestedManyWithoutNasabahInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput> | Prisma.PenukaranPoinCreateWithoutNasabahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput | Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyNasabahInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUncheckedCreateNestedManyWithoutNasabahInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput> | Prisma.PenukaranPoinCreateWithoutNasabahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput | Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyNasabahInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUpdateManyWithoutNasabahNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput> | Prisma.PenukaranPoinCreateWithoutNasabahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput | Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutNasabahInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutNasabahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyNasabahInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutNasabahInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutNasabahInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutNasabahInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutNasabahInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type PenukaranPoinUncheckedUpdateManyWithoutNasabahNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput> | Prisma.PenukaranPoinCreateWithoutNasabahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput | Prisma.PenukaranPoinCreateOrConnectWithoutNasabahInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutNasabahInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutNasabahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyNasabahInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutNasabahInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutNasabahInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutNasabahInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutNasabahInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type PenukaranPoinCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutSetorInput, Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput> | Prisma.PenukaranPoinCreateWithoutSetorInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput | Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.PenukaranPoinCreateManySetorInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUncheckedCreateNestedManyWithoutSetorInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutSetorInput, Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput> | Prisma.PenukaranPoinCreateWithoutSetorInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput | Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput[];
    createMany?: Prisma.PenukaranPoinCreateManySetorInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutSetorInput, Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput> | Prisma.PenukaranPoinCreateWithoutSetorInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput | Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutSetorInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.PenukaranPoinCreateManySetorInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutSetorInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutSetorInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type PenukaranPoinUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutSetorInput, Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput> | Prisma.PenukaranPoinCreateWithoutSetorInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput | Prisma.PenukaranPoinCreateOrConnectWithoutSetorInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutSetorInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutSetorInput[];
    createMany?: Prisma.PenukaranPoinCreateManySetorInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutSetorInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutSetorInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutSetorInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutSetorInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type PenukaranPoinCreateNestedManyWithoutHadiahInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput> | Prisma.PenukaranPoinCreateWithoutHadiahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput | Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyHadiahInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUncheckedCreateNestedManyWithoutHadiahInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput> | Prisma.PenukaranPoinCreateWithoutHadiahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput | Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyHadiahInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUpdateManyWithoutHadiahNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput> | Prisma.PenukaranPoinCreateWithoutHadiahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput | Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutHadiahInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutHadiahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyHadiahInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutHadiahInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutHadiahInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutHadiahInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutHadiahInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type PenukaranPoinUncheckedUpdateManyWithoutHadiahNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput> | Prisma.PenukaranPoinCreateWithoutHadiahInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput | Prisma.PenukaranPoinCreateOrConnectWithoutHadiahInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutHadiahInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutHadiahInput[];
    createMany?: Prisma.PenukaranPoinCreateManyHadiahInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutHadiahInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutHadiahInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutHadiahInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutHadiahInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type EnumStatusPenukaranFieldUpdateOperationsInput = {
    set?: $Enums.StatusPenukaran;
};
export type PenukaranPoinCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutTenantInput, Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput> | Prisma.PenukaranPoinCreateWithoutTenantInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput | Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.PenukaranPoinCreateManyTenantInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutTenantInput, Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput> | Prisma.PenukaranPoinCreateWithoutTenantInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput | Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.PenukaranPoinCreateManyTenantInputEnvelope;
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
};
export type PenukaranPoinUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutTenantInput, Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput> | Prisma.PenukaranPoinCreateWithoutTenantInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput | Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutTenantInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.PenukaranPoinCreateManyTenantInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutTenantInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutTenantInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutTenantInput, Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput> | Prisma.PenukaranPoinCreateWithoutTenantInput[] | Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput | Prisma.PenukaranPoinCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutTenantInput | Prisma.PenukaranPoinUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.PenukaranPoinCreateManyTenantInputEnvelope;
    set?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    disconnect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    delete?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    connect?: Prisma.PenukaranPoinWhereUniqueInput | Prisma.PenukaranPoinWhereUniqueInput[];
    update?: Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutTenantInput | Prisma.PenukaranPoinUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.PenukaranPoinUpdateManyWithWhereWithoutTenantInput | Prisma.PenukaranPoinUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
};
export type PenukaranPoinCreateWithoutNasabahInput = {
    id?: string;
    tanggal?: Date | string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutPenukaranPoinsInput;
    setor?: Prisma.SetorSampahCreateNestedOneWithoutPenukaranInput;
    hadiah: Prisma.HadiahCreateNestedOneWithoutPenukaranInput;
};
export type PenukaranPoinUncheckedCreateWithoutNasabahInput = {
    id?: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinCreateOrConnectWithoutNasabahInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput>;
};
export type PenukaranPoinCreateManyNasabahInputEnvelope = {
    data: Prisma.PenukaranPoinCreateManyNasabahInput | Prisma.PenukaranPoinCreateManyNasabahInput[];
    skipDuplicates?: boolean;
};
export type PenukaranPoinUpsertWithWhereUniqueWithoutNasabahInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedUpdateWithoutNasabahInput>;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedCreateWithoutNasabahInput>;
};
export type PenukaranPoinUpdateWithWhereUniqueWithoutNasabahInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutNasabahInput, Prisma.PenukaranPoinUncheckedUpdateWithoutNasabahInput>;
};
export type PenukaranPoinUpdateManyWithWhereWithoutNasabahInput = {
    where: Prisma.PenukaranPoinScalarWhereInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateManyMutationInput, Prisma.PenukaranPoinUncheckedUpdateManyWithoutNasabahInput>;
};
export type PenukaranPoinScalarWhereInput = {
    AND?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
    OR?: Prisma.PenukaranPoinScalarWhereInput[];
    NOT?: Prisma.PenukaranPoinScalarWhereInput | Prisma.PenukaranPoinScalarWhereInput[];
    id?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    tenantId?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    tanggal?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    idSetor?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    idNasabah?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    idHadiah?: Prisma.UuidFilter<"PenukaranPoin"> | string;
    poinTerpakai?: Prisma.DecimalFilter<"PenukaranPoin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFilter<"PenukaranPoin"> | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PenukaranPoin"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"PenukaranPoin"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"PenukaranPoin"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"PenukaranPoin"> | string | null;
};
export type PenukaranPoinCreateWithoutSetorInput = {
    id?: string;
    tanggal?: Date | string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutPenukaranPoinsInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutPenukaranInput;
    hadiah: Prisma.HadiahCreateNestedOneWithoutPenukaranInput;
};
export type PenukaranPoinUncheckedCreateWithoutSetorInput = {
    id?: string;
    tanggal?: Date | string;
    idNasabah: string;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinCreateOrConnectWithoutSetorInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutSetorInput, Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput>;
};
export type PenukaranPoinCreateManySetorInputEnvelope = {
    data: Prisma.PenukaranPoinCreateManySetorInput | Prisma.PenukaranPoinCreateManySetorInput[];
    skipDuplicates?: boolean;
};
export type PenukaranPoinUpsertWithWhereUniqueWithoutSetorInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutSetorInput, Prisma.PenukaranPoinUncheckedUpdateWithoutSetorInput>;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutSetorInput, Prisma.PenukaranPoinUncheckedCreateWithoutSetorInput>;
};
export type PenukaranPoinUpdateWithWhereUniqueWithoutSetorInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutSetorInput, Prisma.PenukaranPoinUncheckedUpdateWithoutSetorInput>;
};
export type PenukaranPoinUpdateManyWithWhereWithoutSetorInput = {
    where: Prisma.PenukaranPoinScalarWhereInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateManyMutationInput, Prisma.PenukaranPoinUncheckedUpdateManyWithoutSetorInput>;
};
export type PenukaranPoinCreateWithoutHadiahInput = {
    id?: string;
    tanggal?: Date | string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutPenukaranPoinsInput;
    setor?: Prisma.SetorSampahCreateNestedOneWithoutPenukaranInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutPenukaranInput;
};
export type PenukaranPoinUncheckedCreateWithoutHadiahInput = {
    id?: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idNasabah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinCreateOrConnectWithoutHadiahInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput>;
};
export type PenukaranPoinCreateManyHadiahInputEnvelope = {
    data: Prisma.PenukaranPoinCreateManyHadiahInput | Prisma.PenukaranPoinCreateManyHadiahInput[];
    skipDuplicates?: boolean;
};
export type PenukaranPoinUpsertWithWhereUniqueWithoutHadiahInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedUpdateWithoutHadiahInput>;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedCreateWithoutHadiahInput>;
};
export type PenukaranPoinUpdateWithWhereUniqueWithoutHadiahInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutHadiahInput, Prisma.PenukaranPoinUncheckedUpdateWithoutHadiahInput>;
};
export type PenukaranPoinUpdateManyWithWhereWithoutHadiahInput = {
    where: Prisma.PenukaranPoinScalarWhereInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateManyMutationInput, Prisma.PenukaranPoinUncheckedUpdateManyWithoutHadiahInput>;
};
export type PenukaranPoinCreateWithoutTenantInput = {
    id?: string;
    tanggal?: Date | string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setor?: Prisma.SetorSampahCreateNestedOneWithoutPenukaranInput;
    nasabah: Prisma.NasabahCreateNestedOneWithoutPenukaranInput;
    hadiah: Prisma.HadiahCreateNestedOneWithoutPenukaranInput;
};
export type PenukaranPoinUncheckedCreateWithoutTenantInput = {
    id?: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idNasabah: string;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinCreateOrConnectWithoutTenantInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutTenantInput, Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput>;
};
export type PenukaranPoinCreateManyTenantInputEnvelope = {
    data: Prisma.PenukaranPoinCreateManyTenantInput | Prisma.PenukaranPoinCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type PenukaranPoinUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    update: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutTenantInput, Prisma.PenukaranPoinUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateWithoutTenantInput, Prisma.PenukaranPoinUncheckedCreateWithoutTenantInput>;
};
export type PenukaranPoinUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.PenukaranPoinWhereUniqueInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateWithoutTenantInput, Prisma.PenukaranPoinUncheckedUpdateWithoutTenantInput>;
};
export type PenukaranPoinUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.PenukaranPoinScalarWhereInput;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateManyMutationInput, Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantInput>;
};
export type PenukaranPoinCreateManyNasabahInput = {
    id?: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinUpdateWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutPenukaranPoinsNestedInput;
    setor?: Prisma.SetorSampahUpdateOneWithoutPenukaranNestedInput;
    hadiah?: Prisma.HadiahUpdateOneRequiredWithoutPenukaranNestedInput;
};
export type PenukaranPoinUncheckedUpdateWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinUncheckedUpdateManyWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinCreateManySetorInput = {
    id?: string;
    tanggal?: Date | string;
    idNasabah: string;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutPenukaranPoinsNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutPenukaranNestedInput;
    hadiah?: Prisma.HadiahUpdateOneRequiredWithoutPenukaranNestedInput;
};
export type PenukaranPoinUncheckedUpdateWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinUncheckedUpdateManyWithoutSetorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinCreateManyHadiahInput = {
    id?: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idNasabah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinUpdateWithoutHadiahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutPenukaranPoinsNestedInput;
    setor?: Prisma.SetorSampahUpdateOneWithoutPenukaranNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutPenukaranNestedInput;
};
export type PenukaranPoinUncheckedUpdateWithoutHadiahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinUncheckedUpdateManyWithoutHadiahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinCreateManyTenantInput = {
    id?: string;
    tanggal?: Date | string;
    idSetor?: string | null;
    idNasabah: string;
    idHadiah: string;
    poinTerpakai: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.StatusPenukaran;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type PenukaranPoinUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setor?: Prisma.SetorSampahUpdateOneWithoutPenukaranNestedInput;
    nasabah?: Prisma.NasabahUpdateOneRequiredWithoutPenukaranNestedInput;
    hadiah?: Prisma.HadiahUpdateOneRequiredWithoutPenukaranNestedInput;
};
export type PenukaranPoinUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tanggal?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    idSetor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    idHadiah?: Prisma.StringFieldUpdateOperationsInput | string;
    poinTerpakai?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusPenukaranFieldUpdateOperationsInput | $Enums.StatusPenukaran;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PenukaranPoinSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idSetor?: boolean;
    idNasabah?: boolean;
    idHadiah?: boolean;
    poinTerpakai?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.PenukaranPoin$setorArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    hadiah?: boolean | Prisma.HadiahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penukaranPoin"]>;
export type PenukaranPoinSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idSetor?: boolean;
    idNasabah?: boolean;
    idHadiah?: boolean;
    poinTerpakai?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.PenukaranPoin$setorArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    hadiah?: boolean | Prisma.HadiahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penukaranPoin"]>;
export type PenukaranPoinSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idSetor?: boolean;
    idNasabah?: boolean;
    idHadiah?: boolean;
    poinTerpakai?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.PenukaranPoin$setorArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    hadiah?: boolean | Prisma.HadiahDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["penukaranPoin"]>;
export type PenukaranPoinSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    tanggal?: boolean;
    idSetor?: boolean;
    idNasabah?: boolean;
    idHadiah?: boolean;
    poinTerpakai?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type PenukaranPoinOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "tanggal" | "idSetor" | "idNasabah" | "idHadiah" | "poinTerpakai" | "status" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["penukaranPoin"]>;
export type PenukaranPoinInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.PenukaranPoin$setorArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    hadiah?: boolean | Prisma.HadiahDefaultArgs<ExtArgs>;
};
export type PenukaranPoinIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.PenukaranPoin$setorArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    hadiah?: boolean | Prisma.HadiahDefaultArgs<ExtArgs>;
};
export type PenukaranPoinIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    setor?: boolean | Prisma.PenukaranPoin$setorArgs<ExtArgs>;
    nasabah?: boolean | Prisma.NasabahDefaultArgs<ExtArgs>;
    hadiah?: boolean | Prisma.HadiahDefaultArgs<ExtArgs>;
};
export type $PenukaranPoinPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PenukaranPoin";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        setor: Prisma.$SetorSampahPayload<ExtArgs> | null;
        nasabah: Prisma.$NasabahPayload<ExtArgs>;
        hadiah: Prisma.$HadiahPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        tanggal: Date;
        idSetor: string | null;
        idNasabah: string;
        idHadiah: string;
        poinTerpakai: runtime.Decimal;
        status: $Enums.StatusPenukaran;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["penukaranPoin"]>;
    composites: {};
};
export type PenukaranPoinGetPayload<S extends boolean | null | undefined | PenukaranPoinDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload, S>;
export type PenukaranPoinCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PenukaranPoinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PenukaranPoinCountAggregateInputType | true;
};
export interface PenukaranPoinDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PenukaranPoin'];
        meta: {
            name: 'PenukaranPoin';
        };
    };
    findUnique<T extends PenukaranPoinFindUniqueArgs>(args: Prisma.SelectSubset<T, PenukaranPoinFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PenukaranPoinFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PenukaranPoinFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PenukaranPoinFindFirstArgs>(args?: Prisma.SelectSubset<T, PenukaranPoinFindFirstArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PenukaranPoinFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PenukaranPoinFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PenukaranPoinFindManyArgs>(args?: Prisma.SelectSubset<T, PenukaranPoinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PenukaranPoinCreateArgs>(args: Prisma.SelectSubset<T, PenukaranPoinCreateArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PenukaranPoinCreateManyArgs>(args?: Prisma.SelectSubset<T, PenukaranPoinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PenukaranPoinCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PenukaranPoinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PenukaranPoinDeleteArgs>(args: Prisma.SelectSubset<T, PenukaranPoinDeleteArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PenukaranPoinUpdateArgs>(args: Prisma.SelectSubset<T, PenukaranPoinUpdateArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PenukaranPoinDeleteManyArgs>(args?: Prisma.SelectSubset<T, PenukaranPoinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PenukaranPoinUpdateManyArgs>(args: Prisma.SelectSubset<T, PenukaranPoinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PenukaranPoinUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PenukaranPoinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PenukaranPoinUpsertArgs>(args: Prisma.SelectSubset<T, PenukaranPoinUpsertArgs<ExtArgs>>): Prisma.Prisma__PenukaranPoinClient<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PenukaranPoinCountArgs>(args?: Prisma.Subset<T, PenukaranPoinCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PenukaranPoinCountAggregateOutputType> : number>;
    aggregate<T extends PenukaranPoinAggregateArgs>(args: Prisma.Subset<T, PenukaranPoinAggregateArgs>): Prisma.PrismaPromise<GetPenukaranPoinAggregateType<T>>;
    groupBy<T extends PenukaranPoinGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PenukaranPoinGroupByArgs['orderBy'];
    } : {
        orderBy?: PenukaranPoinGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PenukaranPoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenukaranPoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PenukaranPoinFieldRefs;
}
export interface Prisma__PenukaranPoinClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    setor<T extends Prisma.PenukaranPoin$setorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PenukaranPoin$setorArgs<ExtArgs>>): Prisma.Prisma__SetorSampahClient<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    nasabah<T extends Prisma.NasabahDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NasabahDefaultArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    hadiah<T extends Prisma.HadiahDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HadiahDefaultArgs<ExtArgs>>): Prisma.Prisma__HadiahClient<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PenukaranPoinFieldRefs {
    readonly id: Prisma.FieldRef<"PenukaranPoin", 'String'>;
    readonly tenantId: Prisma.FieldRef<"PenukaranPoin", 'String'>;
    readonly tanggal: Prisma.FieldRef<"PenukaranPoin", 'DateTime'>;
    readonly idSetor: Prisma.FieldRef<"PenukaranPoin", 'String'>;
    readonly idNasabah: Prisma.FieldRef<"PenukaranPoin", 'String'>;
    readonly idHadiah: Prisma.FieldRef<"PenukaranPoin", 'String'>;
    readonly poinTerpakai: Prisma.FieldRef<"PenukaranPoin", 'Decimal'>;
    readonly status: Prisma.FieldRef<"PenukaranPoin", 'StatusPenukaran'>;
    readonly createdAt: Prisma.FieldRef<"PenukaranPoin", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PenukaranPoin", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"PenukaranPoin", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"PenukaranPoin", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"PenukaranPoin", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"PenukaranPoin", 'String'>;
}
export type PenukaranPoinFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
    where: Prisma.PenukaranPoinWhereUniqueInput;
};
export type PenukaranPoinFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
    where: Prisma.PenukaranPoinWhereUniqueInput;
};
export type PenukaranPoinFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PenukaranPoinFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PenukaranPoinFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PenukaranPoinCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PenukaranPoinCreateInput, Prisma.PenukaranPoinUncheckedCreateInput>;
};
export type PenukaranPoinCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PenukaranPoinCreateManyInput | Prisma.PenukaranPoinCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PenukaranPoinCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    data: Prisma.PenukaranPoinCreateManyInput | Prisma.PenukaranPoinCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PenukaranPoinIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PenukaranPoinUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateInput, Prisma.PenukaranPoinUncheckedUpdateInput>;
    where: Prisma.PenukaranPoinWhereUniqueInput;
};
export type PenukaranPoinUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateManyMutationInput, Prisma.PenukaranPoinUncheckedUpdateManyInput>;
    where?: Prisma.PenukaranPoinWhereInput;
    limit?: number;
};
export type PenukaranPoinUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PenukaranPoinUpdateManyMutationInput, Prisma.PenukaranPoinUncheckedUpdateManyInput>;
    where?: Prisma.PenukaranPoinWhereInput;
    limit?: number;
    include?: Prisma.PenukaranPoinIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PenukaranPoinUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
    where: Prisma.PenukaranPoinWhereUniqueInput;
    create: Prisma.XOR<Prisma.PenukaranPoinCreateInput, Prisma.PenukaranPoinUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PenukaranPoinUpdateInput, Prisma.PenukaranPoinUncheckedUpdateInput>;
};
export type PenukaranPoinDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
    where: Prisma.PenukaranPoinWhereUniqueInput;
};
export type PenukaranPoinDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenukaranPoinWhereInput;
    limit?: number;
};
export type PenukaranPoin$setorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetorSampahSelect<ExtArgs> | null;
    omit?: Prisma.SetorSampahOmit<ExtArgs> | null;
    include?: Prisma.SetorSampahInclude<ExtArgs> | null;
    where?: Prisma.SetorSampahWhereInput;
};
export type PenukaranPoinDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PenukaranPoinSelect<ExtArgs> | null;
    omit?: Prisma.PenukaranPoinOmit<ExtArgs> | null;
    include?: Prisma.PenukaranPoinInclude<ExtArgs> | null;
};
