const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const wm = require('../wmmt/wm.proto');
const wmsrv = require('../wmmt/service.proto');
const common = require('../util/common');
const ghostArea = require('../util/ghost/ghost_area');

async function saveBingoCard(req, res) {
    let body = wmsrv.wm.protobuf.LoadGhostBingoTargetsRequest.decode(req.body);

    let rampVal = 0;
    let pathVal = 0;
    let ghost_areas = await ghostArea.GhostArea(body.area);

    rampVal = ghost_areas.rampVal;
    pathVal = ghost_areas.pathVal;

    let lists_ghostcar = [];
    let arr = [];
    let maxNumber = 0;

    let car = await prisma.car.findMany({
        where: {},
        include: {
            gtWing: true,
            lastPlayedPlace: true
        }
    });

    if (car.length > 10) {
        maxNumber = 10;
    } else {
        maxNumber = car.length;
    }

    while (arr.length < maxNumber) {
        let randomNumber = Math.floor(Math.random() * car.length);

        if (arr.indexOf(randomNumber) === -1) {
            arr.push(randomNumber);

            let ghost_trails = await prisma.ghostTrail.findFirst({
                where: {
                    carId: car[randomNumber].carId,
                    area: body.area,
                    crownBattle: false
                },
                orderBy: {
                    playedAt: 'desc'
                }
            });

            if (car[randomNumber].regionId === 0) {
                let randomRegionId = Math.floor(Math.random() * 47) + 1;
                car[randomNumber].regionId = randomRegionId;
            }

            if (!ghost_trails) {
                lists_ghostcar.push(wm.wm.protobuf.GhostCar.create({
                    car: car[randomNumber],
                    area: body.area,
                    ramp: rampVal,
                    path: pathVal,
                    nonhuman: true,
                    type: wm.wm.protobuf.GhostType.GHOST_DEFAULT,
                }));
            } else {
                car[randomNumber].tunePower = ghost_trails.tunePower;
                car[randomNumber].tuneHandling = ghost_trails.tuneHandling;

                lists_ghostcar.push(wm.wm.protobuf.GhostCar.create({
                    car: car[randomNumber],
                    area: body.area,
                    ramp: rampVal,
                    path: pathVal,
                    nonhuman: false,
                    type: wm.wm.protobuf.GhostType.GHOST_NORMAL,
                    trailId: ghost_trails.dbId
                }));
            }
        }
    }

    let bingoCard = await prisma.bingoCard.create({
        data: {
            carId: body.carId,
            ramp: rampVal,
            path: pathVal,
            ghosts: {
                create: lists_ghostcar.map(ghost => ({
                    carId: ghost.car.carId,
                    area: ghost.area,
                    ramp: ghost.ramp,
                    path: ghost.path,
                    nonhuman: ghost.nonhuman,
                    type: ghost.type,
                    trailId: ghost.trailId || null,
                    tunePower: ghost.car.tunePower,
                    tuneHandling: ghost.car.tuneHandling
                }))
            }
        },
        include: {
            ghosts: true
        }
    });

    let msg = {
        error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
        ramp: bingoCard.ramp,
        path: bingoCard.path,
        ghosts: bingoCard.ghosts.map(ghost => wm.wm.protobuf.GhostCar.create({
            car: {
                carId: ghost.carId,
                tunePower: ghost.tunePower,
                tuneHandling: ghost.tuneHandling,
                regionId: 0
            },
            area: ghost.area,
            ramp: ghost.ramp,
            path: ghost.path,
            nonhuman: ghost.nonhuman,
            type: ghost.type,
            trailId: ghost.trailId
        })),
        selectionMethod: wm.wm.protobuf.PathSelectionMethod.PATH_NORMAL
    };

    let message = wmsrv.wm.protobuf.LoadGhostBingoTargetsResponse.encode(msg);
    common.sendResponse(message, res);
}

async function loadBingoCard(req, res) {
    let body = wmsrv.wm.protobuf.LoadGhostBingoTargetsRequest.decode(req.body);

    let bingoCard = await prisma.bingoCard.findUnique({
        where: {
            carId: body.carId
        },
        include: {
            ghosts: true
        }
    });

    if (bingoCard) {
        let msg = {
            error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
            ramp: bingoCard.ramp,
            path: bingoCard.path,
            ghosts: bingoCard.ghosts.map(ghost => wm.wm.protobuf.GhostCar.create({
                car: {
                    carId: ghost.carId,
                    tunePower: ghost.tunePower,
                    tuneHandling: ghost.tuneHandling,
                    regionId: 0
                },
                area: ghost.area,
                ramp: ghost.ramp,
                path: ghost.path,
                nonhuman: ghost.nonhuman,
                type: ghost.type,
                trailId: ghost.trailId
            })),
            selectionMethod: wm.wm.protobuf.PathSelectionMethod.PATH_NORMAL
        };

        let message = wmsrv.wm.protobuf.LoadGhostBingoTargetsResponse.encode(msg);
        common.sendResponse(message, res);
    } else {
        saveBingoCard(req, res);
    }
}

module.exports = {
    saveBingoCard,
    loadBingoCard
};
//# sourceMappingURL=ghost_bingo.js.map