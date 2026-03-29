"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveVSORGGhostRetireHistory = exports.saveVSORGGhostHistory = exports.saveOCMGhostHistory = exports.saveGhostHistory = void 0;
var __1 = require("../..");
var config_1 = require("../../config");
// Import Util
var common = __importStar(require("../../util/common"));
var ghost_stamp = __importStar(require("../ghost/ghost_stamp"));
var ghost_get_area_from_path = __importStar(require("../ghost/ghost_util/ghost_get_area_from_path"));
// Save ghost history battle
function saveGhostHistory(body) {
    return __awaiter(this, void 0, void 0, function () {
        var updateNewTrail, saveExGhostHistory, car, rgResult, i, getArea;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Saving Ghost Battle History');
                    updateNewTrail = true;
                    saveExGhostHistory = {};
                    car = body === null || body === void 0 ? void 0 : body.car;
                    if (car) {
                        saveExGhostHistory = {
                            carId: common.sanitizeInput(car.carId),
                            tunePower: common.sanitizeInput(car.tunePower),
                            tuneHandling: common.sanitizeInput(car.tuneHandling),
                            playedAt: common.sanitizeInputNotZero(body.playedAt),
                            playedShopName: config_1.Config.getConfig().shopName
                        };
                    }
                    rgResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    if (!rgResult) return [3 /*break*/, 2];
                    if (rgResult.opponents) {
                        // Get how many opponents available
                        for (i = 0; i < rgResult.opponents.length; i++) {
                            // First opponent data
                            if (i == 0) {
                                // Get first opponent carId
                                saveExGhostHistory.opponent1CarId = rgResult.opponents[0].carId;
                                // Get first opponent tunePower
                                saveExGhostHistory.opponent1TunePower = rgResult.opponents[0].tunePower;
                                // Get first opponent tunePower
                                saveExGhostHistory.opponent1TuneHandling = rgResult.opponents[0].tuneHandling;
                                // Get the advantage distance between first opponent and user
                                saveExGhostHistory.opponent1Result = rgResult.opponents[0].result;
                            }
                            // Second opponent data
                            else if (i == 1) {
                                // Get second opponent carId
                                saveExGhostHistory.opponent2CarId = rgResult.opponents[1].carId;
                                // Get second opponent tunePower
                                saveExGhostHistory.opponent2TunePower = rgResult.opponents[1].tunePower;
                                // Get second opponent tuneHandling
                                saveExGhostHistory.opponent2TuneHandling = rgResult.opponents[1].tuneHandling;
                                // Get the advantage distance between second opponent and user
                                saveExGhostHistory.opponent2Result = rgResult.opponents[1].result;
                            }
                            // Third opponent data
                            else if (i == 2) {
                                // Get third opponent carId
                                saveExGhostHistory.opponent3CarId = rgResult.opponents[2].carId;
                                // Get third opponent tunePower
                                saveExGhostHistory.opponent3TunePower = rgResult.opponents[2].tunePower;
                                // Get third opponent tuneHandling
                                saveExGhostHistory.opponent3TuneHandling = rgResult.opponents[2].tuneHandling;
                                // Get the advantage distance between third opponent and user
                                saveExGhostHistory.opponent3Result = rgResult.opponents[2].result;
                            }
                        }
                    }
                    if (!common.sanitizeInput(rgResult.path)) return [3 /*break*/, 2];
                    return [4 /*yield*/, ghost_get_area_from_path.getArea(rgResult.path)];
                case 1:
                    getArea = _a.sent();
                    saveExGhostHistory.area = getArea.area;
                    _a.label = 2;
                case 2: return [4 /*yield*/, __1.prisma.ghostBattleRecord.create({
                        data: saveExGhostHistory
                    })];
                case 3:
                    _a.sent();
                    // Sending stamp to opponents
                    return [4 /*yield*/, ghost_stamp.sendStamp(body)];
                case 4:
                    // Sending stamp to opponents
                    _a.sent();
                    // Return the value to 'BASE_PATH/src/util/games/ghost.ts'
                    return [2 /*return*/, { updateNewTrail: updateNewTrail }];
            }
        });
    });
}
exports.saveGhostHistory = saveGhostHistory;
// Save OCM ghost history battle
function saveOCMGhostHistory(body) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var updateNewTrail, saveExGhostHistory, car, rgResult, getArea, date, ocmEventDate, countGBR, OCM_periodId, checkGhost, getGBR, OCM_periodId, ocmTallyfind;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    updateNewTrail = true;
                    saveExGhostHistory = {};
                    car = body === null || body === void 0 ? void 0 : body.car;
                    if (car) {
                        saveExGhostHistory = {
                            carId: common.sanitizeInput(car.carId),
                            tunePower: common.sanitizeInput(car.tunePower),
                            tuneHandling: common.sanitizeInput(car.tuneHandling),
                            playedAt: common.sanitizeInputNotZero(body.playedAt),
                            playedShopName: config_1.Config.getConfig().shopName
                        };
                    }
                    rgResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    if (!rgResult) return [3 /*break*/, 2];
                    if (rgResult.opponents) {
                        // Get the advantage distance between first opponent and user
                        saveExGhostHistory.result = rgResult.opponents[0].result;
                    }
                    if (!common.sanitizeInput(rgResult.path)) return [3 /*break*/, 2];
                    return [4 /*yield*/, ghost_get_area_from_path.getArea(rgResult.path)];
                case 1:
                    getArea = _e.sent();
                    saveExGhostHistory.area = getArea.area;
                    _e.label = 2;
                case 2:
                    date = Math.floor(new Date().getTime() / 1000);
                    return [4 /*yield*/, __1.prisma.oCMEvent.findFirst({
                            where: {
                                // qualifyingPeriodStartAt is less than equal current date
                                qualifyingPeriodStartAt: { lte: date },
                                // competitionEndAt is greater than equal current date
                                competitionEndAt: { gte: date },
                            },
                            orderBy: {
                                dbId: 'desc'
                            }
                        })];
                case 3:
                    ocmEventDate = _e.sent();
                    if (!(ocmEventDate.competitionStartAt < date && ocmEventDate.competitionCloseAt > date)) return [3 /*break*/, 5];
                    // Set OCM Main draw value to true 
                    saveExGhostHistory.ocmMainDraw = true;
                    return [4 /*yield*/, __1.prisma.oCMTally.findFirst({
                            where: {
                                carId: saveExGhostHistory.carId,
                                competitionId: ocmEventDate.competitionId,
                            }
                        })];
                case 4:
                    // Get the user's available OCM Battle Record data
                    countGBR = _e.sent();
                    return [3 /*break*/, 7];
                case 5:
                    // Set OCM Main draw value to false 
                    saveExGhostHistory.ocmMainDraw = false;
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.findFirst({
                            where: {
                                carId: saveExGhostHistory.carId,
                                ocmMainDraw: saveExGhostHistory.ocmMainDraw,
                                area: saveExGhostHistory.area,
                                competitionId: ocmEventDate.competitionId,
                                periodId: 0
                            }
                        })];
                case 6:
                    // Get the user's available OCM Battle Record data
                    countGBR = _e.sent();
                    _e.label = 7;
                case 7:
                    if (!countGBR) return [3 /*break*/, 21];
                    if (!(countGBR.result < saveExGhostHistory.result)) return [3 /*break*/, 19];
                    console.log('OCM Ghost Tally found');
                    if (!(ocmEventDate.competitionStartAt < date && ocmEventDate.competitionCloseAt > date)) return [3 /*break*/, 16];
                    return [4 /*yield*/, __1.prisma.oCMPeriod.findFirst({
                            where: {
                                competitionDbId: ocmEventDate.dbId,
                                competitionId: ocmEventDate.competitionId,
                                startAt: {
                                    lte: date, // competitionStartAt is less than equal current date
                                },
                                closeAt: {
                                    gte: date, // competitionCloseAt is greater than equal current date
                                }
                            },
                            select: {
                                periodId: true
                            }
                        })];
                case 8:
                    OCM_periodId = _e.sent();
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.findFirst({
                            where: {
                                carId: saveExGhostHistory.carId,
                                competitionId: ocmEventDate.competitionId,
                            }
                        })];
                case 9:
                    checkGhost = _e.sent();
                    if (!checkGhost) return [3 /*break*/, 12];
                    console.log('Updating OCM Ghost Battle Record entry');
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.findFirst({
                            where: {
                                carId: saveExGhostHistory.carId,
                                area: saveExGhostHistory.area,
                                competitionId: ocmEventDate.competitionId,
                            }
                        })];
                case 10:
                    getGBR = _e.sent();
                    // Update ghost battle record
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.update({
                            where: {
                                dbId: getGBR.dbId
                            },
                            data: __assign(__assign({}, saveExGhostHistory), { competitionId: ocmEventDate.competitionId, periodId: OCM_periodId.periodId })
                        })];
                case 11:
                    // Update ghost battle record
                    _e.sent();
                    return [3 /*break*/, 14];
                case 12:
                    console.log('Creating new OCM Ghost Battle Record entry');
                    // Create new ghost battle record
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.create({
                            data: __assign(__assign({}, saveExGhostHistory), { competitionId: ocmEventDate.competitionId, periodId: OCM_periodId.periodId })
                        })];
                case 13:
                    // Create new ghost battle record
                    _e.sent();
                    _e.label = 14;
                case 14:
                    console.log('Updating OCM Tally Record');
                    // Update the OCM Tally Record
                    return [4 /*yield*/, __1.prisma.oCMTally.update({
                            where: {
                                dbId: countGBR.dbId
                            },
                            data: {
                                periodId: OCM_periodId.periodId,
                                result: body.rgResult.opponents[0].result,
                                tunePower: (_a = body.car) === null || _a === void 0 ? void 0 : _a.tunePower,
                                tuneHandling: (_b = body.car) === null || _b === void 0 ? void 0 : _b.tuneHandling
                            }
                        })];
                case 15:
                    // Update the OCM Tally Record
                    _e.sent();
                    return [3 /*break*/, 18];
                case 16: 
                // Update ghost battle record
                return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.update({
                        where: {
                            dbId: countGBR.dbId
                        },
                        data: __assign(__assign({}, saveExGhostHistory), { competitionId: ocmEventDate.competitionId, periodId: 0 })
                    })];
                case 17:
                    // Update ghost battle record
                    _e.sent();
                    _e.label = 18;
                case 18: return [3 /*break*/, 20];
                case 19:
                    console.log('Result record is lower than previous record');
                    // Don't update the User's OCM ghost trail
                    updateNewTrail = false;
                    _e.label = 20;
                case 20: return [3 /*break*/, 29];
                case 21:
                    console.log('OCM Ghost Battle Record not found');
                    console.log('Creating new OOCM Ghost Battle Record entry');
                    if (!(ocmEventDate.competitionStartAt < date && ocmEventDate.competitionCloseAt > date)) return [3 /*break*/, 27];
                    return [4 /*yield*/, __1.prisma.oCMPeriod.findFirst({
                            where: {
                                competitionDbId: ocmEventDate.dbId,
                                competitionId: ocmEventDate.competitionId
                            },
                            orderBy: {
                                periodId: 'desc'
                            },
                            select: {
                                periodId: true
                            }
                        })];
                case 22:
                    OCM_periodId = _e.sent();
                    // Update ghost battle record
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.create({
                            data: __assign(__assign({}, saveExGhostHistory), { competitionId: ocmEventDate.competitionId, periodId: OCM_periodId.periodId })
                        })];
                case 23:
                    // Update ghost battle record
                    _e.sent();
                    return [4 /*yield*/, __1.prisma.oCMTally.findFirst({
                            where: {
                                carId: saveExGhostHistory.carId,
                                competitionId: ocmEventDate.competitionId,
                            },
                        })];
                case 24:
                    ocmTallyfind = _e.sent();
                    if (!ocmTallyfind) return [3 /*break*/, 26];
                    console.log('Updating OCM Tally Record');
                    // Update the OCM Tally Record
                    return [4 /*yield*/, __1.prisma.oCMTally.update({
                            where: {
                                dbId: ocmTallyfind.dbId
                            },
                            data: {
                                periodId: OCM_periodId.periodId,
                                result: body.rgResult.opponents[0].result,
                                tunePower: (_c = body.car) === null || _c === void 0 ? void 0 : _c.tunePower,
                                tuneHandling: (_d = body.car) === null || _d === void 0 ? void 0 : _d.tuneHandling
                            }
                        })];
                case 25:
                    // Update the OCM Tally Record
                    _e.sent();
                    _e.label = 26;
                case 26: return [3 /*break*/, 29];
                case 27: 
                // Update ghost battle record
                return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.create({
                        data: __assign(__assign({}, saveExGhostHistory), { competitionId: ocmEventDate.competitionId, periodId: 0 })
                    })];
                case 28:
                    // Update ghost battle record
                    _e.sent();
                    _e.label = 29;
                case 29: 
                // Return the value to 'BASE_PATH/src/util/games/ghost.ts'
                return [2 /*return*/, { updateNewTrail: updateNewTrail }];
            }
        });
    });
}
exports.saveOCMGhostHistory = saveOCMGhostHistory;
// Save VSORG ghost history battle
function saveVSORGGhostHistory(body) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var expeditionResult, date, dataExpedition, checkExpeditionData, date_1, i, date_2, i, updateNewTrail, saveExGhostHistory, car, rgResult, getArea_1, getArea, checkWantedCar, dataWantedGhost, dataWantedGhost, checkFTTicketPiece;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Saving VSORG Ghost Battle History');
                    expeditionResult = (_a = body.rgResult) === null || _a === void 0 ? void 0 : _a.expeditionResult;
                    date = Math.floor(new Date().getTime() / 1000);
                    if (!expeditionResult) return [3 /*break*/, 10];
                    dataExpedition = {
                        ghostExpeditionId: common.sanitizeInput(expeditionResult.ghostExpeditionId),
                        sugorokuPoint: common.sanitizeInput(expeditionResult.sugorokuPoint),
                        earnedScore: common.sanitizeInput(expeditionResult.earnedScore),
                        score: common.sanitizeInput(expeditionResult.score),
                    };
                    return [4 /*yield*/, __1.prisma.ghostExpedition.findFirst({
                            where: {
                                carId: body.carId
                            }
                        })];
                case 1:
                    checkExpeditionData = _b.sent();
                    if (!checkExpeditionData) return [3 /*break*/, 3];
                    return [4 /*yield*/, __1.prisma.ghostExpedition.update({
                            where: {
                                dbId: checkExpeditionData.dbId
                            },
                            data: __assign({}, dataExpedition)
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, __1.prisma.ghostExpedition.create({
                        data: __assign({ carId: body.carId }, dataExpedition)
                    })];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    if (!(expeditionResult.earnedItems.length !== 0)) return [3 /*break*/, 9];
                    console.log('User Item reward from VSORG available, continuing ...');
                    date_1 = Math.floor(new Date().getTime() / 1000);
                    i = 0;
                    _b.label = 6;
                case 6:
                    if (!(i < expeditionResult.earnedItems.length)) return [3 /*break*/, 9];
                    return [4 /*yield*/, __1.prisma.userItem.create({
                            data: {
                                category: expeditionResult.earnedItems[i].category,
                                itemId: expeditionResult.earnedItems[i].itemId,
                                userId: body.car.userId,
                                earnedAt: date_1,
                                type: 0
                            }
                        })];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 6];
                case 9:
                    if (expeditionResult.aftereventBonus.length !== 0) {
                        console.log('User Item after event reward from VSORG available, continuing ...');
                        date_2 = Math.floor(new Date().getTime() / 1000);
                        for (i = 0; i < expeditionResult.aftereventBonus.length; i++) {
                            /*
                            await prisma.userItem.create({
                                data: {
                                    category: expeditionResult.earnedItems![i].category,
                                    itemId: expeditionResult.earnedItems![i].itemId,
                                    userId: body.car!.userId!,
                                    earnedAt: date,
                                    type: 0
                                }
                            });*/
                        }
                    }
                    _b.label = 10;
                case 10:
                    updateNewTrail = true;
                    saveExGhostHistory = {};
                    car = body === null || body === void 0 ? void 0 : body.car;
                    if (car) {
                        saveExGhostHistory = {
                            carId: common.sanitizeInput(car.carId),
                            tunePower: common.sanitizeInput(car.tunePower),
                            tuneHandling: common.sanitizeInput(car.tuneHandling),
                            playedAt: common.sanitizeInputNotZero(body.playedAt),
                            playedShopName: config_1.Config.getConfig().shopName
                        };
                    }
                    rgResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    if (!rgResult) return [3 /*break*/, 12];
                    if (rgResult.opponents) {
                        // Get first opponent carId
                        saveExGhostHistory.opponent1CarId = rgResult.opponents[0].carId;
                        // Get first opponent tunePower
                        saveExGhostHistory.opponent1TunePower = rgResult.opponents[0].tunePower;
                        // Get first opponent tunePower
                        saveExGhostHistory.opponent1TuneHandling = rgResult.opponents[0].tuneHandling;
                        // Get the advantage distance between first opponent and user
                        saveExGhostHistory.opponent1Result = rgResult.opponents[0].result;
                    }
                    if (!common.sanitizeInput(rgResult.path)) return [3 /*break*/, 12];
                    return [4 /*yield*/, ghost_get_area_from_path.getArea(rgResult.path)];
                case 11:
                    getArea_1 = _b.sent();
                    saveExGhostHistory.area = getArea_1.area;
                    _b.label = 12;
                case 12: return [4 /*yield*/, __1.prisma.ghostBattleRecord.create({
                        data: saveExGhostHistory
                    })];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, ghost_get_area_from_path.getArea(rgResult.path)];
                case 14:
                    getArea = _b.sent();
                    return [4 /*yield*/, __1.prisma.ghostExpeditionWantedCar.findFirst({
                            where: {
                                carId: rgResult.opponents[0].carId,
                                area: getArea.area
                            }
                        })
                        // Wanted car available
                    ];
                case 15:
                    checkWantedCar = _b.sent();
                    if (!checkWantedCar) return [3 /*break*/, 20];
                    if (!(rgResult.opponents[0].result > 0)) return [3 /*break*/, 17];
                    console.log('Wanted Car Defeated');
                    return [4 /*yield*/, __1.prisma.ghostExpeditionWantedCar.delete({
                            where: {
                                dbId: checkWantedCar.dbId
                            }
                        })];
                case 16:
                    _b.sent();
                    return [3 /*break*/, 19];
                case 17:
                    console.log('Lose from Wanted Car');
                    dataWantedGhost = {
                        carId: common.sanitizeInput(rgResult.opponents[0].carId),
                        bonus: checkWantedCar.bonus + 1,
                        defeatedMeCount: checkWantedCar.defeatedMeCount + 1
                    };
                    return [4 /*yield*/, __1.prisma.ghostExpeditionWantedCar.update({
                            where: {
                                dbId: checkWantedCar.dbId
                            },
                            data: dataWantedGhost
                        })];
                case 18:
                    _b.sent();
                    _b.label = 19;
                case 19: return [3 /*break*/, 22];
                case 20:
                    if (!(rgResult.opponents[0].result < 0)) return [3 /*break*/, 22];
                    dataWantedGhost = {
                        carId: common.sanitizeInput(rgResult.opponents[0].carId),
                        bonus: 0,
                        numOfHostages: 1,
                        defeatedMeCount: 1,
                        area: getArea.area
                    };
                    console.log('Creating Wanted Car');
                    return [4 /*yield*/, __1.prisma.ghostExpeditionWantedCar.create({
                            data: dataWantedGhost
                        })];
                case 21:
                    _b.sent();
                    _b.label = 22;
                case 22: return [4 /*yield*/, __1.prisma.userItem.findMany({
                        where: {
                            userId: body.car.userId,
                            category: 202,
                            itemId: 2
                        }
                    })];
                case 23:
                    checkFTTicketPiece = _b.sent();
                    if (!(checkFTTicketPiece.length >= 6)) return [3 /*break*/, 26];
                    // Give full tune ticket :)
                    return [4 /*yield*/, __1.prisma.userItem.create({
                            data: {
                                userId: body.car.userId,
                                category: 203,
                                itemId: 5,
                                type: 0,
                                earnedAt: date
                            }
                        })];
                case 24:
                    // Give full tune ticket :)
                    _b.sent();
                    // Remove full tune ticket piece :(
                    return [4 /*yield*/, __1.prisma.userItem.deleteMany({
                            where: {
                                userId: body.car.userId,
                                category: 202,
                                itemId: 2,
                            }
                        })];
                case 25:
                    // Remove full tune ticket piece :(
                    _b.sent();
                    _b.label = 26;
                case 26: 
                // Sending stamp to opponents
                return [4 /*yield*/, ghost_stamp.sendStamp(body)];
                case 27:
                    // Sending stamp to opponents
                    _b.sent();
                    // Return the value to 'BASE_PATH/src/util/games/ghost.ts'
                    return [2 /*return*/, { updateNewTrail: updateNewTrail }];
            }
        });
    });
}
exports.saveVSORGGhostHistory = saveVSORGGhostHistory;
// Save VSORG ghost history battle but retiring
function saveVSORGGhostRetireHistory(body) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var ghostResult, date, dataGhost, getArea, dataWantedGhost, checkWantedCar, expeditionResult, dataExpedition, checkExpeditionData, i, i, checkFTTicketPiece;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Saving VSORG Retiring Ghost Battle History');
                    ghostResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    date = Math.floor(new Date().getTime() / 1000);
                    if (!ghostResult) return [3 /*break*/, 7];
                    dataGhost = {
                        rgPlayCount: common.sanitizeInput(ghostResult.rgPlayCount),
                    };
                    // Update the car properties
                    return [4 /*yield*/, __1.prisma.car.update({
                            where: {
                                carId: body.carId
                            },
                            data: __assign({}, dataGhost)
                        })];
                case 1:
                    // Update the car properties
                    _b.sent();
                    return [4 /*yield*/, ghost_get_area_from_path.getArea(ghostResult.path)];
                case 2:
                    getArea = _b.sent();
                    dataWantedGhost = {
                        carId: common.sanitizeInput(ghostResult.opponents[0].carId),
                        bonus: 0,
                        numOfHostages: 1,
                        defeatedMeCount: 1,
                        area: getArea.area
                    };
                    return [4 /*yield*/, __1.prisma.ghostExpeditionWantedCar.findFirst({
                            where: {
                                carId: dataWantedGhost.carId
                            }
                        })];
                case 3:
                    checkWantedCar = _b.sent();
                    if (!checkWantedCar) return [3 /*break*/, 5];
                    console.log('Updating Wanted Car');
                    dataWantedGhost.bonus = checkWantedCar.bonus + 1;
                    dataWantedGhost.defeatedMeCount = checkWantedCar.defeatedMeCount + 1;
                    return [4 /*yield*/, __1.prisma.ghostExpeditionWantedCar.update({
                            where: {
                                dbId: checkWantedCar.dbId
                            },
                            data: dataWantedGhost
                        })];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    console.log('Creating Wanted Car');
                    return [4 /*yield*/, __1.prisma.ghostExpeditionWantedCar.create({
                            data: dataWantedGhost
                        })];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    expeditionResult = (_a = body.rgResult) === null || _a === void 0 ? void 0 : _a.expeditionResult;
                    if (!expeditionResult) return [3 /*break*/, 17];
                    dataExpedition = {
                        ghostExpeditionId: common.sanitizeInput(expeditionResult.ghostExpeditionId),
                        sugorokuPoint: common.sanitizeInput(expeditionResult.sugorokuPoint),
                        earnedScore: common.sanitizeInput(expeditionResult.earnedScore),
                        score: common.sanitizeInput(expeditionResult.score),
                    };
                    return [4 /*yield*/, __1.prisma.ghostExpedition.findFirst({
                            where: {
                                carId: body.carId
                            }
                        })];
                case 8:
                    checkExpeditionData = _b.sent();
                    if (!checkExpeditionData) return [3 /*break*/, 10];
                    return [4 /*yield*/, __1.prisma.ghostExpedition.update({
                            where: {
                                dbId: checkExpeditionData.dbId
                            },
                            data: __assign({}, dataExpedition)
                        })];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, __1.prisma.ghostExpedition.create({
                        data: __assign({ carId: body.carId }, dataExpedition)
                    })];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12:
                    if (!(expeditionResult.earnedItems.length !== 0)) return [3 /*break*/, 16];
                    console.log('User Item reward from VSORG available, continuing ...');
                    i = 0;
                    _b.label = 13;
                case 13:
                    if (!(i < expeditionResult.earnedItems.length)) return [3 /*break*/, 16];
                    return [4 /*yield*/, __1.prisma.userItem.create({
                            data: {
                                category: expeditionResult.earnedItems[i].category,
                                itemId: expeditionResult.earnedItems[i].itemId,
                                userId: body.car.userId,
                                earnedAt: date,
                                type: 0
                            }
                        })];
                case 14:
                    _b.sent();
                    _b.label = 15;
                case 15:
                    i++;
                    return [3 /*break*/, 13];
                case 16:
                    if (expeditionResult.aftereventBonus.length !== 0) {
                        console.log('User Item after event reward from VSORG available, continuing ...');
                        for (i = 0; i < expeditionResult.aftereventBonus.length; i++) {
                            /*
                            await prisma.userItem.create({
                                data: {
                                    category: expeditionResult.earnedItems![i].category,
                                    itemId: expeditionResult.earnedItems![i].itemId,
                                    userId: body.car!.userId!,
                                    earnedAt: date,
                                    type: 0
                                }
                            });*/
                        }
                    }
                    _b.label = 17;
                case 17: return [4 /*yield*/, __1.prisma.userItem.findMany({
                        where: {
                            userId: body.car.userId,
                            category: 202,
                            itemId: 2
                        }
                    })];
                case 18:
                    checkFTTicketPiece = _b.sent();
                    if (!(checkFTTicketPiece.length >= 6)) return [3 /*break*/, 21];
                    // Give full tune ticket :)
                    return [4 /*yield*/, __1.prisma.userItem.create({
                            data: {
                                userId: body.car.userId,
                                category: 203,
                                itemId: 5,
                                type: 0,
                                earnedAt: date
                            }
                        })];
                case 19:
                    // Give full tune ticket :)
                    _b.sent();
                    // Remove full tune ticket piece :(
                    return [4 /*yield*/, __1.prisma.userItem.deleteMany({
                            where: {
                                userId: body.car.userId,
                                category: 202,
                                itemId: 2,
                            }
                        })];
                case 20:
                    // Remove full tune ticket piece :(
                    _b.sent();
                    _b.label = 21;
                case 21: return [2 /*return*/];
            }
        });
    });
}
exports.saveVSORGGhostRetireHistory = saveVSORGGhostRetireHistory;
//# sourceMappingURL=ghost_history.js.map