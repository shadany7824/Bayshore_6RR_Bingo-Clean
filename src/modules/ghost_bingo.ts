import { Application } from "express";
import { prisma } from "..";

// Import Proto
import * as wm from "../wmmt/wm.proto";
import * as wmsrv from "../wmmt/service.proto";

// Import Util
import * as common from "./util/common";
import * as ghostArea from "./ghost/ghost_util/ghost_area";

function makeGhostCarResponse(ghost: any) {
    return wm.wm.protobuf.GhostCar.create({
        car: {
            carId: ghost.carId,
            tunePower: ghost.tunePower,
            tuneHandling: ghost.tuneHandling,
            regionId: ghost.regionId || 1,
            name: ghost.name || '',
            manufacturer: ghost.manufacturer || 0,
            model: ghost.model || 0,
            visualModel: ghost.visualModel || 0,
            defaultColor: ghost.defaultColor || 0,
            customColor: ghost.customColor || 0,
            wheel: ghost.wheel || 0,
            wheelColor: ghost.wheelColor || 0,
            aero: ghost.aero || 0,
            bonnet: ghost.bonnet || 0,
            wing: ghost.wing || 0,
            mirror: ghost.mirror || 0,
            neon: ghost.neon || 0,
            trunk: ghost.trunk || 0,
            plate: ghost.plate || 0,
            plateColor: ghost.plateColor || 0,
            plateNumber: ghost.plateNumber || 0,
            title: ghost.title || '',
            level: ghost.level || 0,
            country: ghost.country || 'JPN',
        } as any,
        area: ghost.area,
        ramp: ghost.ramp,
        path: ghost.path,
        nonhuman: ghost.nonhuman,
        type: ghost.type,
        trailId: ghost.trailId || null
    });
}

export default class GhostBingoModule {
    register(app: Application): void {

        // Load Bingo Stats
        app.post('/method/load_bingo_stats', async (req, res) => {

            let msg: any = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                acquiredBingoNumbers: [],
                receivedNumOfItems: 0,
                unreceivedItems: false,
            };

            let message = wm.wm.protobuf.LoadBingoStatsResponse.encode(msg);
            common.sendResponse(message, res, req.rawHeaders);
        });

        // Bingo Receivable Items
        app.post('/method/bingo_receivable_items', async (req, res) => {

            let msg: any = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                ownedUserItems: [],
            };

            let message = wm.wm.protobuf.BingoReceivableItemsResponse.encode(msg);
            common.sendResponse(message, res, req.rawHeaders);
        });

        // Load Ghost Bingo Targets
        app.post('/method/load_ghost_bingo_targets', async (req, res) => {

            let body = wmsrv.wm.protobuf.LoadGhostBingoTargetsRequest.decode(req.body);

            let bingoCard = await prisma.bingoCard.findFirst({
                where: { carId: body.carId },
                include: { ghosts: true }
            });

            if (bingoCard) {
                let msg: any = {
                    error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
                    ramp: bingoCard.ramp,
                    path: bingoCard.path,
                    ghosts: bingoCard.ghosts.map((ghost: any) => makeGhostCarResponse(ghost)),
                    selectionMethod: wm.wm.protobuf.PathSelectionMethod.PATH_NORMAL
                };

                let message = wmsrv.wm.protobuf.LoadGhostBingoTargetsResponse.encode(msg);
                common.sendResponse(message, res, req.rawHeaders);

            } else {
                let ghost_areas = await ghostArea.GhostArea(body.area);
                let rampVal = ghost_areas.rampVal;
                let pathVal = ghost_areas.pathVal;

                let lists_ghostcar: any[] = [];
                let arr: number[] = [];
                let maxNumber = 0;

                let cars = await prisma.car.findMany({
                    where: {},
                    include: {
                        gtWing: true,
                        lastPlayedPlace: true
                    }
                });

                maxNumber = cars.length > 10 ? 10 : cars.length;

                while (arr.length < maxNumber) {
                    let randomNumber = Math.floor(Math.random() * cars.length);

                    if (arr.indexOf(randomNumber) === -1) {
                        arr.push(randomNumber);

                        let ghost_trails = await prisma.ghostTrail.findFirst({
                            where: {
                                carId: cars[randomNumber].carId,
                                area: body.area,
                                crownBattle: false
                            },
                            orderBy: { playedAt: 'desc' }
                        });

                        if (cars[randomNumber].regionId === 0) {
                            cars[randomNumber].regionId = Math.floor(Math.random() * 47) + 1;
                        }

                        if (!ghost_trails) {
                            lists_ghostcar.push(wm.wm.protobuf.GhostCar.create({
                                car: cars[randomNumber],
                                area: body.area,
                                ramp: rampVal,
                                path: pathVal,
                                nonhuman: true,
                                type: wm.wm.protobuf.GhostType.GHOST_DEFAULT,
                            }));
                        } else {
                            cars[randomNumber].tunePower = ghost_trails.tunePower;
                            cars[randomNumber].tuneHandling = ghost_trails.tuneHandling;

                            lists_ghostcar.push(wm.wm.protobuf.GhostCar.create({
                                car: cars[randomNumber],
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

                let newBingoCard: any = await prisma.bingoCard.create({
                    data: {
                        carId: body.carId,
                        ramp: rampVal,
                        path: pathVal,
                        ghosts: {
                            create: lists_ghostcar.map((ghost: any) => ({
                                carId: ghost.car.carId,
                                area: ghost.area,
                                ramp: ghost.ramp,
                                path: ghost.path,
                                nonhuman: ghost.nonhuman,
                                type: ghost.type,
                                trailId: (ghost.trailId && typeof ghost.trailId === 'object')
                                    ? (ghost.trailId.low || null)
                                    : (ghost.trailId || null),
                                tunePower: ghost.car.tunePower,
                                tuneHandling: ghost.car.tuneHandling
                            }))
                        }
                    },
                    include: { ghosts: true }
                });

                let msg: any = {
                    error: wmsrv.wm.protobuf.ErrorCode.ERR_SUCCESS,
                    ramp: newBingoCard.ramp,
                    path: newBingoCard.path,
                    ghosts: newBingoCard.ghosts.map((ghost: any) => makeGhostCarResponse(ghost)),
                    selectionMethod: wm.wm.protobuf.PathSelectionMethod.PATH_NORMAL
                };

                let message = wmsrv.wm.protobuf.LoadGhostBingoTargetsResponse.encode(msg);
                common.sendResponse(message, res, req.rawHeaders);
            }
        });
    }
}
