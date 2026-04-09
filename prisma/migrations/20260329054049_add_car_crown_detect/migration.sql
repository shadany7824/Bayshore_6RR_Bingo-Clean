-- CreateTable
CREATE TABLE "CarCrownDetect" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER,
    "ramp" INTEGER,
    "path" INTEGER,
    "playedAt" INTEGER,
    "tunePower" INTEGER,
    "tuneHandling" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'finish',
    "opponentCarId" INTEGER,
    "trail" BYTEA,

    CONSTRAINT "CarCrownDetect_pkey" PRIMARY KEY ("id")
);
