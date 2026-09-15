import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminBankModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminBankPayload>;
export type AggregateAdminBank = {
    _count: AdminBankCountAggregateOutputType | null;
    _min: AdminBankMinAggregateOutputType | null;
    _max: AdminBankMaxAggregateOutputType | null;
};
export type AdminBankMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaUnit: string | null;
    namaPengelola: string | null;
    telp: string | null;
    idUser: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type AdminBankMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    namaUnit: string | null;
    namaPengelola: string | null;
    telp: string | null;
    idUser: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type AdminBankCountAggregateOutputType = {
    id: number;
    tenantId: number;
    namaUnit: number;
    namaPengelola: number;
    telp: number;
    idUser: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type AdminBankMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaUnit?: true;
    namaPengelola?: true;
    telp?: true;
    idUser?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type AdminBankMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaUnit?: true;
    namaPengelola?: true;
    telp?: true;
    idUser?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type AdminBankCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    namaUnit?: true;
    namaPengelola?: true;
    telp?: true;
    idUser?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type AdminBankAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminBankWhereInput;
    orderBy?: Prisma.AdminBankOrderByWithRelationInput | Prisma.AdminBankOrderByWithRelationInput[];
    cursor?: Prisma.AdminBankWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminBankCountAggregateInputType;
    _min?: AdminBankMinAggregateInputType;
    _max?: AdminBankMaxAggregateInputType;
};
export type GetAdminBankAggregateType<T extends AdminBankAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminBank]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminBank[P]> : Prisma.GetScalarType<T[P], AggregateAdminBank[P]>;
};
export type AdminBankGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminBankWhereInput;
    orderBy?: Prisma.AdminBankOrderByWithAggregationInput | Prisma.AdminBankOrderByWithAggregationInput[];
    by: Prisma.AdminBankScalarFieldEnum[] | Prisma.AdminBankScalarFieldEnum;
    having?: Prisma.AdminBankScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminBankCountAggregateInputType | true;
    _min?: AdminBankMinAggregateInputType;
    _max?: AdminBankMaxAggregateInputType;
};
export type AdminBankGroupByOutputType = {
    id: string;
    tenantId: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    idUser: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: AdminBankCountAggregateOutputType | null;
    _min: AdminBankMinAggregateOutputType | null;
    _max: AdminBankMaxAggregateOutputType | null;
};
export type GetAdminBankGroupByPayload<T extends AdminBankGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminBankGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminBankGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminBankGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminBankGroupByOutputType[P]>;
}>>;
export type AdminBankWhereInput = {
    AND?: Prisma.AdminBankWhereInput | Prisma.AdminBankWhereInput[];
    OR?: Prisma.AdminBankWhereInput[];
    NOT?: Prisma.AdminBankWhereInput | Prisma.AdminBankWhereInput[];
    id?: Prisma.UuidFilter<"AdminBank"> | string;
    tenantId?: Prisma.UuidFilter<"AdminBank"> | string;
    namaUnit?: Prisma.StringFilter<"AdminBank"> | string;
    namaPengelola?: Prisma.StringFilter<"AdminBank"> | string;
    telp?: Prisma.StringFilter<"AdminBank"> | string;
    idUser?: Prisma.UuidFilter<"AdminBank"> | string;
    createdAt?: Prisma.DateTimeFilter<"AdminBank"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminBank"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"AdminBank"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"AdminBank"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"AdminBank"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"AdminBank"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    setoran?: Prisma.SetorSampahListRelationFilter;
};
export type AdminBankOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaUnit?: Prisma.SortOrder;
    namaPengelola?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    setoran?: Prisma.SetorSampahOrderByRelationAggregateInput;
};
export type AdminBankWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idUser?: string;
    idUser_tenantId?: Prisma.AdminBankIdUserTenantIdCompoundUniqueInput;
    id_tenantId?: Prisma.AdminBankIdTenantIdCompoundUniqueInput;
    AND?: Prisma.AdminBankWhereInput | Prisma.AdminBankWhereInput[];
    OR?: Prisma.AdminBankWhereInput[];
    NOT?: Prisma.AdminBankWhereInput | Prisma.AdminBankWhereInput[];
    tenantId?: Prisma.UuidFilter<"AdminBank"> | string;
    namaUnit?: Prisma.StringFilter<"AdminBank"> | string;
    namaPengelola?: Prisma.StringFilter<"AdminBank"> | string;
    telp?: Prisma.StringFilter<"AdminBank"> | string;
    createdAt?: Prisma.DateTimeFilter<"AdminBank"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminBank"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"AdminBank"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"AdminBank"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"AdminBank"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"AdminBank"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    setoran?: Prisma.SetorSampahListRelationFilter;
}, "id" | "idUser" | "idUser_tenantId" | "id_tenantId">;
export type AdminBankOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaUnit?: Prisma.SortOrder;
    namaPengelola?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AdminBankCountOrderByAggregateInput;
    _max?: Prisma.AdminBankMaxOrderByAggregateInput;
    _min?: Prisma.AdminBankMinOrderByAggregateInput;
};
export type AdminBankScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminBankScalarWhereWithAggregatesInput | Prisma.AdminBankScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminBankScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminBankScalarWhereWithAggregatesInput | Prisma.AdminBankScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AdminBank"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"AdminBank"> | string;
    namaUnit?: Prisma.StringWithAggregatesFilter<"AdminBank"> | string;
    namaPengelola?: Prisma.StringWithAggregatesFilter<"AdminBank"> | string;
    telp?: Prisma.StringWithAggregatesFilter<"AdminBank"> | string;
    idUser?: Prisma.UuidWithAggregatesFilter<"AdminBank"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdminBank"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdminBank"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AdminBank"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"AdminBank"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AdminBank"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"AdminBank"> | string | null;
};
export type AdminBankCreateInput = {
    id?: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutAdminBanksInput;
    user: Prisma.UserCreateNestedOneWithoutAdminBankInput;
    setoran?: Prisma.SetorSampahCreateNestedManyWithoutAdminInput;
};
export type AdminBankUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    idUser: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setoran?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutAdminInput;
};
export type AdminBankUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutAdminBanksNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAdminBankNestedInput;
    setoran?: Prisma.SetorSampahUpdateManyWithoutAdminNestedInput;
};
export type AdminBankUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setoran?: Prisma.SetorSampahUncheckedUpdateManyWithoutAdminNestedInput;
};
export type AdminBankCreateManyInput = {
    id?: string;
    tenantId: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    idUser: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type AdminBankUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdminBankUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdminBankNullableScalarRelationFilter = {
    is?: Prisma.AdminBankWhereInput | null;
    isNot?: Prisma.AdminBankWhereInput | null;
};
export type AdminBankIdUserTenantIdCompoundUniqueInput = {
    idUser: string;
    tenantId: string;
};
export type AdminBankIdTenantIdCompoundUniqueInput = {
    id: string;
    tenantId: string;
};
export type AdminBankCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaUnit?: Prisma.SortOrder;
    namaPengelola?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type AdminBankMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaUnit?: Prisma.SortOrder;
    namaPengelola?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type AdminBankMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    namaUnit?: Prisma.SortOrder;
    namaPengelola?: Prisma.SortOrder;
    telp?: Prisma.SortOrder;
    idUser?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type AdminBankListRelationFilter = {
    every?: Prisma.AdminBankWhereInput;
    some?: Prisma.AdminBankWhereInput;
    none?: Prisma.AdminBankWhereInput;
};
export type AdminBankOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminBankCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutUserInput, Prisma.AdminBankUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutUserInput;
    connect?: Prisma.AdminBankWhereUniqueInput;
};
export type AdminBankUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutUserInput, Prisma.AdminBankUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutUserInput;
    connect?: Prisma.AdminBankWhereUniqueInput;
};
export type AdminBankUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutUserInput, Prisma.AdminBankUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AdminBankUpsertWithoutUserInput;
    disconnect?: Prisma.AdminBankWhereInput | boolean;
    delete?: Prisma.AdminBankWhereInput | boolean;
    connect?: Prisma.AdminBankWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminBankUpdateToOneWithWhereWithoutUserInput, Prisma.AdminBankUpdateWithoutUserInput>, Prisma.AdminBankUncheckedUpdateWithoutUserInput>;
};
export type AdminBankUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutUserInput, Prisma.AdminBankUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AdminBankUpsertWithoutUserInput;
    disconnect?: Prisma.AdminBankWhereInput | boolean;
    delete?: Prisma.AdminBankWhereInput | boolean;
    connect?: Prisma.AdminBankWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminBankUpdateToOneWithWhereWithoutUserInput, Prisma.AdminBankUpdateWithoutUserInput>, Prisma.AdminBankUncheckedUpdateWithoutUserInput>;
};
export type AdminBankCreateNestedOneWithoutSetoranInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutSetoranInput, Prisma.AdminBankUncheckedCreateWithoutSetoranInput>;
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutSetoranInput;
    connect?: Prisma.AdminBankWhereUniqueInput;
};
export type AdminBankUpdateOneWithoutSetoranNestedInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutSetoranInput, Prisma.AdminBankUncheckedCreateWithoutSetoranInput>;
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutSetoranInput;
    upsert?: Prisma.AdminBankUpsertWithoutSetoranInput;
    disconnect?: Prisma.AdminBankWhereInput | boolean;
    delete?: Prisma.AdminBankWhereInput | boolean;
    connect?: Prisma.AdminBankWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminBankUpdateToOneWithWhereWithoutSetoranInput, Prisma.AdminBankUpdateWithoutSetoranInput>, Prisma.AdminBankUncheckedUpdateWithoutSetoranInput>;
};
export type AdminBankCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutTenantInput, Prisma.AdminBankUncheckedCreateWithoutTenantInput> | Prisma.AdminBankCreateWithoutTenantInput[] | Prisma.AdminBankUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutTenantInput | Prisma.AdminBankCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.AdminBankCreateManyTenantInputEnvelope;
    connect?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
};
export type AdminBankUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutTenantInput, Prisma.AdminBankUncheckedCreateWithoutTenantInput> | Prisma.AdminBankCreateWithoutTenantInput[] | Prisma.AdminBankUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutTenantInput | Prisma.AdminBankCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.AdminBankCreateManyTenantInputEnvelope;
    connect?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
};
export type AdminBankUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutTenantInput, Prisma.AdminBankUncheckedCreateWithoutTenantInput> | Prisma.AdminBankCreateWithoutTenantInput[] | Prisma.AdminBankUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutTenantInput | Prisma.AdminBankCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.AdminBankUpsertWithWhereUniqueWithoutTenantInput | Prisma.AdminBankUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.AdminBankCreateManyTenantInputEnvelope;
    set?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    disconnect?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    delete?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    connect?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    update?: Prisma.AdminBankUpdateWithWhereUniqueWithoutTenantInput | Prisma.AdminBankUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.AdminBankUpdateManyWithWhereWithoutTenantInput | Prisma.AdminBankUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.AdminBankScalarWhereInput | Prisma.AdminBankScalarWhereInput[];
};
export type AdminBankUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.AdminBankCreateWithoutTenantInput, Prisma.AdminBankUncheckedCreateWithoutTenantInput> | Prisma.AdminBankCreateWithoutTenantInput[] | Prisma.AdminBankUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AdminBankCreateOrConnectWithoutTenantInput | Prisma.AdminBankCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.AdminBankUpsertWithWhereUniqueWithoutTenantInput | Prisma.AdminBankUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.AdminBankCreateManyTenantInputEnvelope;
    set?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    disconnect?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    delete?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    connect?: Prisma.AdminBankWhereUniqueInput | Prisma.AdminBankWhereUniqueInput[];
    update?: Prisma.AdminBankUpdateWithWhereUniqueWithoutTenantInput | Prisma.AdminBankUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.AdminBankUpdateManyWithWhereWithoutTenantInput | Prisma.AdminBankUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.AdminBankScalarWhereInput | Prisma.AdminBankScalarWhereInput[];
};
export type AdminBankCreateWithoutUserInput = {
    id?: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutAdminBanksInput;
    setoran?: Prisma.SetorSampahCreateNestedManyWithoutAdminInput;
};
export type AdminBankUncheckedCreateWithoutUserInput = {
    id?: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setoran?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutAdminInput;
};
export type AdminBankCreateOrConnectWithoutUserInput = {
    where: Prisma.AdminBankWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminBankCreateWithoutUserInput, Prisma.AdminBankUncheckedCreateWithoutUserInput>;
};
export type AdminBankUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.AdminBankUpdateWithoutUserInput, Prisma.AdminBankUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AdminBankCreateWithoutUserInput, Prisma.AdminBankUncheckedCreateWithoutUserInput>;
    where?: Prisma.AdminBankWhereInput;
};
export type AdminBankUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.AdminBankWhereInput;
    data: Prisma.XOR<Prisma.AdminBankUpdateWithoutUserInput, Prisma.AdminBankUncheckedUpdateWithoutUserInput>;
};
export type AdminBankUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutAdminBanksNestedInput;
    setoran?: Prisma.SetorSampahUpdateManyWithoutAdminNestedInput;
};
export type AdminBankUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setoran?: Prisma.SetorSampahUncheckedUpdateManyWithoutAdminNestedInput;
};
export type AdminBankCreateWithoutSetoranInput = {
    id?: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutAdminBanksInput;
    user: Prisma.UserCreateNestedOneWithoutAdminBankInput;
};
export type AdminBankUncheckedCreateWithoutSetoranInput = {
    id?: string;
    tenantId: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    idUser: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type AdminBankCreateOrConnectWithoutSetoranInput = {
    where: Prisma.AdminBankWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminBankCreateWithoutSetoranInput, Prisma.AdminBankUncheckedCreateWithoutSetoranInput>;
};
export type AdminBankUpsertWithoutSetoranInput = {
    update: Prisma.XOR<Prisma.AdminBankUpdateWithoutSetoranInput, Prisma.AdminBankUncheckedUpdateWithoutSetoranInput>;
    create: Prisma.XOR<Prisma.AdminBankCreateWithoutSetoranInput, Prisma.AdminBankUncheckedCreateWithoutSetoranInput>;
    where?: Prisma.AdminBankWhereInput;
};
export type AdminBankUpdateToOneWithWhereWithoutSetoranInput = {
    where?: Prisma.AdminBankWhereInput;
    data: Prisma.XOR<Prisma.AdminBankUpdateWithoutSetoranInput, Prisma.AdminBankUncheckedUpdateWithoutSetoranInput>;
};
export type AdminBankUpdateWithoutSetoranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutAdminBanksNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAdminBankNestedInput;
};
export type AdminBankUncheckedUpdateWithoutSetoranInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdminBankCreateWithoutTenantInput = {
    id?: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutAdminBankInput;
    setoran?: Prisma.SetorSampahCreateNestedManyWithoutAdminInput;
};
export type AdminBankUncheckedCreateWithoutTenantInput = {
    id?: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    idUser: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    setoran?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutAdminInput;
};
export type AdminBankCreateOrConnectWithoutTenantInput = {
    where: Prisma.AdminBankWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminBankCreateWithoutTenantInput, Prisma.AdminBankUncheckedCreateWithoutTenantInput>;
};
export type AdminBankCreateManyTenantInputEnvelope = {
    data: Prisma.AdminBankCreateManyTenantInput | Prisma.AdminBankCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type AdminBankUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.AdminBankWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminBankUpdateWithoutTenantInput, Prisma.AdminBankUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.AdminBankCreateWithoutTenantInput, Prisma.AdminBankUncheckedCreateWithoutTenantInput>;
};
export type AdminBankUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.AdminBankWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminBankUpdateWithoutTenantInput, Prisma.AdminBankUncheckedUpdateWithoutTenantInput>;
};
export type AdminBankUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.AdminBankScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminBankUpdateManyMutationInput, Prisma.AdminBankUncheckedUpdateManyWithoutTenantInput>;
};
export type AdminBankScalarWhereInput = {
    AND?: Prisma.AdminBankScalarWhereInput | Prisma.AdminBankScalarWhereInput[];
    OR?: Prisma.AdminBankScalarWhereInput[];
    NOT?: Prisma.AdminBankScalarWhereInput | Prisma.AdminBankScalarWhereInput[];
    id?: Prisma.UuidFilter<"AdminBank"> | string;
    tenantId?: Prisma.UuidFilter<"AdminBank"> | string;
    namaUnit?: Prisma.StringFilter<"AdminBank"> | string;
    namaPengelola?: Prisma.StringFilter<"AdminBank"> | string;
    telp?: Prisma.StringFilter<"AdminBank"> | string;
    idUser?: Prisma.UuidFilter<"AdminBank"> | string;
    createdAt?: Prisma.DateTimeFilter<"AdminBank"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminBank"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"AdminBank"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"AdminBank"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"AdminBank"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"AdminBank"> | string | null;
};
export type AdminBankCreateManyTenantInput = {
    id?: string;
    namaUnit: string;
    namaPengelola: string;
    telp: string;
    idUser: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type AdminBankUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAdminBankNestedInput;
    setoran?: Prisma.SetorSampahUpdateManyWithoutAdminNestedInput;
};
export type AdminBankUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setoran?: Prisma.SetorSampahUncheckedUpdateManyWithoutAdminNestedInput;
};
export type AdminBankUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    namaUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    namaPengelola?: Prisma.StringFieldUpdateOperationsInput | string;
    telp?: Prisma.StringFieldUpdateOperationsInput | string;
    idUser?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdminBankCountOutputType = {
    setoran: number;
};
export type AdminBankCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    setoran?: boolean | AdminBankCountOutputTypeCountSetoranArgs;
};
export type AdminBankCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankCountOutputTypeSelect<ExtArgs> | null;
};
export type AdminBankCountOutputTypeCountSetoranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorSampahWhereInput;
};
export type AdminBankSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaUnit?: boolean;
    namaPengelola?: boolean;
    telp?: boolean;
    idUser?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    setoran?: boolean | Prisma.AdminBank$setoranArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminBankCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminBank"]>;
