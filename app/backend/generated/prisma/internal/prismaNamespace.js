import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    AdminBank: 'AdminBank',
    Nasabah: 'Nasabah',
    KategoriSampah: 'KategoriSampah',
    SetorSampah: 'SetorSampah',
    DetailSetor: 'DetailSetor',
    Hadiah: 'Hadiah',
    PenukaranPoin: 'PenukaranPoin',
    Tenant: 'Tenant'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const AdminBankScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    namaUnit: 'namaUnit',
    namaPengelola: 'namaPengelola',
    telp: 'telp',
    idUser: 'idUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const NasabahScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    namaNasabah: 'namaNasabah',
    alamat: 'alamat',
    telp: 'telp',
    saldoPoin: 'saldoPoin',
    idUser: 'idUser',
    foto: 'foto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const KategoriSampahScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    namaKategori: 'namaKategori',
    hargaPerKg: 'hargaPerKg',
    poinPerKg: 'poinPerKg',
    jenis: 'jenis',
    foto: 'foto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const SetorSampahScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    tanggal: 'tanggal',
    idAdmin: 'idAdmin',
    idNasabah: 'idNasabah',
    status: 'status',
    totalHarga: 'totalHarga',
    totalPoin: 'totalPoin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const DetailSetorScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    idSetor: 'idSetor',
    idKategori: 'idKategori',
    beratKg: 'beratKg',
    beratEstimasiKg: 'beratEstimasiKg',
    beratTerverifikasiKg: 'beratTerverifikasiKg',
    subtotalPoin: 'subtotalPoin',
    subtotalHarga: 'subtotalHarga',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const HadiahScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    namaHadiah: 'namaHadiah',
    poinDibutuhkan: 'poinDibutuhkan',
    stok: 'stok',
    foto: 'foto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const PenukaranPoinScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    tanggal: 'tanggal',
    idSetor: 'idSetor',
    idNasabah: 'idNasabah',
    idHadiah: 'idHadiah',
    poinTerpakai: 'poinTerpakai',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const TenantScalarFieldEnum = {
    id: 'id',
    appKey: 'appKey',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    restoredAt: 'restoredAt',
    restoredBy: 'restoredBy'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map