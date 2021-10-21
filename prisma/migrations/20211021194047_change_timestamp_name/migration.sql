/*
  Warnings:

  - You are about to drop the column `timestamp` on the `savedUnits` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `savedUnits` DROP COLUMN `timestamp`,
    ADD COLUMN `timeStamp` INTEGER NOT NULL DEFAULT 0;
