/*
  Warnings:

  - Added the required column `opponent1BingoNumber` to the `GhostBattleRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bingoPlayedCount` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "GhostBattleRecord" ADD COLUMN     "opponent1BingoNumber" INTEGER NOT NULL,
ADD COLUMN     "opponent2BingoNumber" INTEGER,
ADD COLUMN     "opponent3BingoNumber" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bingoPlayedCount" INTEGER NOT NULL;
