import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NasabahModel = runtime.Types.Result.DefaultSelection<Prisma.$NasabahPayload>;
export type AggregateNasabah = {
    _count: NasabahCountAggregateOutputType | null;
    _avg: NasabahAvgAggregateOutputType | null;
    _sum: NasabahSumAggregateOutputType | null;
    _min: NasabahMinAggregateOutputType | null;
    _max: NasabahMaxAggregateOutputType | null;
};
export type NasabahAvgAggregateOutputType = {
    saldoPoin: runtime.Decimal | null;
};
export type NasabahSumAggregateOutputType = {
    saldoPoin: runtime.Decimal | null;
};
export type NasabahMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaNasabah: string | null;
    alamat: string | null;
    telp: string | null;
    saldoPoin: runtime.Decimal | null;
    idUser: string | null;
    foto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type NasabahMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaNasabah: string | null;
    alamat: string | null;
    telp: string | null;
    saldoPoin: runtime.Decimal | null;
    idUser: string | null;
    foto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type NasabahCountAggregateOutputType = {
    id: number;
    tenantId: number;
    namaNasabah: number;
    alamat: number;
    telp: number;
    saldoPoin: number;
    idUser: number;
    foto: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type NasabahAvgAggregateInputType = {
    saldoPoin?: true;
};
export type NasabahSumAggregateInputType = {
    saldoPoin?: true;
};
export type NasabahMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaNasabah?: true;
    alamat?: true;
    telp?: true;
    saldoPoin?: true;
    idUser?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type NasabahMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaNasabah?: true;
    alamat?: true;
    telp?: true;
    saldoPoin?: true;
    idUser?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type NasabahCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaNasabah?: true;
    alamat?: true;
    telp?: true;
    saldoPoin?: true;
    idUser?: true;
    foto?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type NasabahAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NasabahWhereInput;
    orderBy?: Prisma.NasabahOrderByWithRelationInput | Prisma.NasabahOrderByWithRelationInput[];
    cursor?: Prisma.NasabahWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NasabahCountAggregateInputType;
    _avg?: NasabahAvgAggregateInputType;
    _sum?: NasabahSumAggregateInputType;
    _min?: NasabahMinAggregateInputType;
    _max?: NasabahMaxAggregateInputType;
};
export type GetNasabahAggregateType<T extends NasabahAggregateArgs> = {
    [P in keyof T & keyof AggregateNasabah]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNasabah[P]> : Prisma.GetScalarType<T[P], AggregateNasabah[P]>;
};
export type NasabahGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NasabahWhereInput;
    orderBy?: Prisma.NasabahOrderByWithAggregationInput | Prisma.NasabahOrderByWithAggregationInput[];
    by: Prisma.NasabahScalarFieldEnum[] | Prisma.NasabahScalarFieldEnum;
    having?: Prisma.NasabahScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NasabahCountAggregateInputType | true;
    _avg?: NasabahAvgAggregateInputType;
    _sum?: NasabahSumAggregateInputType;
    _min?: NasabahMinAggregateInputType;
    _max?: NasabahMaxAggregateInputType;
};
export type NasabahGroupByOutputType = {
    id: string;
    tenantId: string;
    namaNasabah: string;
    alamat: string | null;
    telp: string;
    saldoPoin: runtime.Decimal;
    idUser: string;
    foto: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: NasabahCountAggregateOutputType | null;
    _avg: NasabahAvgAggregateOutputType | null;
    _sum: NasabahSumAggregateOutputType | null;
    _min: NasabahMinAggregateOutputType | null;
    _max: NasabahMaxAggregateOutputType | null;
};
export type GetNasabahGroupByPayload<T extends NasabahGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NasabahGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NasabahGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NasabahGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NasabahGroupByOutputType[P]>;
}>>;
export type NasabahWhereInput = {
    AND?: Prisma.NasabahWhereInput | Prisma.NasabahWhereInput[];
    OR?: Prisma.NasabahWhereInput[];
    NOT?: Prisma.NasabahWhereInput | Prisma.NasabahWhereInput[];
    id?: Prisma.UuidFilter<"Nasabah"> | string;
    tenantId?: Prisma.UuidFilter<"Nasabah"> | string;
    namaNasabah?: Prisma.StringFilter<"Nasabah"> | string;
    alamat?: Prisma.StringNullableFilter<"Nasabah"> | string | null;
    telp?: Prisma.StringFilter<"Nasabah"> | string;
    saldoPoin?: Prisma.DecimalFilter<"Nasabah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.UuidFilter<"Nasabah"> | string;
    foto?: Prisma.StringNullableFilter<"Nasabah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Nasabah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Nasabah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Nasabah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Nasabah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Nasabah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Nasabah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    setoran?: Prisma.SetorSampahListRelationFilter;
    penukaran?: Prisma.PenukaranPoinListRelationFilter;
};
export type NasabahOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaNasabah?: Prisma.SortOrder;
    alamat?: Prisma.SortOrderInput | Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    saldoPoin?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    foto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    setoran?: Prisma.SetorSampahOrderByRelationAggregateInput;
    penukaran?: Prisma.PenukaranPoinOrderByRelationAggregateInput;
};
export type NasabahWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idUser?: string;
    id_tenantId?: Prisma.NasabahIdTenantIdCompoundUniqueInput;
    idUser_tenantId?: Prisma.NasabahIdUserTenantIdCompoundUniqueInput;
    AND?: Prisma.NasabahWhereInput | Prisma.NasabahWhereInput[];
    OR?: Prisma.NasabahWhereInput[];
    NOT?: Prisma.NasabahWhereInput | Prisma.NasabahWhereInput[];
    tenantId?: Prisma.UuidFilter<"Nasabah"> | string;
    namaNasabah?: Prisma.StringFilter<"Nasabah"> | string;
    alamat?: Prisma.StringNullableFilter<"Nasabah"> | string | null;
    telp?: Prisma.StringFilter<"Nasabah"> | string;
    saldoPoin?: Prisma.DecimalFilter<"Nasabah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.StringNullableFilter<"Nasabah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Nasabah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Nasabah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Nasabah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Nasabah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Nasabah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Nasabah"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    setoran?: Prisma.SetorSampahListRelationFilter;
    penukaran?: Prisma.PenukaranPoinListRelationFilter;
}, "id" | "idUser" | "id_tenantId" | "idUser_tenantId">;
export type NasabahOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaNasabah?: Prisma.SortOrder;
    alamat?: Prisma.SortOrderInput | Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    saldoPoin?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    foto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.NasabahCountOrderByAggregateInput;
    _avg?: Prisma.NasabahAvgOrderByAggregateInput;
    _max?: Prisma.NasabahMaxOrderByAggregateInput;
    _min?: Prisma.NasabahMinOrderByAggregateInput;
    _sum?: Prisma.NasabahSumOrderByAggregateInput;
};
export type NasabahScalarWhereWithAggregatesInput = {
    AND?: Prisma.NasabahScalarWhereWithAggregatesInput | Prisma.NasabahScalarWhereWithAggregatesInput[];
    OR?: Prisma.NasabahScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NasabahScalarWhereWithAggregatesInput | Prisma.NasabahScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Nasabah"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"Nasabah"> | string;
    namaNasabah?: Prisma.StringWithAggregatesFilter<"Nasabah"> | string;
    alamat?: Prisma.StringNullableWithAggregatesFilter<"Nasabah"> | string | null;
    telp?: Prisma.StringWithAggregatesFilter<"Nasabah"> | string;
    saldoPoin?: Prisma.DecimalWithAggregatesFilter<"Nasabah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.UuidWithAggregatesFilter<"Nasabah"> | string;
    foto?: Prisma.StringNullableWithAggregatesFilter<"Nasabah"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Nasabah"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Nasabah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Nasabah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"Nasabah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Nasabah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"Nasabah"> | string | null;
};
export type NasabahCreateInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutNasabahsInput;
    user: Prisma.UserCreateNestedOneWithoutNasabahInput;
    setoran?: Prisma.SetorSampahCreateNestedManyWithoutNasabahInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutNasabahInput;
};
export type NasabahUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser: string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setoran?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutNasabahInput;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutNasabahInput;
};
export type NasabahUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutNasabahsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutNasabahNestedInput;
    setoran?: Prisma.SetorSampahUpdateManyWithoutNasabahNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutNasabahNestedInput;
};
export type NasabahUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setoran?: Prisma.SetorSampahUncheckedUpdateManyWithoutNasabahNestedInput;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutNasabahNestedInput;
};
export type NasabahCreateManyInput = {
    id?: string;
    tenantId: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser: string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type NasabahUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NasabahUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NasabahNullableScalarRelationFilter = {
    is?: Prisma.NasabahWhereInput | null;
    isNot?: Prisma.NasabahWhereInput | null;
};
export type NasabahIdTenantIdCompoundUniqueInput = {
    id: string;
    tenantId: string;
};
export type NasabahIdUserTenantIdCompoundUniqueInput = {
    idUser: string;
    tenantId: string;
};
export type NasabahCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaNasabah?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    saldoPoin?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type NasabahAvgOrderByAggregateInput = {
    saldoPoin?: Prisma.SortOrder;
};
export type NasabahMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaNasabah?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    saldoPoin?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type NasabahMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaNasabah?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    saldoPoin?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type NasabahSumOrderByAggregateInput = {
    saldoPoin?: Prisma.SortOrder;
};
export type NasabahScalarRelationFilter = {
    is?: Prisma.NasabahWhereInput;
    isNot?: Prisma.NasabahWhereInput;
};
export type NasabahListRelationFilter = {
    every?: Prisma.NasabahWhereInput;
    some?: Prisma.NasabahWhereInput;
    none?: Prisma.NasabahWhereInput;
};
export type NasabahOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NasabahCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutUserInput, Prisma.NasabahUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutUserInput;
    connect?: Prisma.NasabahWhereUniqueInput;
};
export type NasabahUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutUserInput, Prisma.NasabahUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutUserInput;
    connect?: Prisma.NasabahWhereUniqueInput;
};
export type NasabahUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutUserInput, Prisma.NasabahUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutUserInput;
    upsert?: Prisma.NasabahUpsertWithoutUserInput;
    disconnect?: Prisma.NasabahWhereInput | boolean;
    delete?: Prisma.NasabahWhereInput | boolean;
    connect?: Prisma.NasabahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NasabahUpdateToOneWithWhereWithoutUserInput, Prisma.NasabahUpdateWithoutUserInput>, Prisma.NasabahUncheckedUpdateWithoutUserInput>;
};
export type NasabahUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutUserInput, Prisma.NasabahUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutUserInput;
    upsert?: Prisma.NasabahUpsertWithoutUserInput;
    disconnect?: Prisma.NasabahWhereInput | boolean;
    delete?: Prisma.NasabahWhereInput | boolean;
    connect?: Prisma.NasabahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NasabahUpdateToOneWithWhereWithoutUserInput, Prisma.NasabahUpdateWithoutUserInput>, Prisma.NasabahUncheckedUpdateWithoutUserInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NasabahCreateNestedOneWithoutSetoranInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutSetoranInput, Prisma.NasabahUncheckedCreateWithoutSetoranInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutSetoranInput;
    connect?: Prisma.NasabahWhereUniqueInput;
};
export type NasabahUpdateOneRequiredWithoutSetoranNestedInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutSetoranInput, Prisma.NasabahUncheckedCreateWithoutSetoranInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutSetoranInput;
    upsert?: Prisma.NasabahUpsertWithoutSetoranInput;
    connect?: Prisma.NasabahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NasabahUpdateToOneWithWhereWithoutSetoranInput, Prisma.NasabahUpdateWithoutSetoranInput>, Prisma.NasabahUncheckedUpdateWithoutSetoranInput>;
};
export type NasabahCreateNestedOneWithoutPenukaranInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutPenukaranInput, Prisma.NasabahUncheckedCreateWithoutPenukaranInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutPenukaranInput;
    connect?: Prisma.NasabahWhereUniqueInput;
};
export type NasabahUpdateOneRequiredWithoutPenukaranNestedInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutPenukaranInput, Prisma.NasabahUncheckedCreateWithoutPenukaranInput>;
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutPenukaranInput;
    upsert?: Prisma.NasabahUpsertWithoutPenukaranInput;
    connect?: Prisma.NasabahWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NasabahUpdateToOneWithWhereWithoutPenukaranInput, Prisma.NasabahUpdateWithoutPenukaranInput>, Prisma.NasabahUncheckedUpdateWithoutPenukaranInput>;
};
export type NasabahCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutTenantInput, Prisma.NasabahUncheckedCreateWithoutTenantInput> | Prisma.NasabahCreateWithoutTenantInput[] | Prisma.NasabahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutTenantInput | Prisma.NasabahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.NasabahCreateManyTenantInputEnvelope;
    connect?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
};
export type NasabahUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutTenantInput, Prisma.NasabahUncheckedCreateWithoutTenantInput> | Prisma.NasabahCreateWithoutTenantInput[] | Prisma.NasabahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutTenantInput | Prisma.NasabahCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.NasabahCreateManyTenantInputEnvelope;
    connect?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
};
export type NasabahUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutTenantInput, Prisma.NasabahUncheckedCreateWithoutTenantInput> | Prisma.NasabahCreateWithoutTenantInput[] | Prisma.NasabahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutTenantInput | Prisma.NasabahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.NasabahUpsertWithWhereUniqueWithoutTenantInput | Prisma.NasabahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.NasabahCreateManyTenantInputEnvelope;
    set?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    disconnect?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    delete?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    connect?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    update?: Prisma.NasabahUpdateWithWhereUniqueWithoutTenantInput | Prisma.NasabahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.NasabahUpdateManyWithWhereWithoutTenantInput | Prisma.NasabahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.NasabahScalarWhereInput | Prisma.NasabahScalarWhereInput[];
};
export type NasabahUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.NasabahCreateWithoutTenantInput, Prisma.NasabahUncheckedCreateWithoutTenantInput> | Prisma.NasabahCreateWithoutTenantInput[] | Prisma.NasabahUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.NasabahCreateOrConnectWithoutTenantInput | Prisma.NasabahCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.NasabahUpsertWithWhereUniqueWithoutTenantInput | Prisma.NasabahUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.NasabahCreateManyTenantInputEnvelope;
    set?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    disconnect?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    delete?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    connect?: Prisma.NasabahWhereUniqueInput | Prisma.NasabahWhereUniqueInput[];
    update?: Prisma.NasabahUpdateWithWhereUniqueWithoutTenantInput | Prisma.NasabahUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.NasabahUpdateManyWithWhereWithoutTenantInput | Prisma.NasabahUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.NasabahScalarWhereInput | Prisma.NasabahScalarWhereInput[];
};
export type NasabahCreateWithoutUserInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutNasabahsInput;
    setoran?: Prisma.SetorSampahCreateNestedManyWithoutNasabahInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutNasabahInput;
};
export type NasabahUncheckedCreateWithoutUserInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setoran?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutNasabahInput;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutNasabahInput;
};
export type NasabahCreateOrConnectWithoutUserInput = {
    where: Prisma.NasabahWhereUniqueInput;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutUserInput, Prisma.NasabahUncheckedCreateWithoutUserInput>;
};
export type NasabahUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.NasabahUpdateWithoutUserInput, Prisma.NasabahUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutUserInput, Prisma.NasabahUncheckedCreateWithoutUserInput>;
    where?: Prisma.NasabahWhereInput;
};
export type NasabahUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.NasabahWhereInput;
    data: Prisma.XOR<Prisma.NasabahUpdateWithoutUserInput, Prisma.NasabahUncheckedUpdateWithoutUserInput>;
};
export type NasabahUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutNasabahsNestedInput;
    setoran?: Prisma.SetorSampahUpdateManyWithoutNasabahNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutNasabahNestedInput;
};
export type NasabahUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setoran?: Prisma.SetorSampahUncheckedUpdateManyWithoutNasabahNestedInput;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutNasabahNestedInput;
};
export type NasabahCreateWithoutSetoranInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutNasabahsInput;
    user: Prisma.UserCreateNestedOneWithoutNasabahInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutNasabahInput;
};
export type NasabahUncheckedCreateWithoutSetoranInput = {
    id?: string;
    tenantId: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser: string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutNasabahInput;
};
export type NasabahCreateOrConnectWithoutSetoranInput = {
    where: Prisma.NasabahWhereUniqueInput;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutSetoranInput, Prisma.NasabahUncheckedCreateWithoutSetoranInput>;
};
export type NasabahUpsertWithoutSetoranInput = {
    update: Prisma.XOR<Prisma.NasabahUpdateWithoutSetoranInput, Prisma.NasabahUncheckedUpdateWithoutSetoranInput>;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutSetoranInput, Prisma.NasabahUncheckedCreateWithoutSetoranInput>;
    where?: Prisma.NasabahWhereInput;
};
export type NasabahUpdateToOneWithWhereWithoutSetoranInput = {
    where?: Prisma.NasabahWhereInput;
    data: Prisma.XOR<Prisma.NasabahUpdateWithoutSetoranInput, Prisma.NasabahUncheckedUpdateWithoutSetoranInput>;
};
export type NasabahUpdateWithoutSetoranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutNasabahsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutNasabahNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutNasabahNestedInput;
};
export type NasabahUncheckedUpdateWithoutSetoranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutNasabahNestedInput;
};
export type NasabahCreateWithoutPenukaranInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutNasabahsInput;
    user: Prisma.UserCreateNestedOneWithoutNasabahInput;
    setoran?: Prisma.SetorSampahCreateNestedManyWithoutNasabahInput;
};
export type NasabahUncheckedCreateWithoutPenukaranInput = {
    id?: string;
    tenantId: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser: string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setoran?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutNasabahInput;
};
export type NasabahCreateOrConnectWithoutPenukaranInput = {
    where: Prisma.NasabahWhereUniqueInput;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutPenukaranInput, Prisma.NasabahUncheckedCreateWithoutPenukaranInput>;
};
export type NasabahUpsertWithoutPenukaranInput = {
    update: Prisma.XOR<Prisma.NasabahUpdateWithoutPenukaranInput, Prisma.NasabahUncheckedUpdateWithoutPenukaranInput>;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutPenukaranInput, Prisma.NasabahUncheckedCreateWithoutPenukaranInput>;
    where?: Prisma.NasabahWhereInput;
};
export type NasabahUpdateToOneWithWhereWithoutPenukaranInput = {
    where?: Prisma.NasabahWhereInput;
    data: Prisma.XOR<Prisma.NasabahUpdateWithoutPenukaranInput, Prisma.NasabahUncheckedUpdateWithoutPenukaranInput>;
};
export type NasabahUpdateWithoutPenukaranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutNasabahsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutNasabahNestedInput;
    setoran?: Prisma.SetorSampahUpdateManyWithoutNasabahNestedInput;
};
export type NasabahUncheckedUpdateWithoutPenukaranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setoran?: Prisma.SetorSampahUncheckedUpdateManyWithoutNasabahNestedInput;
};
export type NasabahCreateWithoutTenantInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutNasabahInput;
    setoran?: Prisma.SetorSampahCreateNestedManyWithoutNasabahInput;
    penukaran?: Prisma.PenukaranPoinCreateNestedManyWithoutNasabahInput;
};
export type NasabahUncheckedCreateWithoutTenantInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser: string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setoran?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutNasabahInput;
    penukaran?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutNasabahInput;
};
export type NasabahCreateOrConnectWithoutTenantInput = {
    where: Prisma.NasabahWhereUniqueInput;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutTenantInput, Prisma.NasabahUncheckedCreateWithoutTenantInput>;
};
export type NasabahCreateManyTenantInputEnvelope = {
    data: Prisma.NasabahCreateManyTenantInput | Prisma.NasabahCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type NasabahUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.NasabahWhereUniqueInput;
    update: Prisma.XOR<Prisma.NasabahUpdateWithoutTenantInput, Prisma.NasabahUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.NasabahCreateWithoutTenantInput, Prisma.NasabahUncheckedCreateWithoutTenantInput>;
};
export type NasabahUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.NasabahWhereUniqueInput;
    data: Prisma.XOR<Prisma.NasabahUpdateWithoutTenantInput, Prisma.NasabahUncheckedUpdateWithoutTenantInput>;
};
export type NasabahUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.NasabahScalarWhereInput;
    data: Prisma.XOR<Prisma.NasabahUpdateManyMutationInput, Prisma.NasabahUncheckedUpdateManyWithoutTenantInput>;
};
export type NasabahScalarWhereInput = {
    AND?: Prisma.NasabahScalarWhereInput | Prisma.NasabahScalarWhereInput[];
    OR?: Prisma.NasabahScalarWhereInput[];
    NOT?: Prisma.NasabahScalarWhereInput | Prisma.NasabahScalarWhereInput[];
    id?: Prisma.UuidFilter<"Nasabah"> | string;
    tenantId?: Prisma.UuidFilter<"Nasabah"> | string;
    namaNasabah?: Prisma.StringFilter<"Nasabah"> | string;
    alamat?: Prisma.StringNullableFilter<"Nasabah"> | string | null;
    telp?: Prisma.StringFilter<"Nasabah"> | string;
    saldoPoin?: Prisma.DecimalFilter<"Nasabah"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.UuidFilter<"Nasabah"> | string;
    foto?: Prisma.StringNullableFilter<"Nasabah"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Nasabah"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Nasabah"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Nasabah"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Nasabah"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Nasabah"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Nasabah"> | string | null;
};
export type NasabahCreateManyTenantInput = {
    id?: string;
    namaNasabah: string;
    alamat?: string | null;
    telp: string;
    saldoPoin?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser: string;
    foto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type NasabahUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutNasabahNestedInput;
    setoran?: Prisma.SetorSampahUpdateManyWithoutNasabahNestedInput;
    penukaran?: Prisma.PenukaranPoinUpdateManyWithoutNasabahNestedInput;
};
export type NasabahUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setoran?: Prisma.SetorSampahUncheckedUpdateManyWithoutNasabahNestedInput;
    penukaran?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutNasabahNestedInput;
};
export type NasabahUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaNasabah?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    saldoPoin?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type NasabahCountOutputType = {
    setoran: number;
    penukaran: number;
};
export type NasabahCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    setoran?: boolean | NasabahCountOutputTypeCountSetoranArgs;
    penukaran?: boolean | NasabahCountOutputTypeCountPenukaranArgs;
};
export type NasabahCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahCountOutputTypeSelect<ExtArgs> | null;
};
export type NasabahCountOutputTypeCountSetoranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorSampahWhereInput;
};
export type NasabahCountOutputTypeCountPenukaranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenukaranPoinWhereInput;
};
export type NasabahSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaNasabah?: boolean;
    alamat?: boolean;
    telp?: boolean;
    saldoPoin?: boolean;
    idUser?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    setoran?: boolean | Prisma.Nasabah$setoranArgs<ExtArgs>;
    penukaran?: boolean | Prisma.Nasabah$penukaranArgs<ExtArgs>;
    _count?: boolean | Prisma.NasabahCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nasabah"]>;
