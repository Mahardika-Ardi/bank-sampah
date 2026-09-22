-- CreateEnum
CREATE TYPE "PhotoStatus" AS ENUM ('ready', 'processing', 'failed');

-- AlterTable
ALTER TABLE "nasabah" ADD COLUMN "photo_status" "PhotoStatus" NOT NULL DEFAULT 'ready';
ALTER TABLE "kategori_sampah" ADD COLUMN "photo_status" "PhotoStatus" NOT NULL DEFAULT 'ready';
ALTER TABLE "hadiah" ADD COLUMN "photo_status" "PhotoStatus" NOT NULL DEFAULT 'ready';
