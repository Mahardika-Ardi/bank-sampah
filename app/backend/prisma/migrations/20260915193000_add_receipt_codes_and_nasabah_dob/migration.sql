-- AlterTable
ALTER TABLE "nasabah" ADD COLUMN "tanggal_lahir" DATE;

-- AlterTable
ALTER TABLE "setor_sampah" ADD COLUMN "kode_setor" VARCHAR(20) NOT NULL,
ADD COLUMN "catatan" TEXT,
ADD COLUMN "catatan_admin" TEXT,
ADD COLUMN "total_berat_kg" DECIMAL(14,3) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "penukaran_poin" ADD COLUMN "kode_penukaran" VARCHAR(20) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "setor_sampah_tenant_id_kode_setor_key" ON "setor_sampah"("tenant_id", "kode_setor");

-- CreateIndex
CREATE UNIQUE INDEX "penukaran_poin_tenant_id_kode_penukaran_key" ON "penukaran_poin"("tenant_id", "kode_penukaran");
