/*
  Warnings:

  - The primary key for the `scheduledUnits` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `savedUnits` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `scheduledUnits` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `scheduledUnits_dayID_key` ON `scheduledUnits`;

-- AlterTable
ALTER TABLE `scheduledUnits` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `savedUnits`;

-- CreateTable
CREATE TABLE `completedUnits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activity` VARCHAR(191) NOT NULL,
    `distance` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `intensity` INTEGER NOT NULL,
    `description` VARCHAR(191),
    `date` DATETIME(3) NOT NULL,
    `timestamp` VARCHAR(191) NOT NULL DEFAULT 'none',

    UNIQUE INDEX `completedUnits_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `scheduledUnits_id_key` ON `scheduledUnits`(`id`);
