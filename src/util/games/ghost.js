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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveGhostBattleResult = void 0;
var __1 = require("../..");
var wm_proto_1 = __importDefault(require("../../wmmt/wm.proto"));
// Import Util
var common = __importStar(require("../../util/common"));
var ghost_history = __importStar(require("../ghost/ghost_history"));
var ghost_stamp = __importStar(require("../ghost/ghost_stamp"));
var ghost_crown = __importStar(require("../ghost/ghost_crown"));
// Save ghost battle result
function saveGhostBattleResult(body, car) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var ghostModePlay, updateNewTrail, OCMModePlay, dataGhost, dataCar, dataCarGTWing, dataHighway, cars, ghostResult, stampSheet, winCounter, i, highwayResult, ghost_historys, _d, rgResult, data, countOCM, ghostResult, dataGhost, date, ocmEventDate, rgResult, data, countOCM, dataGhost;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    ghostModePlay = false;
                    updateNewTrail = false;
                    OCMModePlay = false;
                    if (!!(body.retired || body.timeup)) return [3 /*break*/, 79];
                    console.log('Saving Ghost Battle Result');
                    // Set ghost mode play to true for saving the ghost trail later
                    ghostModePlay = true;
                    dataGhost = void 0;
                    dataCar = void 0;
                    dataCarGTWing = void 0;
                    dataHighway = void 0;
                    cars = body === null || body === void 0 ? void 0 : body.car;
                    // Car is set
                    if (cars) {
                        // Error handling to prevent set ghost level to out of range value
                        if (cars.ghostLevel) {
                            if (cars.ghostLevel < 1) {
                                cars.ghostLevel = 1;
                            }
                            else if (cars.ghostLevel > 11) {
                                cars.ghostLevel = 10;
                            }
                        }
                        // Car update data
                        dataCar = {
                            wheel: common.sanitizeInput(cars.wheel),
                            wheelColor: common.sanitizeInput(cars.wheelColor),
                            aero: common.sanitizeInput(cars.aero),
                            bonnet: common.sanitizeInput(cars.bonnet),
                            wing: common.sanitizeInput(cars.wing),
                            mirror: common.sanitizeInput(cars.mirror),
                            neon: common.sanitizeInput(cars.neon),
                            trunk: common.sanitizeInput(cars.trunk),
                            plate: common.sanitizeInput(cars.plate),
                            plateColor: common.sanitizeInput(cars.plateColor),
                            plateNumber: common.sanitizeInput(cars.plateNumber),
                            ghostLevel: common.sanitizeInput(cars.ghostLevel),
                        };
                        if (cars.gtWing) {
                            dataCarGTWing = {
                                pillar: common.sanitizeInput(cars.gtWing.pillar),
                                pillarMaterial: common.sanitizeInput(cars.gtWing.pillarMaterial),
                                mainWing: common.sanitizeInput(cars.gtWing.mainWing),
                                mainWingColor: common.sanitizeInput(cars.gtWing.mainWingColor),
                                wingTip: common.sanitizeInput(cars.gtWing.wingTip),
                                material: common.sanitizeInput(cars.gtWing.material),
                            };
                        }
                    }
                    ghostResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    // ghostResult is set
                    if (ghostResult) {
                        stampSheet = undefined;
                        if (ghostResult.stampSheet.length === 0) {
                            if (ghostResult.stampSheetCount !== null && ghostResult.stampSheetCount !== undefined && ghostResult.stampSheetCount !== 0) {
                                stampSheet = ghostResult.stampSheet;
                            }
                        }
                        // Stamp Sheet available
                        else if (ghostResult.stampSheet.length > 0) {
                            stampSheet = ghostResult.stampSheet;
                        }
                        // Ghost update data
                        dataGhost = {
                            rgRegionMapScore: common.sanitizeInput(ghostResult.rgRegionMapScore),
                            rgPlayCount: common.sanitizeInput(ghostResult.rgPlayCount),
                            dressupLevel: common.sanitizeInput(ghostResult.dressupLevel),
                            dressupPoint: common.sanitizeInput(ghostResult.dressupPoint),
                            stampSheet: stampSheet,
                            stampSheetCount: common.sanitizeInputNotZero(ghostResult.stampSheetCount),
                            rgTrophy: common.sanitizeInputNotZero(ghostResult.rgTrophy),
                        };
                        // Count total win based on region map score
                        if (ghostResult.rgRegionMapScore && ghostResult.rgRegionMapScore.length !== 0) {
                            winCounter = 0;
                            // Count the total win
                            for (i = 0; i < ghostResult.rgRegionMapScore.length; i++) {
                                winCounter += ghostResult.rgRegionMapScore[i];
                            }
                            // Set the data 
                            dataGhost.rgWinCount = winCounter;
                            dataGhost.rgScore = winCounter;
                        }
                    }
                    highwayResult = (_a = body.rgResult) === null || _a === void 0 ? void 0 : _a.highwayResult;
                    // ghostResult is set
                    if (highwayResult) {
                        // Highway Ghost update data
                        dataHighway = {
                            rgHighwayClearCount: common.sanitizeInput(highwayResult.rgHighwayClearCount),
                            rgHighwayPoint: common.sanitizeInput(highwayResult.rgHighwayPoint),
                            rgHighwayStationClearBits: common.sanitizeInput(highwayResult.rgHighwayStationClearBits),
                            rgHighwayPreviousDice: common.sanitizeInput(highwayResult.rgHighwayPreviousDice),
                        };
                    }
                    // Update the car properties
                    return [4 /*yield*/, __1.prisma.car.update({
                            where: {
                                carId: body.carId
                            },
                            data: __assign(__assign(__assign({}, dataGhost), dataCar), dataHighway)
                        })];
                case 1:
                    // Update the car properties
                    _e.sent();
                    return [4 /*yield*/, __1.prisma.carGTWing.update({
                            where: {
                                dbId: body.carId
                            },
                            data: __assign({}, dataCarGTWing)
                        })];
                case 2:
                    _e.sent();
                    ghost_historys = void 0;
                    _d = body.rgResult.selectionMethod;
                    switch (_d) {
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SEARCH_BY_REGION: return [3 /*break*/, 3];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_LEVEL: return [3 /*break*/, 6];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_CROWN_MATCH: return [3 /*break*/, 9];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_STAMP_MATCH: return [3 /*break*/, 15];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_FROM_HISTORY: return [3 /*break*/, 18];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SEARCH_BY_SHOP: return [3 /*break*/, 21];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SEARCH_BY_NAME: return [3 /*break*/, 24];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_ACCEPT_CHALLENGER: return [3 /*break*/, 27];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_APPOINTMENT: return [3 /*break*/, 30];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_DEFAULT_OPPONENT: return [3 /*break*/, 33];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_COMPETITION: return [3 /*break*/, 34];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_FROM_BOOKMARKS: return [3 /*break*/, 42];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_EXPEDITION: return [3 /*break*/, 45];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_PLACE: return [3 /*break*/, 48];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_OTHER_PLACE: return [3 /*break*/, 51];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_MANUFACTURER: return [3 /*break*/, 54];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_OTHER_MANUFACTURER: return [3 /*break*/, 57];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_PLAYED: return [3 /*break*/, 60];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_REGION_MANUFACTURER: return [3 /*break*/, 63];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_REGION_PLAYED: return [3 /*break*/, 66];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_REGION_STATION: return [3 /*break*/, 69];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_REGION_BOSS: return [3 /*break*/, 72];
                        case wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_REGION_PLACE: return [3 /*break*/, 75];
                    }
                    return [3 /*break*/, 78];
                case 3:
                    console.log('Normal Ghost Mode Found - Search by Region');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 4:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 5:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 6:
                    console.log('Normal Ghost Mode Found - Select by Level');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 7:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 8:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 9:
                    console.log('Crown Ghost Mode Found');
                    if (!(((_b = body.rgResult) === null || _b === void 0 ? void 0 : _b.acquireCrown) !== false && ((_c = body.rgResult) === null || _c === void 0 ? void 0 : _c.acquireCrown))) return [3 /*break*/, 11];
                    console.log('Win the Crown Ghost Battle');
                    return [4 /*yield*/, ghost_crown.saveCrownData(body)];
                case 10:
                    _e.sent();
                    updateNewTrail = true;
                    return [3 /*break*/, 12];
                case 11:
                    console.log('Lose the Crown Ghost Battle');
                    updateNewTrail = false;
                    _e.label = 12;
                case 12: return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 13:
                    _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 14:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    return [3 /*break*/, 78];
                case 15:
                    console.log('Normal Ghost Mode Found - Select Stamp Match');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 16:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 17:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 18:
                    console.log('Normal Ghost Mode Found - Select from History');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 19:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 20:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 21:
                    console.log('Normal Ghost Mode Found - Search by Shop');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 22:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 23:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 24:
                    console.log('Normal Ghost Mode Found - Search by Name');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 25:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 26:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 27:
                    console.log('Normal Ghost Mode Found - Challenger');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 28:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 29:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 30:
                    console.log('OCM Ghost Mode Found - Appointment (VS HoF Ghost)');
                    if (!(body.rgResult.opponents[0].result >= 0)) return [3 /*break*/, 32];
                    // Delete all the records
                    return [4 /*yield*/, __1.prisma.ghostRegisteredFromTerminal.deleteMany({
                            where: {
                                carId: Number(body.carId)
                            }
                        })];
                case 31:
                    // Delete all the records
                    _e.sent();
                    _e.label = 32;
                case 32: return [3 /*break*/, 78];
                case 33:
                    {
                        console.log('Normal Ghost Mode Found - Default Opponent');
                        // TODO: idk
                        return [3 /*break*/, 78];
                    }
                    _e.label = 34;
                case 34:
                    console.log('OCM Ghost Mode Found');
                    OCMModePlay = true;
                    rgResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    if (!rgResult) return [3 /*break*/, 41];
                    data = {
                        carId: body.carId,
                        competitionId: common.sanitizeInput(rgResult.competitionId),
                        periodId: common.sanitizeInput(rgResult.periodId) || 0,
                        brakingPoint: common.sanitizeInput(rgResult.brakingPoint) || 0,
                        playedAt: common.sanitizeInput(body.playedAt),
                    };
                    return [4 /*yield*/, __1.prisma.oCMPlayRecord.count({
                            where: {
                                competitionId: data.competitionId,
                                carId: body.carId
                            }
                        })];
                case 35:
                    countOCM = _e.sent();
                    if (!(countOCM !== 0)) return [3 /*break*/, 37];
                    console.log('OCM Play Record found');
                    console.log('Updaing OCM Play Record entry');
                    return [4 /*yield*/, __1.prisma.oCMPlayRecord.updateMany({
                            where: {
                                carId: data.carId,
                                competitionId: data.competitionId,
                            },
                            data: data
                        })];
                case 36:
                    _e.sent();
                    return [3 /*break*/, 39];
                case 37:
                    console.log('OCM Play Record not found');
                    console.log('Creating new OCM Play Record entry');
                    return [4 /*yield*/, __1.prisma.oCMPlayRecord.create({
                            data: data
                        })];
                case 38:
                    _e.sent();
                    _e.label = 39;
                case 39: return [4 /*yield*/, ghost_history.saveOCMGhostHistory(body)];
                case 40:
                    ghost_historys = _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    _e.label = 41;
                case 41: return [3 /*break*/, 78];
                case 42:
                    console.log('Normal Ghost Mode Found - Select from Bookmars');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 43:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 44:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 45:
                    console.log('Normal Ghost Mode Found - VS Other Region (Expedition)');
                    return [4 /*yield*/, ghost_history.saveVSORGGhostHistory(body)];
                case 46:
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 47:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 48:
                    console.log('Normal Ghost Mode Found - Select by Place');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 49:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 50:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 51:
                    console.log('Normal Ghost Mode Found - Select by Other Place');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 52:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 53:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 54:
                    console.log('Normal Ghost Mode Found - Select by Manufacturer');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 55:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 56:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 57:
                    console.log('Normal Ghost Mode Found - Select by Other Manufacturer');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 58:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 59:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 60:
                    console.log('Normal Ghost Mode Found - Select by Played');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 61:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 62:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 63:
                    console.log('Normal Ghost Mode Found - Select by Region Manufacturer');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 64:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 65:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 66:
                    console.log('Normal Ghost Mode Found - Select by Region Played');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 67:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 68:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 69:
                    console.log('Normal Ghost Mode Found - Select by Region Station');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 70:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 71:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 72:
                    console.log('Normal Ghost Mode Found - Select by Region Boss');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 73:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 74:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 75:
                    console.log('Normal Ghost Mode Found - Select by Region Place');
                    return [4 /*yield*/, ghost_history.saveGhostHistory(body)];
                case 76:
                    // TODO: Make saving
                    ghost_historys = _e.sent();
                    // Return Stamp (Shuttle Match)
                    return [4 /*yield*/, ghost_stamp.shuttleReturnStamp(body)];
                case 77:
                    // Return Stamp (Shuttle Match)
                    _e.sent();
                    // Update the updateNewTrail value
                    updateNewTrail = ghost_historys.updateNewTrail;
                    return [3 /*break*/, 78];
                case 78: return [3 /*break*/, 92];
                case 79:
                    if (!(body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SEARCH_BY_REGION ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_BY_LEVEL ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_CROWN_MATCH ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_STAMP_MATCH ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_FROM_HISTORY ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SEARCH_BY_SHOP ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SEARCH_BY_NAME ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_ACCEPT_CHALLENGER ||
                        body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_SELECT_FROM_BOOKMARKS)) return [3 /*break*/, 82];
                    console.log('Normal Ghost Mode Found but Retiring');
                    ghostResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    if (!ghostResult) return [3 /*break*/, 81];
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
                case 80:
                    // Update the car properties
                    _e.sent();
                    _e.label = 81;
                case 81: return [3 /*break*/, 92];
                case 82:
                    if (!(body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_COMPETITION)) return [3 /*break*/, 90];
                    date = Math.floor(new Date().getTime() / 1000);
                    return [4 /*yield*/, __1.prisma.oCMEvent.findFirst({
                            where: {
                                // qualifyingPeriodStartAt is less than current date
                                qualifyingPeriodStartAt: { lte: date },
                                // competitionEndAt is greater than current date
                                competitionEndAt: { gte: date },
                            },
                            orderBy: {
                                competitionId: 'desc'
                            }
                        })];
                case 83:
                    ocmEventDate = _e.sent();
                    if (!(ocmEventDate.qualifyingPeriodStartAt < date && ocmEventDate.qualifyingPeriodCloseAt > date)) return [3 /*break*/, 88];
                    console.log('OCM Ghost Mode Found but Retiring');
                    rgResult = body === null || body === void 0 ? void 0 : body.rgResult;
                    if (!rgResult) return [3 /*break*/, 88];
                    data = {
                        carId: body.carId,
                        competitionId: common.sanitizeInput(rgResult.competitionId),
                        periodId: common.sanitizeInput(rgResult.periodId) || 0,
                        brakingPoint: common.sanitizeInput(rgResult.brakingPoint) || 0,
                        playedAt: common.sanitizeInput(body.playedAt),
                    };
                    return [4 /*yield*/, __1.prisma.oCMPlayRecord.count({
                            where: {
                                competitionId: data.competitionId,
                                carId: body.carId
                            }
                        })];
                case 84:
                    countOCM = _e.sent();
                    if (!(countOCM !== 0)) return [3 /*break*/, 86];
                    console.log('OCM Play Record found');
                    console.log('Updaing OCM Play Record entry');
                    return [4 /*yield*/, __1.prisma.oCMPlayRecord.updateMany({
                            where: {
                                carId: data.carId,
                                competitionId: data.competitionId,
                            },
                            data: data
                        })];
                case 85:
                    _e.sent();
                    return [3 /*break*/, 88];
                case 86:
                    console.log('OCM Play Record not found');
                    console.log('Creating new OCM Play Record entry');
                    return [4 /*yield*/, __1.prisma.oCMPlayRecord.create({
                            data: data
                        })];
                case 87:
                    _e.sent();
                    _e.label = 88;
                case 88:
                    dataGhost = {
                        rgPlayCount: common.sanitizeInput(body.rgResult.rgPlayCount),
                    };
                    // Update the car properties
                    return [4 /*yield*/, __1.prisma.car.update({
                            where: {
                                carId: body.carId
                            },
                            data: __assign({}, dataGhost)
                        })];
                case 89:
                    // Update the car properties
                    _e.sent();
                    return [3 /*break*/, 92];
                case 90:
                    if (!(body.rgResult.selectionMethod === wm_proto_1.default.wm.protobuf.GhostSelectionMethod.GHOST_EXPEDITION)) return [3 /*break*/, 92];
                    console.log('VSORG (Expedition) Ghost Mode Found but Retiring');
                    return [4 /*yield*/, ghost_history.saveVSORGGhostRetireHistory(body)];
                case 91:
                    _e.sent();
                    _e.label = 92;
                case 92: 
                // TODO: Highway Ghost Mode Retiring Saving
                // Return the value to 'BASE_PATH/src/modules/game.ts'
                return [2 /*return*/, { ghostModePlay: ghostModePlay, updateNewTrail: updateNewTrail, OCMModePlay: OCMModePlay }];
            }
        });
    });
}
exports.saveGhostBattleResult = saveGhostBattleResult;
//# sourceMappingURL=ghost.js.map