export type NasabahSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaNasabah?: boolean;
    alamat?: boolean;
    telp?: boolean;
    saldoPoin?: boolean;
    idUser?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nasabah"]>;
export type NasabahSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaNasabah?: boolean;
    alamat?: boolean;
    telp?: boolean;
    saldoPoin?: boolean;
    idUser?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nasabah"]>;
export type NasabahSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    namaNasabah?: boolean;
    alamat?: boolean;
    telp?: boolean;
    saldoPoin?: boolean;
    idUser?: boolean;
    foto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type NasabahOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "namaNasabah" | "alamat" | "telp" | "saldoPoin" | "idUser" | "foto" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["nasabah"]>;
export type NasabahInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    setoran?: boolean | Prisma.Nasabah$setoranArgs<ExtArgs>;
    penukaran?: boolean | Prisma.Nasabah$penukaranArgs<ExtArgs>;
    _count?: boolean | Prisma.NasabahCountOutputTypeDefaultArgs<ExtArgs>;
};
export type NasabahIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type NasabahIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $NasabahPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Nasabah";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        setoran: Prisma.$SetorSampahPayload<ExtArgs>[];
        penukaran: Prisma.$PenukaranPoinPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        namaNasabah: string;
        alamat: string | null;
        telp: string;
        saldoPoin: runtime.Decimal;
        idUser: string;
        foto: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["nasabah"]>;
    composites: {};
};
export type NasabahGetPayload<S extends boolean | null | undefined | NasabahDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NasabahPayload, S>;
export type NasabahCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NasabahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NasabahCountAggregateInputType | true;
};
export interface NasabahDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Nasabah'];
        meta: {
            name: 'Nasabah';
        };
    };
    findUnique<T extends NasabahFindUniqueArgs>(args: Prisma.SelectSubset<T, NasabahFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NasabahFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NasabahFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NasabahFindFirstArgs>(args?: Prisma.SelectSubset<T, NasabahFindFirstArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NasabahFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NasabahFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NasabahFindManyArgs>(args?: Prisma.SelectSubset<T, NasabahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NasabahCreateArgs>(args: Prisma.SelectSubset<T, NasabahCreateArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NasabahCreateManyArgs>(args?: Prisma.SelectSubset<T, NasabahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NasabahCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NasabahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NasabahDeleteArgs>(args: Prisma.SelectSubset<T, NasabahDeleteArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NasabahUpdateArgs>(args: Prisma.SelectSubset<T, NasabahUpdateArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NasabahDeleteManyArgs>(args?: Prisma.SelectSubset<T, NasabahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NasabahUpdateManyArgs>(args: Prisma.SelectSubset<T, NasabahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NasabahUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NasabahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NasabahUpsertArgs>(args: Prisma.SelectSubset<T, NasabahUpsertArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NasabahCountArgs>(args?: Prisma.Subset<T, NasabahCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NasabahCountAggregateOutputType> : number>;
    aggregate<T extends NasabahAggregateArgs>(args: Prisma.Subset<T, NasabahAggregateArgs>): Prisma.PrismaPromise<GetNasabahAggregateType<T>>;
    groupBy<T extends NasabahGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NasabahGroupByArgs['orderBy'];
    } : {
        orderBy?: NasabahGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NasabahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNasabahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NasabahFieldRefs;
}
export interface Prisma__NasabahClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    setoran<T extends Prisma.Nasabah$setoranArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Nasabah$setoranArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    penukaran<T extends Prisma.Nasabah$penukaranArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Nasabah$penukaranArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NasabahFieldRefs {
    readonly id: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly tenantId: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly namaNasabah: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly alamat: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly telp: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly saldoPoin: Prisma.FieldRef<"Nasabah", 'Decimal'>;
    readonly idUser: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly foto: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Nasabah", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Nasabah", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Nasabah", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"Nasabah", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"Nasabah", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"Nasabah", 'String'>;
}
export type NasabahFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where: Prisma.NasabahWhereUniqueInput;
};
export type NasabahFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where: Prisma.NasabahWhereUniqueInput;
};
export type NasabahFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where?: Prisma.NasabahWhereInput;
    orderBy?: Prisma.NasabahOrderByWithRelationInput | Prisma.NasabahOrderByWithRelationInput[];
    cursor?: Prisma.NasabahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NasabahScalarFieldEnum | Prisma.NasabahScalarFieldEnum[];
};
export type NasabahFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where?: Prisma.NasabahWhereInput;
    orderBy?: Prisma.NasabahOrderByWithRelationInput | Prisma.NasabahOrderByWithRelationInput[];
    cursor?: Prisma.NasabahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NasabahScalarFieldEnum | Prisma.NasabahScalarFieldEnum[];
};
export type NasabahFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where?: Prisma.NasabahWhereInput;
    orderBy?: Prisma.NasabahOrderByWithRelationInput | Prisma.NasabahOrderByWithRelationInput[];
    cursor?: Prisma.NasabahWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NasabahScalarFieldEnum | Prisma.NasabahScalarFieldEnum[];
};
export type NasabahCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NasabahCreateInput, Prisma.NasabahUncheckedCreateInput>;
};
export type NasabahCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NasabahCreateManyInput | Prisma.NasabahCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NasabahCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    data: Prisma.NasabahCreateManyInput | Prisma.NasabahCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NasabahIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NasabahUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NasabahUpdateInput, Prisma.NasabahUncheckedUpdateInput>;
    where: Prisma.NasabahWhereUniqueInput;
};
export type NasabahUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NasabahUpdateManyMutationInput, Prisma.NasabahUncheckedUpdateManyInput>;
    where?: Prisma.NasabahWhereInput;
    limit?: number;
};
export type NasabahUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NasabahUpdateManyMutationInput, Prisma.NasabahUncheckedUpdateManyInput>;
    where?: Prisma.NasabahWhereInput;
    limit?: number;
    include?: Prisma.NasabahIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NasabahUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where: Prisma.NasabahWhereUniqueInput;
    create: Prisma.XOR<Prisma.NasabahCreateInput, Prisma.NasabahUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NasabahUpdateInput, Prisma.NasabahUncheckedUpdateInput>;
};
export type NasabahDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where: Prisma.NasabahWhereUniqueInput;
};
export type NasabahDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NasabahWhereInput;
    limit?: number;
};
export type Nasabah$setoranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Nasabah$penukaranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NasabahDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
};
