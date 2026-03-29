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
exports.savePathAndTuning = exports.saveNormalGhostTrail = exports.saveCrownGhostTrail = exports.saveOCMGhostTrail = void 0;
var __1 = require("../..");
// Save OCM ghost battle result
function saveOCMGhostTrail(body) {
    return __awaiter(this, void 0, void 0, function () {
        var date, ocmEventDate, OCM_periodId, ocmMainDraws, periodId, ghostResult, data, grArea, grRamp, grPath, gtCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Checking OCM Ghost Battle trail history');
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
                case 1:
                    ocmEventDate = _a.sent();
                    if (!ocmEventDate) return [3 /*break*/, 7];
                    return [4 /*yield*/, __1.prisma.oCMPeriod.findFirst({
                            where: {
                                competitionDbId: ocmEventDate.dbId,
                                competitionId: ocmEventDate.competitionId,
                                // StartAt is less than current date
                                startAt: { lte: date },
                                // CloseAt is greater than current date
                                closeAt: { gte: date }
                            },
                            select: {
                                periodId: true
                            }
                        })];
                case 2:
                    OCM_periodId = _a.sent();
                    ocmMainDraws = false;
                    periodId = 0;
                    // Current date is OCM main draw
                    if (ocmEventDate.competitionStartAt < date && ocmEventDate.competitionCloseAt > date) {
                        periodId = OCM_periodId.periodId;
                        ocmMainDraws = true;
                    }
                    // Current date is OCM qualifying day
                    else if (ocmEventDate.qualifyingPeriodStartAt < date && ocmEventDate.qualifyingPeriodCloseAt > date) {
                        ocmMainDraws = false;
                    }
                    ghostResult = body === null || body === void 0 ? void 0 : body.ghost;
                    data = void 0;
                    if (!ghostResult) return [3 /*break*/, 7];
                    grArea = 0;
                    grRamp = 0;
                    grPath = 0;
                    if (ghostResult.area) {
                        grArea = ghostResult.area;
                    }
                    if (ghostResult.ramp) {
                        grRamp = ghostResult.ramp;
                    }
                    if (ghostResult.path) {
                        grPath = ghostResult.path;
                    }
                    data = {
                        carId: Number(ghostResult.car.carId),
                        area: grArea,
                        ramp: grRamp,
                        path: grPath,
                        trail: body.trail || undefined,
                        competitionId: ocmEventDate.competitionId,
                        playedAt: ghostResult.car.lastPlayedAt || undefined,
                        tunePower: ghostResult.car.tunePower || undefined,
                        tuneHandling: ghostResult.car.tuneHandling || undefined,
                        ocmMainDraw: ocmMainDraws
                    };
                    return [4 /*yield*/, __1.prisma.oCMGhostTrail.findFirst({
                            where: {
                                carId: ghostResult.car.carId,
                                competitionId: ocmEventDate.competitionId,
                                area: ghostResult.area,
                            },
                            orderBy: {
                                playedAt: 'desc'
                            }
                        })];
                case 3:
                    gtCount = _a.sent();
                    if (!gtCount) return [3 /*break*/, 5];
                    console.log('OCM Ghost Trail history found');
                    console.log('Updating OCM ghost trail to the newest trail');
                    // Update the data
                    return [4 /*yield*/, __1.prisma.oCMGhostTrail.update({
                            where: {
                                dbId: gtCount.dbId
                            },
                            data: __assign(__assign({}, data), { periodId: periodId })
                        })];
                case 4:
                    // Update the data
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    console.log('No OCM ghost trail history');
                    console.log('Creating new OCM ghost trail entry');
                    // Create new data
                    return [4 /*yield*/, __1.prisma.oCMGhostTrail.create({
                            data: __assign(__assign({}, data), { periodId: periodId })
                        })];
                case 6:
                    // Create new data
                    _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.saveOCMGhostTrail = saveOCMGhostTrail;
// Save Crown ghost battle result
function saveCrownGhostTrail(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __awaiter(this, void 0, void 0, function () {
        var ghostResult, data, grArea, grRamp, grPath, gtCount;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    console.log('Checking Crown Ghost Battle trail history');
                    ghostResult = body === null || body === void 0 ? void 0 : body.ghost;
                    if (!ghostResult) return [3 /*break*/, 7];
                    grArea = 0;
                    grRamp = 0;
                    grPath = 0;
                    if (ghostResult.area) {
                        grArea = ghostResult.area;
                    }
                    if (ghostResult.ramp) {
                        grRamp = ghostResult.ramp;
                    }
                    if (ghostResult.path) {
                        grPath = ghostResult.path;
                    }
                    data = {
                        carId: Number(ghostResult.car.carId),
                        area: grArea,
                        ramp: grRamp,
                        path: grPath,
                        trail: body.trail || undefined,
                        time: body.time || undefined,
                        driveData: ((_a = body.driveData) === null || _a === void 0 ? void 0 : _a.data) || undefined,
                        driveDMergeSerial: ((_b = body.driveData) === null || _b === void 0 ? void 0 : _b.mergeSerial) || undefined,
                        trendBinaryByArea: ((_c = body.trendBinaryByArea) === null || _c === void 0 ? void 0 : _c.data) || undefined,
                        byAreaMergeSerial: ((_d = body.trendBinaryByArea) === null || _d === void 0 ? void 0 : _d.mergeSerial) || undefined,
                        trendBinaryByCar: ((_e = body.trendBinaryByCar) === null || _e === void 0 ? void 0 : _e.data) || undefined,
                        byCarMergeSerial: ((_f = body.trendBinaryByCar) === null || _f === void 0 ? void 0 : _f.mergeSerial) || undefined,
                        trendBinaryByUser: ((_g = body.trendBinaryByUser) === null || _g === void 0 ? void 0 : _g.data) || undefined,
                        byUserMergeSerial: ((_h = body.trendBinaryByUser) === null || _h === void 0 ? void 0 : _h.mergeSerial) || undefined,
                        playedAt: ghostResult.car.lastPlayedAt || undefined,
                        tunePower: ghostResult.car.tunePower || undefined,
                        tuneHandling: ghostResult.car.tuneHandling || undefined,
                        crownBattle: true,
                    };
                    return [4 /*yield*/, __1.prisma.ghostTrail.findFirst({
                            where: {
                                area: ghostResult.area,
                                crownBattle: true,
                            },
                            orderBy: {
                                playedAt: 'desc'
                            }
                        })];
                case 1:
                    gtCount = _j.sent();
                    if (!gtCount) return [3 /*break*/, 3];
                    console.log('Crown Trail history found');
                    console.log('Updating crown trail to the newest trail');
                    // Update the data
                    return [4 /*yield*/, __1.prisma.ghostTrail.update({
                            where: {
                                dbId: gtCount.dbId
                            },
                            data: data
                        })];
                case 2:
                    // Update the data
                    _j.sent();
                    return [3 /*break*/, 5];
                case 3:
                    console.log('No crown trail history');
                    console.log('Creating new crown trail entry');
                    // Create new data
                    return [4 /*yield*/, __1.prisma.ghostTrail.create({
                            data: data
                        })];
                case 4:
                    // Create new data
                    _j.sent();
                    _j.label = 5;
                case 5:
                    // Update crown randomized ramp and path to the correct value
                    console.log('Updating crown\'s area records to the correct value');
                    return [4 /*yield*/, __1.prisma.carCrown.update({
                            where: {
                                area: ghostResult.area
                            },
                            data: {
                                area: ghostResult.area,
                                ramp: ghostResult.ramp,
                                path: ghostResult.path,
                                playedAt: ghostResult.car.lastPlayedAt
                            }
                        })];
                case 6:
                    _j.sent();
                    _j.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.saveCrownGhostTrail = saveCrownGhostTrail;
// Save Crown ghost battle result
function saveNormalGhostTrail(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __awaiter(this, void 0, void 0, function () {
        var ghostResult, data, grArea, grRamp, grPath, gtCount, gdbId;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    console.log('Checking Normal Ghost Battle trail history');
                    ghostResult = body === null || body === void 0 ? void 0 : body.ghost;
                    if (!ghostResult) return [3 /*break*/, 5];
                    grArea = 0;
                    grRamp = 0;
                    grPath = 0;
                    if (ghostResult.area) {
                        grArea = ghostResult.area;
                    }
                    if (ghostResult.ramp) {
                        grRamp = ghostResult.ramp;
                    }
                    if (ghostResult.path) {
                        grPath = ghostResult.path;
                    }
                    data = {
                        carId: Number(ghostResult.car.carId),
                        area: grArea,
                        ramp: grRamp,
                        path: grPath,
                        trail: body.trail || undefined,
                        time: Number(body.time) || undefined,
                        driveData: ((_a = body.driveData) === null || _a === void 0 ? void 0 : _a.data) || undefined,
                        driveDMergeSerial: ((_b = body.driveData) === null || _b === void 0 ? void 0 : _b.mergeSerial) || undefined,
                        trendBinaryByArea: ((_c = body.trendBinaryByArea) === null || _c === void 0 ? void 0 : _c.data) || undefined,
                        byAreaMergeSerial: ((_d = body.trendBinaryByArea) === null || _d === void 0 ? void 0 : _d.mergeSerial) || undefined,
                        trendBinaryByCar: ((_e = body.trendBinaryByCar) === null || _e === void 0 ? void 0 : _e.data) || undefined,
                        byCarMergeSerial: ((_f = body.trendBinaryByCar) === null || _f === void 0 ? void 0 : _f.mergeSerial) || undefined,
                        trendBinaryByUser: ((_g = body.trendBinaryByUser) === null || _g === void 0 ? void 0 : _g.data) || undefined,
                        byUserMergeSerial: ((_h = body.trendBinaryByUser) === null || _h === void 0 ? void 0 : _h.mergeSerial) || undefined,
                        playedAt: ghostResult.car.lastPlayedAt || undefined,
                        tunePower: ghostResult.car.tunePower || undefined,
                        tuneHandling: ghostResult.car.tuneHandling || undefined,
                        crownBattle: false,
                    };
                    return [4 /*yield*/, __1.prisma.ghostTrail.findFirst({
                            where: {
                                carId: ghostResult.car.carId,
                                area: ghostResult.area,
                                path: ghostResult.path,
                                crownBattle: false,
                            },
                            orderBy: {
                                playedAt: 'desc'
                            }
                        })];
                case 1:
                    gtCount = _j.sent();
                    if (!gtCount) return [3 /*break*/, 3];
                    console.log('Trail history found');
                    console.log('Updating trail to the newest trail');
                    gdbId = gtCount.dbId;
                    return [4 /*yield*/, __1.prisma.ghostTrail.update({
                            where: {
                                dbId: gdbId
                            },
                            data: data
                        })];
                case 2:
                    _j.sent();
                    return [3 /*break*/, 5];
                case 3:
                    console.log('No trail history');
                    console.log('Creating new trail entry');
                    // Create new data
                    return [4 /*yield*/, __1.prisma.ghostTrail.create({
                            data: data
                        })];
                case 4:
                    // Create new data
                    _j.sent();
                    _j.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.saveNormalGhostTrail = saveNormalGhostTrail;
// Save path and tuning  result
function savePathAndTuning(body) {
    return __awaiter(this, void 0, void 0, function () {
        var ghostResult, cPaT_count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Saving Car Path and Tuning');
                    ghostResult = body === null || body === void 0 ? void 0 : body.ghost;
                    if (!ghostResult) return [3 /*break*/, 5];
                    return [4 /*yield*/, __1.prisma.carPathandTuning.findFirst({
                            where: {
                                carId: ghostResult.car.carId,
                                area: ghostResult.area,
                                path: ghostResult.path,
                            },
                            orderBy: {
                                lastPlayedAt: 'desc'
                            }
                        })];
                case 1:
                    cPaT_count = _a.sent();
                    if (!cPaT_count) return [3 /*break*/, 3];
                    console.log('Updating path and tuning record');
                    return [4 /*yield*/, __1.prisma.carPathandTuning.update({
                            where: {
                                dbId: cPaT_count.dbId
                            },
                            data: {
                                carId: ghostResult.car.carId,
                                area: ghostResult.area,
                                ramp: ghostResult.ramp,
                                path: ghostResult.path,
                                tunePower: ghostResult.car.tunePower,
                                tuneHandling: ghostResult.car.tuneHandling,
                                lastPlayedAt: ghostResult.car.lastPlayedAt
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    console.log('Creating new path and tuning record');
                    return [4 /*yield*/, __1.prisma.carPathandTuning.create({
                            data: {
                                carId: ghostResult.car.carId,
                                area: ghostResult.area,
                                ramp: ghostResult.ramp,
                                path: ghostResult.path,
                                tunePower: ghostResult.car.tunePower,
                                tuneHandling: ghostResult.car.tuneHandling,
                                lastPlayedAt: ghostResult.car.lastPlayedAt
                            }
                        })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.savePathAndTuning = savePathAndTuning;
//# sourceMappingURL=ghost_save_trail.js.map