/*
  Warnings:

  - Changed the type of `ownerId` on the `Books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_ownerId_fkey";

-- AlterTable
ALTER TABLE "Books" DROP COLUMN "ownerId",
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Books" ADD FOREIGN KEY ("ownerId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
