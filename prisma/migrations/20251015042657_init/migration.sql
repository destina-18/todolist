/*
  Warnings:

  - You are about to drop the column `harga` on the `menu` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `menu` table. All the data in the column will be lost.
  - You are about to alter the column `kategori` on the `menu` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the column `nama` on the `user` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `DetailTransaksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Harga` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Transaksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detailtransaksi` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `menu` DROP COLUMN `harga`,
    DROP COLUMN `nama`,
    ADD COLUMN `Harga` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `kategori` ENUM('Makanan', 'Minuman', 'Snack') NOT NULL DEFAULT 'Makanan';

-- AlterTable
ALTER TABLE `transaksi` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `paymentMethod` ENUM('CASH', 'QRIS') NOT NULL DEFAULT 'QRIS',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `nama`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
