-- CreateTable
CREATE TABLE `savedUnit` (
    `id` INTEGER NOT NULL,
    `activity` VARCHAR(191) NOT NULL,
    `distance` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `intensity` INTEGER NOT NULL,
    `description` VARCHAR(191),
    `date` VARCHAR(191) NOT NULL,
    `timestamp` INTEGER NOT NULL,

    UNIQUE INDEX `savedUnit_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scheduledUnit` (
    `dayID` VARCHAR(191) NOT NULL,
    `activity` VARCHAR(191) NOT NULL,
    `distance` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `intensity` INTEGER NOT NULL,
    `description` VARCHAR(191),

    UNIQUE INDEX `scheduledUnit_dayID_key`(`dayID`),
    PRIMARY KEY (`dayID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
