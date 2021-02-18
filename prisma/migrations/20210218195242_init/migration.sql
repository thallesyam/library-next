-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_ownerId_fkey";

-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "ownerId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Books" ADD FOREIGN KEY ("ownerId") REFERENCES "Users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
