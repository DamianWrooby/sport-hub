/*
  Warnings:

  - You are about to drop the `savedUnit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scheduledUnit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `savedUnit`;

-- DropTable
DROP TABLE `scheduledUnit`;

-- CreateTable
CREATE TABLE `savedUnits` (
    `id` INTEGER NOT NULL,
    `activity` VARCHAR(191) NOT NULL,
    `distance` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `intensity` INTEGER NOT NULL,
    `description` VARCHAR(191),
    `date` VARCHAR(191) NOT NULL,
    `timestamp` INTEGER NOT NULL,

    UNIQUE INDEX `savedUnits_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scheduledUnits` (
    `dayID` VARCHAR(191) NOT NULL,
    `activity` VARCHAR(191) NOT NULL,
    `distance` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `intensity` INTEGER NOT NULL,
    `description` VARCHAR(191),

    UNIQUE INDEX `scheduledUnits_dayID_key`(`dayID`),
    PRIMARY KEY (`dayID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
