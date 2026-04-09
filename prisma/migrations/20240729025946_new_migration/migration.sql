-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0,
ALTER COLUMN "stCompleted100Episodes" SET DEFAULT true;

-- AlterTable
ALTER TABLE "OCMPeriod" ADD COLUMN     "kOSHIENeventDbId" INTEGER;

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BingoSheet" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "grid" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BingoSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bingo" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "collectedBalls" INTEGER[],

    CONSTRAINT "Bingo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KOSHIENevent" (
    "dbId" SERIAL NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "qualifyingPeriodStartAt" INTEGER NOT NULL,
    "qualifyingPeriodCloseAt" INTEGER NOT NULL,
    "competitionStartAt" INTEGER NOT NULL,
    "competitionCloseAt" INTEGER NOT NULL,
    "competitionEndAt" INTEGER NOT NULL,
    "lengthOfPeriod" INTEGER NOT NULL,
    "lengthOfInterval" INTEGER NOT NULL,
    "area" INTEGER NOT NULL DEFAULT 0,
    "minigamePatternId" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "KOSHIENevent_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "KOSHIENPlayRecord" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "brakingPoint" INTEGER,
    "playedAt" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "KOSHIENPlayRecord_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "KOSHIENTop1Ghost" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "KOSHIENTop1Ghost_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "KOSHIENTop1GhostTrail" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "trail" BYTEA NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "playedAt" INTEGER NOT NULL DEFAULT 0,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,
    "ocmMainDraw" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "KOSHIENTop1GhostTrail_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "KOSHIENTally" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "KOSHIENTally_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "KOSHIENGhostBattleRecord" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "area" INTEGER NOT NULL DEFAULT 0,
    "playedAt" INTEGER NOT NULL DEFAULT 0,
    "playedShopName" TEXT NOT NULL DEFAULT 'Bayshore',

    CONSTRAINT "KOSHIENGhostBattleRecord_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "KOSHIENGhostTrail" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "trail" BYTEA NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "playedAt" INTEGER NOT NULL DEFAULT 0,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "KOSHIENGhostTrail_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "KOSHIENPeriod" (
    "dbId" SERIAL NOT NULL,
    "competitionDbId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "startAt" INTEGER NOT NULL,
    "closeAt" INTEGER NOT NULL,

    CONSTRAINT "KOSHIENPeriod_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "BingoCard" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BingoCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GhostCar" (
    "id" SERIAL NOT NULL,
    "bingoCardId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "nonhuman" BOOLEAN NOT NULL,
    "type" INTEGER NOT NULL,
    "trailId" INTEGER,
    "tunePower" INTEGER NOT NULL,
    "tuneHandling" INTEGER NOT NULL,

    CONSTRAINT "GhostCar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BingoSheet_playerId_key" ON "BingoSheet"("playerId");

-- CreateIndex
CREATE INDEX "BingoCard_carId_idx" ON "BingoCard"("carId");

-- AddForeignKey
ALTER TABLE "BingoSheet" ADD CONSTRAINT "BingoSheet_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OCMPeriod" ADD CONSTRAINT "OCMPeriod_kOSHIENeventDbId_fkey" FOREIGN KEY ("kOSHIENeventDbId") REFERENCES "KOSHIENevent"("dbId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KOSHIENPlayRecord" ADD CONSTRAINT "KOSHIENPlayRecord_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KOSHIENTop1Ghost" ADD CONSTRAINT "KOSHIENTop1Ghost_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KOSHIENTally" ADD CONSTRAINT "KOSHIENTally_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KOSHIENGhostBattleRecord" ADD CONSTRAINT "KOSHIENGhostBattleRecord_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KOSHIENGhostTrail" ADD CONSTRAINT "KOSHIENGhostTrail_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KOSHIENPeriod" ADD CONSTRAINT "KOSHIENPeriod_competitionDbId_fkey" FOREIGN KEY ("competitionDbId") REFERENCES "OCMEvent"("dbId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GhostCar" ADD CONSTRAINT "GhostCar_bingoCardId_fkey" FOREIGN KEY ("bingoCardId") REFERENCES "BingoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
