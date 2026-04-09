-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bingoCard" SERIAL NOT NULL;
