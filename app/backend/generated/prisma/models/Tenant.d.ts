import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TenantModel = runtime.Types.Result.DefaultSelection<Prisma.$TenantPayload>;
export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null;
    _min: TenantMinAggregateOutputType | null;
    _max: TenantMaxAggregateOutputType | null;
};
export type TenantMinAggregateOutputType = {
    id: string | null;
    appKey: string | null;
    name: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type TenantMaxAggregateOutputType = {
    id: string | null;
    appKey: string | null;
    name: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
};
export type TenantCountAggregateOutputType = {
    id: number;
    appKey: number;
    name: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    deletedBy: number;
    restoredAt: number;
    restoredBy: number;
    _all: number;
};
export type TenantMinAggregateInputType = {
    id?: true;
    appKey?: true;
    name?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type TenantMaxAggregateInputType = {
    id?: true;
    appKey?: true;
    name?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
};
export type TenantCountAggregateInputType = {
    id?: true;
    appKey?: true;
    name?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    deletedBy?: true;
    restoredAt?: true;
    restoredBy?: true;
    _all?: true;
};
export type TenantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TenantCountAggregateInputType;
    _min?: TenantMinAggregateInputType;
    _max?: TenantMaxAggregateInputType;
};
export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
    [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTenant[P]> : Prisma.GetScalarType<T[P], AggregateTenant[P]>;
};
export type TenantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithAggregationInput | Prisma.TenantOrderByWithAggregationInput[];
    by: Prisma.TenantScalarFieldEnum[] | Prisma.TenantScalarFieldEnum;
    having?: Prisma.TenantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TenantCountAggregateInputType | true;
    _min?: TenantMinAggregateInputType;
    _max?: TenantMaxAggregateInputType;
};
export type TenantGroupByOutputType = {
    id: string;
    appKey: string;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    deletedBy: string | null;
    restoredAt: Date | null;
    restoredBy: string | null;
    _count: TenantCountAggregateOutputType | null;
    _min: TenantMinAggregateOutputType | null;
    _max: TenantMaxAggregateOutputType | null;
};
export type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TenantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TenantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TenantGroupByOutputType[P]>;
}>>;
export type TenantWhereInput = {
    AND?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    OR?: Prisma.TenantWhereInput[];
    NOT?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    id?: Prisma.UuidFilter<"Tenant"> | string;
    appKey?: Prisma.StringFilter<"Tenant"> | string;
    name?: Prisma.StringFilter<"Tenant"> | string;
    isActive?: Prisma.BoolFilter<"Tenant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Tenant"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Tenant"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Tenant"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Tenant"> | string | null;
    users?: Prisma.UserListRelationFilter;
    adminBanks?: Prisma.AdminBankListRelationFilter;
    nasabahs?: Prisma.NasabahListRelationFilter;
    kategoriSampahs?: Prisma.KategoriSampahListRelationFilter;
    setorSampahs?: Prisma.SetorSampahListRelationFilter;
    detailSetors?: Prisma.DetailSetorListRelationFilter;
    hadiahs?: Prisma.HadiahListRelationFilter;
    penukaranPoins?: Prisma.PenukaranPoinListRelationFilter;
};
export type TenantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    appKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    adminBanks?: Prisma.AdminBankOrderByRelationAggregateInput;
    nasabahs?: Prisma.NasabahOrderByRelationAggregateInput;
    kategoriSampahs?: Prisma.KategoriSampahOrderByRelationAggregateInput;
    setorSampahs?: Prisma.SetorSampahOrderByRelationAggregateInput;
    detailSetors?: Prisma.DetailSetorOrderByRelationAggregateInput;
    hadiahs?: Prisma.HadiahOrderByRelationAggregateInput;
    penukaranPoins?: Prisma.PenukaranPoinOrderByRelationAggregateInput;
};
export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    appKey?: string;
    AND?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    OR?: Prisma.TenantWhereInput[];
    NOT?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    name?: Prisma.StringFilter<"Tenant"> | string;
    isActive?: Prisma.BoolFilter<"Tenant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Tenant"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"Tenant"> | string | null;
    restoredAt?: Prisma.DateTimeNullableFilter<"Tenant"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableFilter<"Tenant"> | string | null;
    users?: Prisma.UserListRelationFilter;
    adminBanks?: Prisma.AdminBankListRelationFilter;
    nasabahs?: Prisma.NasabahListRelationFilter;
    kategoriSampahs?: Prisma.KategoriSampahListRelationFilter;
    setorSampahs?: Prisma.SetorSampahListRelationFilter;
    detailSetors?: Prisma.DetailSetorListRelationFilter;
    hadiahs?: Prisma.HadiahListRelationFilter;
    penukaranPoins?: Prisma.PenukaranPoinListRelationFilter;
}, "id" | "appKey">;
export type TenantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    appKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    restoredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TenantCountOrderByAggregateInput;
    _max?: Prisma.TenantMaxOrderByAggregateInput;
    _min?: Prisma.TenantMinOrderByAggregateInput;
};
export type TenantScalarWhereWithAggregatesInput = {
    AND?: Prisma.TenantScalarWhereWithAggregatesInput | Prisma.TenantScalarWhereWithAggregatesInput[];
    OR?: Prisma.TenantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TenantScalarWhereWithAggregatesInput | Prisma.TenantScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Tenant"> | string;
    appKey?: Prisma.StringWithAggregatesFilter<"Tenant"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Tenant"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Tenant"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tenant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Tenant"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"Tenant"> | string | null;
    restoredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null;
    restoredBy?: Prisma.UuidNullableWithAggregatesFilter<"Tenant"> | string | null;
};
export type TenantCreateInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateManyInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
};
export type TenantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TenantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TenantScalarRelationFilter = {
    is?: Prisma.TenantWhereInput;
    isNot?: Prisma.TenantWhereInput;
};
export type TenantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type TenantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type TenantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    appKey?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
    restoredAt?: Prisma.SortOrder;
    restoredBy?: Prisma.SortOrder;
};
export type TenantCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutUsersInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.TenantUpsertWithoutUsersInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutUsersInput, Prisma.TenantUpdateWithoutUsersInput>, Prisma.TenantUncheckedUpdateWithoutUsersInput>;
};
export type TenantCreateNestedOneWithoutAdminBanksInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutAdminBanksInput, Prisma.TenantUncheckedCreateWithoutAdminBanksInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutAdminBanksInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutAdminBanksNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutAdminBanksInput, Prisma.TenantUncheckedCreateWithoutAdminBanksInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutAdminBanksInput;
    upsert?: Prisma.TenantUpsertWithoutAdminBanksInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutAdminBanksInput, Prisma.TenantUpdateWithoutAdminBanksInput>, Prisma.TenantUncheckedUpdateWithoutAdminBanksInput>;
};
export type TenantCreateNestedOneWithoutNasabahsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutNasabahsInput, Prisma.TenantUncheckedCreateWithoutNasabahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutNasabahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutNasabahsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutNasabahsInput, Prisma.TenantUncheckedCreateWithoutNasabahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutNasabahsInput;
    upsert?: Prisma.TenantUpsertWithoutNasabahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutNasabahsInput, Prisma.TenantUpdateWithoutNasabahsInput>, Prisma.TenantUncheckedUpdateWithoutNasabahsInput>;
};
export type TenantCreateNestedOneWithoutKategoriSampahsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutKategoriSampahsInput, Prisma.TenantUncheckedCreateWithoutKategoriSampahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutKategoriSampahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutKategoriSampahsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutKategoriSampahsInput, Prisma.TenantUncheckedCreateWithoutKategoriSampahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutKategoriSampahsInput;
    upsert?: Prisma.TenantUpsertWithoutKategoriSampahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutKategoriSampahsInput, Prisma.TenantUpdateWithoutKategoriSampahsInput>, Prisma.TenantUncheckedUpdateWithoutKategoriSampahsInput>;
};
export type TenantCreateNestedOneWithoutSetorSampahsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutSetorSampahsInput, Prisma.TenantUncheckedCreateWithoutSetorSampahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutSetorSampahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutSetorSampahsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutSetorSampahsInput, Prisma.TenantUncheckedCreateWithoutSetorSampahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutSetorSampahsInput;
    upsert?: Prisma.TenantUpsertWithoutSetorSampahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutSetorSampahsInput, Prisma.TenantUpdateWithoutSetorSampahsInput>, Prisma.TenantUncheckedUpdateWithoutSetorSampahsInput>;
};
export type TenantCreateNestedOneWithoutDetailSetorsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutDetailSetorsInput, Prisma.TenantUncheckedCreateWithoutDetailSetorsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutDetailSetorsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutDetailSetorsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutDetailSetorsInput, Prisma.TenantUncheckedCreateWithoutDetailSetorsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutDetailSetorsInput;
    upsert?: Prisma.TenantUpsertWithoutDetailSetorsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutDetailSetorsInput, Prisma.TenantUpdateWithoutDetailSetorsInput>, Prisma.TenantUncheckedUpdateWithoutDetailSetorsInput>;
};
export type TenantCreateNestedOneWithoutHadiahsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutHadiahsInput, Prisma.TenantUncheckedCreateWithoutHadiahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutHadiahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutHadiahsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutHadiahsInput, Prisma.TenantUncheckedCreateWithoutHadiahsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutHadiahsInput;
    upsert?: Prisma.TenantUpsertWithoutHadiahsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutHadiahsInput, Prisma.TenantUpdateWithoutHadiahsInput>, Prisma.TenantUncheckedUpdateWithoutHadiahsInput>;
};
export type TenantCreateNestedOneWithoutPenukaranPoinsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutPenukaranPoinsInput, Prisma.TenantUncheckedCreateWithoutPenukaranPoinsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutPenukaranPoinsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutPenukaranPoinsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutPenukaranPoinsInput, Prisma.TenantUncheckedCreateWithoutPenukaranPoinsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutPenukaranPoinsInput;
    upsert?: Prisma.TenantUpsertWithoutPenukaranPoinsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutPenukaranPoinsInput, Prisma.TenantUpdateWithoutPenukaranPoinsInput>, Prisma.TenantUncheckedUpdateWithoutPenukaranPoinsInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type TenantCreateWithoutUsersInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutUsersInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
};
export type TenantUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutUsersInput, Prisma.TenantUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutUsersInput, Prisma.TenantUncheckedUpdateWithoutUsersInput>;
};
export type TenantUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutAdminBanksInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutAdminBanksInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutAdminBanksInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutAdminBanksInput, Prisma.TenantUncheckedCreateWithoutAdminBanksInput>;
};
export type TenantUpsertWithoutAdminBanksInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutAdminBanksInput, Prisma.TenantUncheckedUpdateWithoutAdminBanksInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutAdminBanksInput, Prisma.TenantUncheckedCreateWithoutAdminBanksInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutAdminBanksInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutAdminBanksInput, Prisma.TenantUncheckedUpdateWithoutAdminBanksInput>;
};
export type TenantUpdateWithoutAdminBanksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutAdminBanksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutNasabahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutNasabahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutNasabahsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutNasabahsInput, Prisma.TenantUncheckedCreateWithoutNasabahsInput>;
};
export type TenantUpsertWithoutNasabahsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutNasabahsInput, Prisma.TenantUncheckedUpdateWithoutNasabahsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutNasabahsInput, Prisma.TenantUncheckedCreateWithoutNasabahsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutNasabahsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutNasabahsInput, Prisma.TenantUncheckedUpdateWithoutNasabahsInput>;
};
export type TenantUpdateWithoutNasabahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutNasabahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutKategoriSampahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutKategoriSampahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutKategoriSampahsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutKategoriSampahsInput, Prisma.TenantUncheckedCreateWithoutKategoriSampahsInput>;
};
export type TenantUpsertWithoutKategoriSampahsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutKategoriSampahsInput, Prisma.TenantUncheckedUpdateWithoutKategoriSampahsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutKategoriSampahsInput, Prisma.TenantUncheckedCreateWithoutKategoriSampahsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutKategoriSampahsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutKategoriSampahsInput, Prisma.TenantUncheckedUpdateWithoutKategoriSampahsInput>;
};
export type TenantUpdateWithoutKategoriSampahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutKategoriSampahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutSetorSampahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutSetorSampahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutSetorSampahsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutSetorSampahsInput, Prisma.TenantUncheckedCreateWithoutSetorSampahsInput>;
};
export type TenantUpsertWithoutSetorSampahsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutSetorSampahsInput, Prisma.TenantUncheckedUpdateWithoutSetorSampahsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutSetorSampahsInput, Prisma.TenantUncheckedCreateWithoutSetorSampahsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutSetorSampahsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutSetorSampahsInput, Prisma.TenantUncheckedUpdateWithoutSetorSampahsInput>;
};
export type TenantUpdateWithoutSetorSampahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutSetorSampahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutDetailSetorsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutDetailSetorsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutDetailSetorsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutDetailSetorsInput, Prisma.TenantUncheckedCreateWithoutDetailSetorsInput>;
};
export type TenantUpsertWithoutDetailSetorsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutDetailSetorsInput, Prisma.TenantUncheckedUpdateWithoutDetailSetorsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutDetailSetorsInput, Prisma.TenantUncheckedCreateWithoutDetailSetorsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutDetailSetorsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutDetailSetorsInput, Prisma.TenantUncheckedUpdateWithoutDetailSetorsInput>;
};
export type TenantUpdateWithoutDetailSetorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutDetailSetorsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutHadiahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutHadiahsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutHadiahsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutHadiahsInput, Prisma.TenantUncheckedCreateWithoutHadiahsInput>;
};
export type TenantUpsertWithoutHadiahsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutHadiahsInput, Prisma.TenantUncheckedUpdateWithoutHadiahsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutHadiahsInput, Prisma.TenantUncheckedCreateWithoutHadiahsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutHadiahsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutHadiahsInput, Prisma.TenantUncheckedUpdateWithoutHadiahsInput>;
};
export type TenantUpdateWithoutHadiahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutHadiahsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    penukaranPoins?: Prisma.PenukaranPoinUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutPenukaranPoinsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutPenukaranPoinsInput = {
    id?: string;
    appKey: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    restoredAt?: Date | string | null;
    restoredBy?: string | null;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    adminBanks?: Prisma.AdminBankUncheckedCreateNestedManyWithoutTenantInput;
    nasabahs?: Prisma.NasabahUncheckedCreateNestedManyWithoutTenantInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedCreateNestedManyWithoutTenantInput;
    setorSampahs?: Prisma.SetorSampahUncheckedCreateNestedManyWithoutTenantInput;
    detailSetors?: Prisma.DetailSetorUncheckedCreateNestedManyWithoutTenantInput;
    hadiahs?: Prisma.HadiahUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutPenukaranPoinsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutPenukaranPoinsInput, Prisma.TenantUncheckedCreateWithoutPenukaranPoinsInput>;
};
export type TenantUpsertWithoutPenukaranPoinsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutPenukaranPoinsInput, Prisma.TenantUncheckedUpdateWithoutPenukaranPoinsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutPenukaranPoinsInput, Prisma.TenantUncheckedCreateWithoutPenukaranPoinsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutPenukaranPoinsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutPenukaranPoinsInput, Prisma.TenantUncheckedUpdateWithoutPenukaranPoinsInput>;
};
export type TenantUpdateWithoutPenukaranPoinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutPenukaranPoinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    appKey?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    restoredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    restoredBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    adminBanks?: Prisma.AdminBankUncheckedUpdateManyWithoutTenantNestedInput;
    nasabahs?: Prisma.NasabahUncheckedUpdateManyWithoutTenantNestedInput;
    kategoriSampahs?: Prisma.KategoriSampahUncheckedUpdateManyWithoutTenantNestedInput;
    setorSampahs?: Prisma.SetorSampahUncheckedUpdateManyWithoutTenantNestedInput;
    detailSetors?: Prisma.DetailSetorUncheckedUpdateManyWithoutTenantNestedInput;
    hadiahs?: Prisma.HadiahUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCountOutputType = {
    users: number;
    adminBanks: number;
    nasabahs: number;
    kategoriSampahs: number;
    setorSampahs: number;
    detailSetors: number;
    hadiahs: number;
    penukaranPoins: number;
};
export type TenantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs;
    adminBanks?: boolean | TenantCountOutputTypeCountAdminBanksArgs;
    nasabahs?: boolean | TenantCountOutputTypeCountNasabahsArgs;
    kategoriSampahs?: boolean | TenantCountOutputTypeCountKategoriSampahsArgs;
    setorSampahs?: boolean | TenantCountOutputTypeCountSetorSampahsArgs;
    detailSetors?: boolean | TenantCountOutputTypeCountDetailSetorsArgs;
    hadiahs?: boolean | TenantCountOutputTypeCountHadiahsArgs;
    penukaranPoins?: boolean | TenantCountOutputTypeCountPenukaranPoinsArgs;
};
export type TenantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantCountOutputTypeSelect<ExtArgs> | null;
};
export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type TenantCountOutputTypeCountAdminBanksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminBankWhereInput;
};
export type TenantCountOutputTypeCountNasabahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NasabahWhereInput;
};
export type TenantCountOutputTypeCountKategoriSampahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KategoriSampahWhereInput;
};
export type TenantCountOutputTypeCountSetorSampahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetorSampahWhereInput;
};
export type TenantCountOutputTypeCountDetailSetorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetailSetorWhereInput;
};
export type TenantCountOutputTypeCountHadiahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HadiahWhereInput;
};
export type TenantCountOutputTypeCountPenukaranPoinsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PenukaranPoinWhereInput;
};
export type TenantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appKey?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
    users?: boolean | Prisma.Tenant$usersArgs<ExtArgs>;
    adminBanks?: boolean | Prisma.Tenant$adminBanksArgs<ExtArgs>;
    nasabahs?: boolean | Prisma.Tenant$nasabahsArgs<ExtArgs>;
    kategoriSampahs?: boolean | Prisma.Tenant$kategoriSampahsArgs<ExtArgs>;
    setorSampahs?: boolean | Prisma.Tenant$setorSampahsArgs<ExtArgs>;
    detailSetors?: boolean | Prisma.Tenant$detailSetorsArgs<ExtArgs>;
    hadiahs?: boolean | Prisma.Tenant$hadiahsArgs<ExtArgs>;
    penukaranPoins?: boolean | Prisma.Tenant$penukaranPoinsArgs<ExtArgs>;
    _count?: boolean | Prisma.TenantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tenant"]>;
