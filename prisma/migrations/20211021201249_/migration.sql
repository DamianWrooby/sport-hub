/*
  Warnings:

  - You are about to drop the column `timeStamp` on the `savedUnits` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `savedUnits` DROP COLUMN `timeStamp`,
    ADD COLUMN `timestamp` VARCHAR(191) NOT NULL DEFAULT 'none';
