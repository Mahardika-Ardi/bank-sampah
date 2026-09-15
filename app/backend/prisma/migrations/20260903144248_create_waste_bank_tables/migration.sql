-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin_bank', 'nasabah');

-- CreateEnum
CREATE TYPE "JenisSampah" AS ENUM ('plastik', 'kertas', 'logam', 'kaca');

-- CreateEnum
CREATE TYPE "StatusSetor" AS ENUM ('belum_dikonfirmasi', 'diproses', 'selesai', 'ditolak');

-- CreateEnum
CREATE TYPE "StatusPenukaran" AS ENUM ('diproses', 'selesai');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "UserRole" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_bank" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "nama_unit" VARCHAR(100) NOT NULL,
    "nama_pengelola" VARCHAR(100) NOT NULL,
    "telp" VARCHAR(20) NOT NULL,
    "id_user" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "admin_bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nasabah" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "nama_nasabah" VARCHAR(100) NOT NULL,
    "alamat" TEXT,
    "telp" VARCHAR(20) NOT NULL,
    "saldo_poin" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "id_user" UUID NOT NULL,
    "foto" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "nasabah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategori_sampah" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "nama_kategori" VARCHAR(100) NOT NULL,
    "harga_per_kg" DECIMAL(14,2) NOT NULL,
    "poin_per_kg" DECIMAL(14,2) NOT NULL,
    "jenis" "JenisSampah" NOT NULL,
    "foto" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "kategori_sampah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setor_sampah" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_admin" UUID,
    "id_nasabah" UUID NOT NULL,
    "status" "StatusSetor" NOT NULL DEFAULT 'belum_dikonfirmasi',
    "total_harga" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "total_poin" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "setor_sampah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detail_setor" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "id_setor" UUID NOT NULL,
    "id_kategori_sampah" UUID NOT NULL,
    "berat_kg" DECIMAL(14,3) NOT NULL,
    "berat_estimasi_kg" DECIMAL(14,3),
    "berat_terverifikasi_kg" DECIMAL(14,3),
    "subtotal_poin" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "subtotal_harga" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "detail_setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hadiah" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "nama_hadiah" VARCHAR(100) NOT NULL,
    "poin_dibutuhkan" DECIMAL(14,2) NOT NULL,
    "stok" INTEGER NOT NULL,
    "foto" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "hadiah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penukaran_poin" (
    "id" UUID NOT NULL,
    "tenant_id" UUID NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_setor" UUID,
    "id_nasabah" UUID NOT NULL,
    "id_hadiah" UUID NOT NULL,
    "poin_terpakai" DECIMAL(14,2) NOT NULL,
    "status" "StatusPenukaran" NOT NULL DEFAULT 'diproses',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "penukaran_poin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenants" (
    "id" UUID NOT NULL,
    "app_key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" UUID,
    "restored_at" TIMESTAMP(3),
    "restored_by" UUID,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_tenant_id_deleted_at_idx" ON "users"("tenant_id", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "users_tenant_id_username_key" ON "users"("tenant_id", "username");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_tenant_id_key" ON "users"("id", "tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_bank_id_user_key" ON "admin_bank"("id_user");

-- CreateIndex
CREATE INDEX "admin_bank_tenant_id_deleted_at_idx" ON "admin_bank"("tenant_id", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "admin_bank_id_user_tenant_id_key" ON "admin_bank"("id_user", "tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_bank_id_tenant_id_key" ON "admin_bank"("id", "tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "nasabah_id_user_key" ON "nasabah"("id_user");

-- CreateIndex
CREATE INDEX "nasabah_tenant_id_deleted_at_idx" ON "nasabah"("tenant_id", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "nasabah_id_tenant_id_key" ON "nasabah"("id", "tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "nasabah_id_user_tenant_id_key" ON "nasabah"("id_user", "tenant_id");

-- CreateIndex
CREATE INDEX "kategori_sampah_tenant_id_deleted_at_idx" ON "kategori_sampah"("tenant_id", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "kategori_sampah_tenant_id_nama_kategori_key" ON "kategori_sampah"("tenant_id", "nama_kategori");

-- CreateIndex
CREATE UNIQUE INDEX "kategori_sampah_id_tenant_id_key" ON "kategori_sampah"("id", "tenant_id");

-- CreateIndex
CREATE INDEX "setor_sampah_tenant_id_status_idx" ON "setor_sampah"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "setor_sampah_tenant_id_id_nasabah_idx" ON "setor_sampah"("tenant_id", "id_nasabah");

-- CreateIndex
CREATE INDEX "setor_sampah_tenant_id_deleted_at_idx" ON "setor_sampah"("tenant_id", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "setor_sampah_id_tenant_id_key" ON "setor_sampah"("id", "tenant_id");

-- CreateIndex
CREATE INDEX "detail_setor_tenant_id_id_setor_idx" ON "detail_setor"("tenant_id", "id_setor");

-- CreateIndex
CREATE INDEX "detail_setor_tenant_id_deleted_at_idx" ON "detail_setor"("tenant_id", "deleted_at");

-- CreateIndex
CREATE INDEX "hadiah_tenant_id_deleted_at_idx" ON "hadiah"("tenant_id", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "hadiah_tenant_id_nama_hadiah_key" ON "hadiah"("tenant_id", "nama_hadiah");

-- CreateIndex
CREATE UNIQUE INDEX "hadiah_id_tenant_id_key" ON "hadiah"("id", "tenant_id");

-- CreateIndex
CREATE INDEX "penukaran_poin_tenant_id_id_nasabah_idx" ON "penukaran_poin"("tenant_id", "id_nasabah");

-- CreateIndex
CREATE INDEX "penukaran_poin_tenant_id_status_idx" ON "penukaran_poin"("tenant_id", "status");

-- CreateIndex
CREATE INDEX "penukaran_poin_tenant_id_deleted_at_idx" ON "penukaran_poin"("tenant_id", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_app_key_key" ON "tenants"("app_key");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_bank" ADD CONSTRAINT "admin_bank_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_bank" ADD CONSTRAINT "admin_bank_id_user_tenant_id_fkey" FOREIGN KEY ("id_user", "tenant_id") REFERENCES "users"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nasabah" ADD CONSTRAINT "nasabah_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nasabah" ADD CONSTRAINT "nasabah_id_user_tenant_id_fkey" FOREIGN KEY ("id_user", "tenant_id") REFERENCES "users"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kategori_sampah" ADD CONSTRAINT "kategori_sampah_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor_sampah" ADD CONSTRAINT "setor_sampah_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor_sampah" ADD CONSTRAINT "setor_sampah_id_admin_tenant_id_fkey" FOREIGN KEY ("id_admin", "tenant_id") REFERENCES "admin_bank"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor_sampah" ADD CONSTRAINT "setor_sampah_id_nasabah_tenant_id_fkey" FOREIGN KEY ("id_nasabah", "tenant_id") REFERENCES "nasabah"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_setor" ADD CONSTRAINT "detail_setor_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_setor" ADD CONSTRAINT "detail_setor_id_setor_tenant_id_fkey" FOREIGN KEY ("id_setor", "tenant_id") REFERENCES "setor_sampah"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_setor" ADD CONSTRAINT "detail_setor_id_kategori_sampah_tenant_id_fkey" FOREIGN KEY ("id_kategori_sampah", "tenant_id") REFERENCES "kategori_sampah"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hadiah" ADD CONSTRAINT "hadiah_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_poin" ADD CONSTRAINT "penukaran_poin_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_poin" ADD CONSTRAINT "penukaran_poin_id_setor_tenant_id_fkey" FOREIGN KEY ("id_setor", "tenant_id") REFERENCES "setor_sampah"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_poin" ADD CONSTRAINT "penukaran_poin_id_nasabah_tenant_id_fkey" FOREIGN KEY ("id_nasabah", "tenant_id") REFERENCES "nasabah"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penukaran_poin" ADD CONSTRAINT "penukaran_poin_id_hadiah_tenant_id_fkey" FOREIGN KEY ("id_hadiah", "tenant_id") REFERENCES "hadiah"("id", "tenant_id") ON DELETE RESTRICT ON UPDATE CASCADE;
