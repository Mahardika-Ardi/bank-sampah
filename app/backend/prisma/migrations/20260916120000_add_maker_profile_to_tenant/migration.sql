-- AlterTable
ALTER TABLE "tenants" ADD COLUMN "email" VARCHAR(255),
ADD COLUMN "nama_siswa" VARCHAR(100),
ADD COLUMN "kelas" VARCHAR(50),
ADD COLUMN "app_name" VARCHAR(100);

-- Backfill maker profile from the earliest admin user of each tenant
UPDATE "tenants" t SET
  "email" = src."username",
  "nama_siswa" = src."nama_pengelola",
  "app_name" = t."name"
FROM (
  SELECT DISTINCT ON (u."tenant_id") u."tenant_id", u."username", ab."nama_pengelola"
  FROM "users" u
  JOIN "admin_bank" ab ON ab."id_user" = u."id" AND ab."tenant_id" = u."tenant_id"
  WHERE u."role" = 'admin_bank' AND u."deleted_at" IS NULL
  ORDER BY u."tenant_id", u."created_at" ASC
) src
WHERE t."id" = src."tenant_id" AND t."email" IS NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tenants_email_key" ON "tenants"("email");