export type AdminBankSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaUnit?: boolean;
    namaPengelola?: boolean;
    telp?: boolean;
    idUser?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminBank"]>;
export type AdminBankSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    namaUnit?: boolean;
    namaPengelola?: boolean;
    telp?: boolean;
    idUser?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminBank"]>;
export type AdminBankSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    namaUnit?: boolean;
    namaPengelola?: boolean;
    telp?: boolean;
    idUser?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type AdminBankOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "namaUnit" | "namaPengelola" | "telp" | "idUser" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["adminBank"]>;
export type AdminBankInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    setoran?: boolean | Prisma.AdminBank$setoranArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminBankCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdminBankIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AdminBankIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AdminBankPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminBank";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        setoran: Prisma.$SetorSampahPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        namaUnit: string;
        namaPengelola: string;
        telp: string;
        idUser: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["adminBank"]>;
    composites: {};
};
export type AdminBankGetPayload<S extends boolean | null | undefined | AdminBankDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminBankPayload, S>;
export type AdminBankCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminBankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminBankCountAggregateInputType | true;
};
export interface AdminBankDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminBank'];
        meta: {
            name: 'AdminBank';
        };
    };
    findUnique<T extends AdminBankFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminBankFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminBankFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminBankFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminBankFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminBankFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminBankFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminBankFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminBankFindManyArgs>(args?: Prisma.SelectSubset<T, AdminBankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminBankCreateArgs>(args: Prisma.SelectSubset<T, AdminBankCreateArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminBankCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminBankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminBankCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminBankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminBankDeleteArgs>(args: Prisma.SelectSubset<T, AdminBankDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminBankUpdateArgs>(args: Prisma.SelectSubset<T, AdminBankUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminBankDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminBankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminBankUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminBankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminBankUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminBankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminBankUpsertArgs>(args: Prisma.SelectSubset<T, AdminBankUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminBankCountArgs>(args?: Prisma.Subset<T, AdminBankCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminBankCountAggregateOutputType> : number>;
    aggregate<T extends AdminBankAggregateArgs>(args: Prisma.Subset<T, AdminBankAggregateArgs>): Prisma.PrismaPromise<GetAdminBankAggregateType<T>>;
    groupBy<T extends AdminBankGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminBankGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminBankGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminBankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminBankFieldRefs;
}
export interface Prisma__AdminBankClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    setoran<T extends Prisma.AdminBank$setoranArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminBank$setoranArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminBankFieldRefs {
    readonly id: Prisma.FieldRef<"AdminBank", 'String'>;
    readonly tenantId: Prisma.FieldRef<"AdminBank", 'String'>;
    readonly namaUnit: Prisma.FieldRef<"AdminBank", 'String'>;
    readonly namaPengelola: Prisma.FieldRef<"AdminBank", 'String'>;
    readonly telp: Prisma.FieldRef<"AdminBank", 'String'>;
    readonly idUser: Prisma.FieldRef<"AdminBank", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AdminBank", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AdminBank", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"AdminBank", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"AdminBank", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"AdminBank", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"AdminBank", 'String'>;
}
export type AdminBankFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where: Prisma.AdminBankWhereUniqueInput;
};
export type AdminBankFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where: Prisma.AdminBankWhereUniqueInput;
};
export type AdminBankFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where?: Prisma.AdminBankWhereInput;
    orderBy?: Prisma.AdminBankOrderByWithRelationInput | Prisma.AdminBankOrderByWithRelationInput[];
    cursor?: Prisma.AdminBankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminBankScalarFieldEnum | Prisma.AdminBankScalarFieldEnum[];
};
export type AdminBankFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where?: Prisma.AdminBankWhereInput;
    orderBy?: Prisma.AdminBankOrderByWithRelationInput | Prisma.AdminBankOrderByWithRelationInput[];
    cursor?: Prisma.AdminBankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminBankScalarFieldEnum | Prisma.AdminBankScalarFieldEnum[];
};
export type AdminBankFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where?: Prisma.AdminBankWhereInput;
    orderBy?: Prisma.AdminBankOrderByWithRelationInput | Prisma.AdminBankOrderByWithRelationInput[];
    cursor?: Prisma.AdminBankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminBankScalarFieldEnum | Prisma.AdminBankScalarFieldEnum[];
};
export type AdminBankCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminBankCreateInput, Prisma.AdminBankUncheckedCreateInput>;
};
export type AdminBankCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminBankCreateManyInput | Prisma.AdminBankCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminBankCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    data: Prisma.AdminBankCreateManyInput | Prisma.AdminBankCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdminBankIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdminBankUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminBankUpdateInput, Prisma.AdminBankUncheckedUpdateInput>;
    where: Prisma.AdminBankWhereUniqueInput;
};
export type AdminBankUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminBankUpdateManyMutationInput, Prisma.AdminBankUncheckedUpdateManyInput>;
    where?: Prisma.AdminBankWhereInput;
    limit?: number;
};
export type AdminBankUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminBankUpdateManyMutationInput, Prisma.AdminBankUncheckedUpdateManyInput>;
    where?: Prisma.AdminBankWhereInput;
    limit?: number;
    include?: Prisma.AdminBankIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdminBankUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where: Prisma.AdminBankWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminBankCreateInput, Prisma.AdminBankUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminBankUpdateInput, Prisma.AdminBankUncheckedUpdateInput>;
};
export type AdminBankDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where: Prisma.AdminBankWhereUniqueInput;
};
export type AdminBankDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminBankWhereInput;
    limit?: number;
};
export type AdminBank$setoranArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdminBankDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
};
