/*
  Warnings:

  - You are about to drop the `resource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_resourcetotag` DROP FOREIGN KEY `_ResourceToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_resourcetotag` DROP FOREIGN KEY `_ResourceToTag_B_fkey`;

-- DropTable
DROP TABLE `resource`;

-- DropTable
DROP TABLE `tag`;

-- CreateTable
CREATE TABLE `recursos-web_resource` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `poster` VARCHAR(191) NULL,
    `description` TEXT NULL,

    UNIQUE INDEX `recursos-web_resource_name_key`(`name`),
    UNIQUE INDEX `recursos-web_resource_url_key`(`url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recursos-web_tags` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `recursos-web_tags_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ResourceToTag` ADD CONSTRAINT `_ResourceToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `recursos-web_resource`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ResourceToTag` ADD CONSTRAINT `_ResourceToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `recursos-web_tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