export type TenantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appKey?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
}, ExtArgs["result"]["tenant"]>;
export type TenantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    appKey?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
}, ExtArgs["result"]["tenant"]>;
export type TenantSelectScalar = {
    id?: boolean;
    appKey?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    restoredAt?: boolean;
    restoredBy?: boolean;
};
export type TenantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "appKey" | "name" | "isActive" | "createdAt" | "updatedAt" | "deletedAt" | "deletedBy" | "restoredAt" | "restoredBy", ExtArgs["result"]["tenant"]>;
export type TenantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Tenant$usersArgs<ExtArgs>;
    adminBanks?: boolean | Prisma.Tenant$adminBanksArgs<ExtArgs>;
    nasabahs?: boolean | Prisma.Tenant$nasabahsArgs<ExtArgs>;
    kategoriSampahs?: boolean | Prisma.Tenant$kategoriSampahsArgs<ExtArgs>;
    setorSampahs?: boolean | Prisma.Tenant$setorSampahsArgs<ExtArgs>;
    detailSetors?: boolean | Prisma.Tenant$detailSetorsArgs<ExtArgs>;
    hadiahs?: boolean | Prisma.Tenant$hadiahsArgs<ExtArgs>;
    penukaranPoins?: boolean | Prisma.Tenant$penukaranPoinsArgs<ExtArgs>;
    _count?: boolean | Prisma.TenantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TenantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TenantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TenantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tenant";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        adminBanks: Prisma.$AdminBankPayload<ExtArgs>[];
        nasabahs: Prisma.$NasabahPayload<ExtArgs>[];
        kategoriSampahs: Prisma.$KategoriSampahPayload<ExtArgs>[];
        setorSampahs: Prisma.$SetorSampahPayload<ExtArgs>[];
        detailSetors: Prisma.$DetailSetorPayload<ExtArgs>[];
        hadiahs: Prisma.$HadiahPayload<ExtArgs>[];
        penukaranPoins: Prisma.$PenukaranPoinPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        appKey: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        restoredAt: Date | null;
        restoredBy: string | null;
    }, ExtArgs["result"]["tenant"]>;
    composites: {};
};
export type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TenantPayload, S>;
export type TenantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TenantCountAggregateInputType | true;
};
export interface TenantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tenant'];
        meta: {
            name: 'Tenant';
        };
    };
    findUnique<T extends TenantFindUniqueArgs>(args: Prisma.SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TenantFindFirstArgs>(args?: Prisma.SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TenantFindManyArgs>(args?: Prisma.SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TenantCreateArgs>(args: Prisma.SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TenantCreateManyArgs>(args?: Prisma.SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TenantDeleteArgs>(args: Prisma.SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TenantUpdateArgs>(args: Prisma.SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TenantDeleteManyArgs>(args?: Prisma.SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TenantUpdateManyArgs>(args: Prisma.SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TenantUpsertArgs>(args: Prisma.SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TenantCountArgs>(args?: Prisma.Subset<T, TenantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TenantCountAggregateOutputType> : number>;
    aggregate<T extends TenantAggregateArgs>(args: Prisma.Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>;
    groupBy<T extends TenantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TenantGroupByArgs['orderBy'];
    } : {
        orderBy?: TenantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TenantFieldRefs;
}
export interface Prisma__TenantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Tenant$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    adminBanks<T extends Prisma.Tenant$adminBanksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$adminBanksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    nasabahs<T extends Prisma.Tenant$nasabahsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$nasabahsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NasabahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    kategoriSampahs<T extends Prisma.Tenant$kategoriSampahsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$kategoriSampahsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KategoriSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    setorSampahs<T extends Prisma.Tenant$setorSampahsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$setorSampahsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetorSampahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detailSetors<T extends Prisma.Tenant$detailSetorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$detailSetorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetailSetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    hadiahs<T extends Prisma.Tenant$hadiahsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$hadiahsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HadiahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    penukaranPoins<T extends Prisma.Tenant$penukaranPoinsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$penukaranPoinsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PenukaranPoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TenantFieldRefs {
    readonly id: Prisma.FieldRef<"Tenant", 'String'>;
    readonly appKey: Prisma.FieldRef<"Tenant", 'String'>;
    readonly name: Prisma.FieldRef<"Tenant", 'String'>;
    readonly isActive: Prisma.FieldRef<"Tenant", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Tenant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Tenant", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Tenant", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"Tenant", 'String'>;
    readonly restoredAt: Prisma.FieldRef<"Tenant", 'DateTime'>;
    readonly restoredBy: Prisma.FieldRef<"Tenant", 'String'>;
}
export type TenantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[];
};
export type TenantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[];
};
export type TenantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[];
};
export type TenantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantCreateInput, Prisma.TenantUncheckedCreateInput>;
};
export type TenantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TenantCreateManyInput | Prisma.TenantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TenantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    data: Prisma.TenantCreateManyInput | Prisma.TenantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TenantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantUpdateInput, Prisma.TenantUncheckedUpdateInput>;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TenantUpdateManyMutationInput, Prisma.TenantUncheckedUpdateManyInput>;
    where?: Prisma.TenantWhereInput;
    limit?: number;
};
export type TenantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantUpdateManyMutationInput, Prisma.TenantUncheckedUpdateManyInput>;
    where?: Prisma.TenantWhereInput;
    limit?: number;
};
export type TenantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateInput, Prisma.TenantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TenantUpdateInput, Prisma.TenantUncheckedUpdateInput>;
};
export type TenantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantWhereInput;
    limit?: number;
};
export type Tenant$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$adminBanksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$nasabahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$kategoriSampahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$setorSampahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$detailSetorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$hadiahsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$penukaranPoinsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TenantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
};
