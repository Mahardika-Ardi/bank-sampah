import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    username: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    username: string | null;
    password: string | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    tenantId: number;
    username: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    username?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    username?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    username?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    tenantId: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    tenantId?: Prisma.UuidFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"User"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"User"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    adminBank?: Prisma.XOR<Prisma.AdminBankNullableScalarRelationFilter, Prisma.AdminBankWhereInput> | null;
    nasabah?: Prisma.XOR<Prisma.NasabahNullableScalarRelationFilter, Prisma.NasabahWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    adminBank?: Prisma.AdminBankOrderByWithRelationInput;
    nasabah?: Prisma.NasabahOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenantId_username?: Prisma.UserTenantIdUsernameCompoundUniqueInput;
    id_tenantId?: Prisma.UserIdTenantIdCompoundUniqueInput;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    tenantId?: Prisma.UuidFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"User"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"User"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    adminBank?: Prisma.XOR<Prisma.AdminBankNullableScalarRelationFilter, Prisma.AdminBankWhereInput> | null;
    nasabah?: Prisma.XOR<Prisma.NasabahNullableScalarRelationFilter, Prisma.NasabahWhereInput> | null;
}, "id" | "tenantId_username" | "id_tenantId">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    tenantId?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"User"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"User"> | string | null;
};
export type UserCreateInput = {
    id?: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutUsersInput;
    adminBank?: Prisma.AdminBankCreateNestedOneWithoutUserInput;
    nasabah?: Prisma.NasabahCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    adminBank?: Prisma.AdminBankUncheckedCreateNestedOneWithoutUserInput;
    nasabah?: Prisma.NasabahUncheckedCreateNestedOneWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput;
    adminBank?: Prisma.AdminBankUpdateOneWithoutUserNestedInput;
    nasabah?: Prisma.NasabahUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminBank?: Prisma.AdminBankUncheckedUpdateOneWithoutUserNestedInput;
    nasabah?: Prisma.NasabahUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    tenantId: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserTenantIdUsernameCompoundUniqueInput = {
    tenantId: string;
    username: string;
};
export type UserIdTenantIdCompoundUniqueInput = {
    id: string;
    tenantId: string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type UserCreateNestedOneWithoutAdminBankInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminBankInput, Prisma.UserUncheckedCreateWithoutAdminBankInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminBankInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAdminBankNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminBankInput, Prisma.UserUncheckedCreateWithoutAdminBankInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminBankInput;
    upsert?: Prisma.UserUpsertWithoutAdminBankInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAdminBankInput, Prisma.UserUpdateWithoutAdminBankInput>, Prisma.UserUncheckedUpdateWithoutAdminBankInput>;
};
export type UserCreateNestedOneWithoutNasabahInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNasabahInput, Prisma.UserUncheckedCreateWithoutNasabahInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNasabahInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNasabahNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNasabahInput, Prisma.UserUncheckedCreateWithoutNasabahInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNasabahInput;
    upsert?: Prisma.UserUpsertWithoutNasabahInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNasabahInput, Prisma.UserUpdateWithoutNasabahInput>, Prisma.UserUncheckedUpdateWithoutNasabahInput>;
};
export type UserCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTenantInput | Prisma.UserUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutTenantInput | Prisma.UserUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutTenantInput | Prisma.UserUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput> | Prisma.UserCreateWithoutTenantInput[] | Prisma.UserUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTenantInput | Prisma.UserCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutTenantInput | Prisma.UserUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.UserCreateManyTenantInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutTenantInput | Prisma.UserUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutTenantInput | Prisma.UserUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateWithoutAdminBankInput = {
    id?: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutUsersInput;
    nasabah?: Prisma.NasabahCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutAdminBankInput = {
    id?: string;
    tenantId: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    nasabah?: Prisma.NasabahUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutAdminBankInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminBankInput, Prisma.UserUncheckedCreateWithoutAdminBankInput>;
};
export type UserUpsertWithoutAdminBankInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAdminBankInput, Prisma.UserUncheckedUpdateWithoutAdminBankInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminBankInput, Prisma.UserUncheckedCreateWithoutAdminBankInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAdminBankInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAdminBankInput, Prisma.UserUncheckedUpdateWithoutAdminBankInput>;
};
export type UserUpdateWithoutAdminBankInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput;
    nasabah?: Prisma.NasabahUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAdminBankInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nasabah?: Prisma.NasabahUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutNasabahInput = {
    id?: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutUsersInput;
    adminBank?: Prisma.AdminBankCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutNasabahInput = {
    id?: string;
    tenantId: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    adminBank?: Prisma.AdminBankUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutNasabahInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNasabahInput, Prisma.UserUncheckedCreateWithoutNasabahInput>;
};
export type UserUpsertWithoutNasabahInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNasabahInput, Prisma.UserUncheckedUpdateWithoutNasabahInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNasabahInput, Prisma.UserUncheckedCreateWithoutNasabahInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNasabahInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNasabahInput, Prisma.UserUncheckedUpdateWithoutNasabahInput>;
};
export type UserUpdateWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutUsersNestedInput;
    adminBank?: Prisma.AdminBankUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNasabahInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminBank?: Prisma.AdminBankUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutTenantInput = {
    id?: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    adminBank?: Prisma.AdminBankCreateNestedOneWithoutUserInput;
    nasabah?: Prisma.NasabahCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutTenantInput = {
    id?: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    adminBank?: Prisma.AdminBankUncheckedCreateNestedOneWithoutUserInput;
    nasabah?: Prisma.NasabahUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutTenantInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput>;
};
export type UserCreateManyTenantInputEnvelope = {
    data: Prisma.UserCreateManyTenantInput | Prisma.UserCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutTenantInput, Prisma.UserUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTenantInput, Prisma.UserUncheckedCreateWithoutTenantInput>;
};
export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTenantInput, Prisma.UserUncheckedUpdateWithoutTenantInput>;
};
export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutTenantInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    tenantId?: Prisma.UuidFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"User"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"User"> | string | null;
};
export type UserCreateManyTenantInput = {
    id?: string;
    username: string;
    password: string;
    role: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type UserUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminBank?: Prisma.AdminBankUpdateOneWithoutUserNestedInput;
    nasabah?: Prisma.NasabahUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminBank?: Prisma.AdminBankUncheckedUpdateOneWithoutUserNestedInput;
    nasabah?: Prisma.NasabahUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    username?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    adminBank?: boolean | Prisma.User$adminBankArgs<ExtArgs>;
    nasabah?: boolean | Prisma.User$nasabahArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    username?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    username?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    username?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "username" | "password" | "role" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    adminBank?: boolean | Prisma.User$adminBankArgs<ExtArgs>;
    nasabah?: boolean | Prisma.User$nasabahArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        adminBank: Prisma.$AdminBankPayload<ExtArgs> | null;
        nasabah: Prisma.$NasabahPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        username: string;
        password: string;
        role: $Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    adminBank<T extends Prisma.User$adminBankArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$adminBankArgs<ExtArgs>>): Prisma.Prisma__AdminBankClient<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    nasabah<T extends Prisma.User$nasabahArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$nasabahArgs<ExtArgs>>): Prisma.Prisma__NasabahClient<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly tenantId: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"User", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"User", 'String'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$adminBankArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminBankSelect<ExtArgs> | null;
    omit?: Prisma.AdminBankOmit<ExtArgs> | null;
    include?: Prisma.AdminBankInclude<ExtArgs> | null;
    where?: Prisma.AdminBankWhereInput;
};
export type User$nasabahArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NasabahSelect<ExtArgs> | null;
    omit?: Prisma.NasabahOmit<ExtArgs> | null;
    include?: Prisma.NasabahInclude<ExtArgs> | null;
    where?: Prisma.NasabahWhereInput;
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
