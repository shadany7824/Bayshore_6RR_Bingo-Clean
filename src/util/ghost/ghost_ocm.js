"use strict";
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
exports.ocmGiveNamePlateReward = exports.ocmQualifyingDay = exports.ocmCompetitionDay = exports.ocmTallying = void 0;
var __1 = require("../..");
var wm_proto_1 = __importDefault(require("../../wmmt/wm.proto"));
// OCM Tallying
function ocmTallying(body, periodId, ended) {
    return __awaiter(this, void 0, void 0, function () {
        var gbRecordTally, arr, top1advantage, currentResult, i, getTrail, data, checkPlayRecord, i, dataLeft, OCMTally, top1advantage, currentResult, i, getTrail, data, checkOCMTally, OCMTally, top1advantage, currentResult, i, getTrail, data, checkOCMTally;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(ended === false)) return [3 /*break*/, 27];
                    periodId = periodId - 1;
                    if (!(periodId === 0)) return [3 /*break*/, 15];
                    console.log('Tallying data from Qualifying');
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.findMany({
                            where: {
                                ocmMainDraw: false,
                                competitionId: body.competitionId,
                                periodId: periodId
                            },
                            orderBy: {
                                result: 'desc',
                            }
                        })];
                case 1:
                    gbRecordTally = _a.sent();
                    arr = [];
                    if (!gbRecordTally) return [3 /*break*/, 9];
                    top1advantage = null;
                    currentResult = 0;
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < gbRecordTally.length)) return [3 /*break*/, 9];
                    if (!(top1advantage === null)) return [3 /*break*/, 5];
                    top1advantage = gbRecordTally[i].result;
                    return [4 /*yield*/, __1.prisma.oCMGhostTrail.findFirst({
                            where: {
                                carId: gbRecordTally[i].carId,
                                competitionId: body.competitionId,
                                periodId: periodId
                            }
                        })];
                case 3:
                    getTrail = _a.sent();
                    if (!getTrail) return [3 /*break*/, 5];
                    return [4 /*yield*/, __1.prisma.oCMTop1GhostTrail.create({
                            data: {
                                carId: getTrail.carId,
                                area: getTrail.area,
                                ramp: getTrail.ramp,
                                path: getTrail.path,
                                trail: getTrail.trail,
                                competitionId: getTrail.competitionId,
                                periodId: getTrail.periodId + 1,
                                playedAt: getTrail.playedAt,
                                tunePower: getTrail.tunePower,
                                tuneHandling: getTrail.tuneHandling,
                                ocmMainDraw: true
                            }
                        })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    // User is lose VS Top 1 Qualifying Ghost (minus advantage like -10 meter)
                    if (top1advantage > 0) {
                        if (gbRecordTally[i].result <= 0) {
                            currentResult = top1advantage + Math.abs(gbRecordTally[i].result);
                            currentResult = -Math.abs(currentResult);
                        }
                        else {
                            currentResult = gbRecordTally[i].result - top1advantage;
                        }
                    }
                    else {
                        currentResult = top1advantage + Math.abs(gbRecordTally[i].result);
                        currentResult = -Math.abs(currentResult);
                    }
                    // Pushing carId to array
                    arr.push(gbRecordTally[i].carId);
                    data = {
                        carId: gbRecordTally[i].carId,
                        result: currentResult,
                        tunePower: gbRecordTally[i].tunePower,
                        tuneHandling: gbRecordTally[i].tuneHandling,
                        competitionId: body.competitionId,
                        periodId: periodId + 1
                    };
                    // Create the data
                    return [4 /*yield*/, __1.prisma.oCMTally.create({
                            data: data
                        })];
                case 6:
                    // Create the data
                    _a.sent();
                    if (!(i === 0)) return [3 /*break*/, 8];
                    console.log('Making OCM Top 1 Ghost Data');
                    // Create Top 1 ghost data
                    return [4 /*yield*/, __1.prisma.oCMTop1Ghost.create({
                            data: data
                        })];
                case 7:
                    // Create Top 1 ghost data
                    _a.sent();
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 2];
                case 9: return [4 /*yield*/, __1.prisma.oCMPlayRecord.findMany({
                        where: {
                            competitionId: body.competitionId,
                            NOT: {
                                carId: { in: arr }
                            }
                        }
                    })];
                case 10:
                    checkPlayRecord = _a.sent();
                    if (!checkPlayRecord) return [3 /*break*/, 14];
                    i = 0;
                    _a.label = 11;
                case 11:
                    if (!(i < checkPlayRecord.length)) return [3 /*break*/, 14];
                    dataLeft = {
                        carId: checkPlayRecord[i].carId,
                        result: -9999999,
                        tunePower: 17,
                        tuneHandling: 17,
                        competitionId: body.competitionId,
                        periodId: periodId + 1
                    };
                    // Create the data
                    return [4 /*yield*/, __1.prisma.oCMTally.create({
                            data: dataLeft
                        })];
                case 12:
                    // Create the data
                    _a.sent();
                    _a.label = 13;
                case 13:
                    i++;
                    return [3 /*break*/, 11];
                case 14: return [3 /*break*/, 26];
                case 15:
                    console.log('Tallying data from previous Period');
                    return [4 /*yield*/, __1.prisma.oCMTally.findMany({
                            where: {
                                competitionId: body.competitionId,
                                periodId: periodId
                            },
                            orderBy: {
                                result: 'desc',
                            }
                        })];
                case 16:
                    OCMTally = _a.sent();
                    if (!OCMTally) return [3 /*break*/, 26];
                    top1advantage = null;
                    currentResult = 0;
                    i = 0;
                    _a.label = 17;
                case 17:
                    if (!(i < OCMTally.length)) return [3 /*break*/, 26];
                    if (!(top1advantage === null)) return [3 /*break*/, 20];
                    top1advantage = OCMTally[0].result;
                    return [4 /*yield*/, __1.prisma.oCMGhostTrail.findFirst({
                            where: {
                                carId: OCMTally[0].carId,
                                competitionId: body.competitionId,
                            },
                            orderBy: {
                                playedAt: 'desc'
                            }
                        })];
                case 18:
                    getTrail = _a.sent();
                    if (!getTrail) return [3 /*break*/, 20];
                    console.log('Creating Trail');
                    return [4 /*yield*/, __1.prisma.oCMTop1GhostTrail.create({
                            data: {
                                carId: getTrail.carId,
                                area: getTrail.area,
                                ramp: getTrail.ramp,
                                path: getTrail.path,
                                trail: getTrail.trail,
                                competitionId: getTrail.competitionId,
                                periodId: periodId + 1,
                                playedAt: getTrail.playedAt,
                                tunePower: getTrail.tunePower,
                                tuneHandling: getTrail.tuneHandling,
                                ocmMainDraw: true
                            }
                        })];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    // Get the Top 1 Advantage
                    if (top1advantage > 0) {
                        if (OCMTally[i].result <= 0) {
                            currentResult = top1advantage + Math.abs(OCMTally[i].result);
                            currentResult = -Math.abs(currentResult);
                        }
                        else {
                            currentResult = OCMTally[i].result - top1advantage;
                        }
                    }
                    else {
                        currentResult = top1advantage + Math.abs(OCMTally[i].result);
                        currentResult = -Math.abs(currentResult);
                    }
                    data = {
                        carId: OCMTally[i].carId,
                        result: currentResult,
                        tunePower: OCMTally[i].tunePower,
                        tuneHandling: OCMTally[i].tuneHandling,
                        competitionId: body.competitionId,
                        periodId: periodId + 1
                    };
                    return [4 /*yield*/, __1.prisma.oCMTally.findFirst({
                            where: {
                                carId: OCMTally[i].carId,
                                competitionId: body.competitionId,
                            }
                        })];
                case 21:
                    checkOCMTally = _a.sent();
                    if (!checkOCMTally) return [3 /*break*/, 23];
                    // Update the tally data
                    return [4 /*yield*/, __1.prisma.oCMTally.update({
                            where: {
                                dbId: checkOCMTally === null || checkOCMTally === void 0 ? void 0 : checkOCMTally.dbId
                            },
                            data: data
                        })];
                case 22:
                    // Update the tally data
                    _a.sent();
                    _a.label = 23;
                case 23:
                    if (!(i === 0)) return [3 /*break*/, 25];
                    console.log('Making OCM Top 1 Ghost Data');
                    // Create Top 1 ghost data
                    return [4 /*yield*/, __1.prisma.oCMTop1Ghost.create({
                            data: data
                        })];
                case 24:
                    // Create Top 1 ghost data
                    _a.sent();
                    _a.label = 25;
                case 25:
                    i++;
                    return [3 /*break*/, 17];
                case 26: return [3 /*break*/, 38];
                case 27:
                    console.log('Tallying data for end of OCM');
                    return [4 /*yield*/, __1.prisma.oCMTally.findMany({
                            where: {
                                competitionId: body.competitionId,
                                periodId: periodId
                            },
                            orderBy: {
                                result: 'desc',
                            }
                        })];
                case 28:
                    OCMTally = _a.sent();
                    if (!OCMTally) return [3 /*break*/, 38];
                    top1advantage = null;
                    currentResult = 0;
                    i = 0;
                    _a.label = 29;
                case 29:
                    if (!(i < OCMTally.length)) return [3 /*break*/, 38];
                    if (!(top1advantage === null)) return [3 /*break*/, 32];
                    top1advantage = OCMTally[0].result;
                    return [4 /*yield*/, __1.prisma.oCMGhostTrail.findFirst({
                            where: {
                                carId: OCMTally[0].carId,
                                competitionId: body.competitionId,
                                ocmMainDraw: true
                            }
                        })];
                case 30:
                    getTrail = _a.sent();
                    if (!getTrail) return [3 /*break*/, 32];
                    return [4 /*yield*/, __1.prisma.oCMTop1GhostTrail.create({
                            data: {
                                carId: getTrail.carId,
                                area: getTrail.area,
                                ramp: getTrail.ramp,
                                path: getTrail.path,
                                trail: getTrail.trail,
                                competitionId: getTrail.competitionId,
                                periodId: 999999999,
                                playedAt: getTrail.playedAt,
                                tunePower: getTrail.tunePower,
                                tuneHandling: getTrail.tuneHandling,
                                ocmMainDraw: true
                            }
                        })];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    // Get the Top 1 Advantage
                    if (top1advantage > 0) {
                        if (OCMTally[i].result <= 0) {
                            currentResult = top1advantage + Math.abs(OCMTally[i].result);
                            currentResult = -Math.abs(currentResult);
                        }
                        else {
                            currentResult = OCMTally[i].result - top1advantage;
                        }
                    }
                    else {
                        currentResult = top1advantage + Math.abs(OCMTally[i].result);
                        currentResult = -Math.abs(currentResult);
                    }
                    data = {
                        carId: OCMTally[i].carId,
                        result: currentResult,
                        tunePower: OCMTally[i].tunePower,
                        tuneHandling: OCMTally[i].tuneHandling,
                        competitionId: body.competitionId,
                        periodId: 999999999
                    };
                    return [4 /*yield*/, __1.prisma.oCMTally.findFirst({
                            where: {
                                carId: OCMTally[i].carId,
                                competitionId: body.competitionId,
                            }
                        })];
                case 33:
                    checkOCMTally = _a.sent();
                    if (!checkOCMTally) return [3 /*break*/, 35];
                    // Update the tally data
                    return [4 /*yield*/, __1.prisma.oCMTally.update({
                            where: {
                                dbId: checkOCMTally === null || checkOCMTally === void 0 ? void 0 : checkOCMTally.dbId
                            },
                            data: data
                        })];
                case 34:
                    // Update the tally data
                    _a.sent();
                    _a.label = 35;
                case 35:
                    if (!(i === 0)) return [3 /*break*/, 37];
                    console.log('Making OCM Top 1 Ghost Data');
                    // Create Top 1 ghost data
                    return [4 /*yield*/, __1.prisma.oCMTop1Ghost.create({
                            data: data
                        })];
                case 36:
                    // Create Top 1 ghost data
                    _a.sent();
                    _a.label = 37;
                case 37:
                    i++;
                    return [3 /*break*/, 29];
                case 38: return [2 /*return*/];
            }
        });
    });
}
exports.ocmTallying = ocmTallying;
// OCM Competition (Main Draw) Day
function ocmCompetitionDay(body, competitionId, periodId) {
    return __awaiter(this, void 0, void 0, function () {
        var isQualified, ocmTallyRecord, resultAdvantage, currentRank, topresult, i, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Competition ID: " + competitionId + ", Period ID: " + periodId);
                    isQualified = false;
                    return [4 /*yield*/, __1.prisma.oCMTally.findMany({
                            where: {
                                competitionId: competitionId,
                            },
                            orderBy: [
                                {
                                    result: 'desc',
                                },
                                {
                                    periodId: 'desc'
                                },
                            ],
                            distinct: ['carId'],
                        })];
                case 1:
                    ocmTallyRecord = _a.sent();
                    resultAdvantage = 0;
                    currentRank = 0;
                    topresult = [];
                    for (i = 0; i < ocmTallyRecord.length; i++) {
                        if (ocmTallyRecord[i].carId == body.carId) {
                            // Get main draw advantage (Current car advantage from qualifying day - Top 1 OCM Ghost advantage from qualifying day)
                            resultAdvantage = ocmTallyRecord[i].result;
                            currentRank = i + 1;
                            isQualified = true;
                        }
                        else {
                            topresult.push(ocmTallyRecord[i].result);
                        }
                    }
                    if (isQualified) {
                        // Response data
                        msg = {
                            error: wm_proto_1.default.wm.protobuf.ErrorCode.ERR_SUCCESS,
                            periodId: periodId,
                            closed: false,
                            topResults: topresult,
                            qualified: isQualified,
                            result: resultAdvantage,
                            rank: currentRank
                        };
                    }
                    // User not yet playing OCM Battle game mode
                    else {
                        // Response data
                        msg = {
                            error: wm_proto_1.default.wm.protobuf.ErrorCode.ERR_SUCCESS,
                            periodId: periodId,
                            closed: false,
                            qualified: false, // if this set to false, user cannot enter OCM Battle game mode
                        };
                    }
                    // Return value
                    return [2 /*return*/, { msg: msg }];
            }
        });
    });
}
exports.ocmCompetitionDay = ocmCompetitionDay;
// OCM Qualifying Day
function ocmQualifyingDay(body, competitionId) {
    return __awaiter(this, void 0, void 0, function () {
        var ocmRecord, isQualified, msg, gbRecord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.prisma.oCMPlayRecord.findFirst({
                        where: {
                            carId: body.carId,
                            competitionId: competitionId
                        },
                        orderBy: {
                            dbId: 'desc'
                        }
                    })];
                case 1:
                    ocmRecord = _a.sent();
                    isQualified = true;
                    if (!ocmRecord) return [3 /*break*/, 3];
                    return [4 /*yield*/, __1.prisma.oCMGhostBattleRecord.findFirst({
                            where: {
                                carId: body.carId,
                                competitionId: competitionId,
                                periodId: 0,
                                ocmMainDraw: false
                            },
                            orderBy: {
                                dbId: 'desc',
                            }
                        })];
                case 2:
                    gbRecord = _a.sent();
                    // Mini game braking point
                    if (gbRecord) {
                        if ((ocmRecord === null || ocmRecord === void 0 ? void 0 : ocmRecord.brakingPoint) !== null && (ocmRecord === null || ocmRecord === void 0 ? void 0 : ocmRecord.brakingPoint) !== undefined) {
                            // User is not braking and let the car crashed lmao
                            if (ocmRecord.brakingPoint === 0) {
                                msg = {
                                    error: wm_proto_1.default.wm.protobuf.ErrorCode.ERR_SUCCESS,
                                    periodId: 0,
                                    closed: false,
                                    qualified: isQualified,
                                    result: gbRecord.result
                                };
                            }
                            // User is pressing brake
                            else {
                                // Response data
                                msg = {
                                    error: wm_proto_1.default.wm.protobuf.ErrorCode.ERR_SUCCESS,
                                    periodId: 0,
                                    closed: false,
                                    qualified: isQualified,
                                    brakingPoint: ocmRecord.brakingPoint,
                                    result: gbRecord.result
                                };
                            }
                        }
                        else {
                            // Response data
                            msg = {
                                error: wm_proto_1.default.wm.protobuf.ErrorCode.ERR_SUCCESS,
                                periodId: 0,
                                closed: false,
                                qualified: isQualified,
                                result: gbRecord.result
                            };
                        }
                    }
                    // Record not found
                    else {
                        // Response data
                        msg = {
                            error: wm_proto_1.default.wm.protobuf.ErrorCode.ERR_SUCCESS,
                            periodId: 0,
                            closed: false,
                            qualified: true, // if this set to false, user cannot enter OCM Battle game mode
                        };
                    }
                    return [3 /*break*/, 4];
                case 3:
                    // Response data
                    msg = {
                        error: wm_proto_1.default.wm.protobuf.ErrorCode.ERR_SUCCESS,
                        periodId: 0,
                        closed: false,
                        qualified: true, // if this set to false, user cannot enter OCM Battle game mode
                    };
                    _a.label = 4;
                case 4: return [2 /*return*/, { msg: msg }];
            }
        });
    });
}
exports.ocmQualifyingDay = ocmQualifyingDay;
// Give nameplate reward
function ocmGiveNamePlateReward(competitionId) {
    return __awaiter(this, void 0, void 0, function () {
        var getCarParticipant, participantLength, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.prisma.oCMTally.findMany({
                        where: {
                            competitionId: competitionId,
                        },
                        orderBy: {
                            result: 'desc'
                        }
                    })];
                case 1:
                    getCarParticipant = _a.sent();
                    if (!getCarParticipant) return [3 /*break*/, 190];
                    console.log('Giving OCM Rewards');
                    participantLength = getCarParticipant.length;
                    // Participant is more than 100
                    if (participantLength > 100) {
                        participantLength = 100;
                    }
                    if (!(competitionId === 1)) return [3 /*break*/, 10];
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 5];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 204,
                                amount: 1
                            }
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    i = 0;
                    _a.label = 6;
                case 6:
                    if (!(i < participantLength)) return [3 /*break*/, 9];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 205,
                                amount: 1
                            }
                        })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 6];
                case 9: return [3 /*break*/, 189];
                case 10:
                    if (!(competitionId === 2)) return [3 /*break*/, 19];
                    i = 0;
                    _a.label = 11;
                case 11:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 14];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 210,
                                amount: 1
                            }
                        })];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    i++;
                    return [3 /*break*/, 11];
                case 14:
                    i = 0;
                    _a.label = 15;
                case 15:
                    if (!(i < participantLength)) return [3 /*break*/, 18];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 211,
                                amount: 1
                            }
                        })];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    i++;
                    return [3 /*break*/, 15];
                case 18: return [3 /*break*/, 189];
                case 19:
                    if (!(competitionId === 3)) return [3 /*break*/, 28];
                    i = 0;
                    _a.label = 20;
                case 20:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 23];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 216,
                                amount: 1
                            }
                        })];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    i++;
                    return [3 /*break*/, 20];
                case 23:
                    i = 0;
                    _a.label = 24;
                case 24:
                    if (!(i < participantLength)) return [3 /*break*/, 27];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 217,
                                amount: 1
                            }
                        })];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    i++;
                    return [3 /*break*/, 24];
                case 27: return [3 /*break*/, 189];
                case 28:
                    if (!(competitionId === 4)) return [3 /*break*/, 37];
                    i = 0;
                    _a.label = 29;
                case 29:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 32];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 222,
                                amount: 1
                            }
                        })];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    i++;
                    return [3 /*break*/, 29];
                case 32:
                    i = 0;
                    _a.label = 33;
                case 33:
                    if (!(i < participantLength)) return [3 /*break*/, 36];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 223,
                                amount: 1
                            }
                        })];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    i++;
                    return [3 /*break*/, 33];
                case 36: return [3 /*break*/, 189];
                case 37:
                    if (!(competitionId === 5)) return [3 /*break*/, 46];
                    i = 0;
                    _a.label = 38;
                case 38:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 41];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 35,
                                amount: 1
                            }
                        })];
                case 39:
                    _a.sent();
                    _a.label = 40;
                case 40:
                    i++;
                    return [3 /*break*/, 38];
                case 41:
                    i = 0;
                    _a.label = 42;
                case 42:
                    if (!(i < participantLength)) return [3 /*break*/, 45];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 36,
                                amount: 1
                            }
                        })];
                case 43:
                    _a.sent();
                    _a.label = 44;
                case 44:
                    i++;
                    return [3 /*break*/, 42];
                case 45: return [3 /*break*/, 189];
                case 46:
                    if (!(competitionId === 6)) return [3 /*break*/, 55];
                    i = 0;
                    _a.label = 47;
                case 47:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 50];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 41,
                                amount: 1
                            }
                        })];
                case 48:
                    _a.sent();
                    _a.label = 49;
                case 49:
                    i++;
                    return [3 /*break*/, 47];
                case 50:
                    i = 0;
                    _a.label = 51;
                case 51:
                    if (!(i < participantLength)) return [3 /*break*/, 54];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 42,
                                amount: 1
                            }
                        })];
                case 52:
                    _a.sent();
                    _a.label = 53;
                case 53:
                    i++;
                    return [3 /*break*/, 51];
                case 54: return [3 /*break*/, 189];
                case 55:
                    if (!(competitionId === 7)) return [3 /*break*/, 64];
                    i = 0;
                    _a.label = 56;
                case 56:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 59];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 47,
                                amount: 1
                            }
                        })];
                case 57:
                    _a.sent();
                    _a.label = 58;
                case 58:
                    i++;
                    return [3 /*break*/, 56];
                case 59:
                    i = 0;
                    _a.label = 60;
                case 60:
                    if (!(i < participantLength)) return [3 /*break*/, 63];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 48,
                                amount: 1
                            }
                        })];
                case 61:
                    _a.sent();
                    _a.label = 62;
                case 62:
                    i++;
                    return [3 /*break*/, 60];
                case 63: return [3 /*break*/, 189];
                case 64:
                    if (!(competitionId === 8)) return [3 /*break*/, 73];
                    i = 0;
                    _a.label = 65;
                case 65:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 68];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 228,
                                amount: 1
                            }
                        })];
                case 66:
                    _a.sent();
                    _a.label = 67;
                case 67:
                    i++;
                    return [3 /*break*/, 65];
                case 68:
                    i = 0;
                    _a.label = 69;
                case 69:
                    if (!(i < participantLength)) return [3 /*break*/, 72];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 229,
                                amount: 1
                            }
                        })];
                case 70:
                    _a.sent();
                    _a.label = 71;
                case 71:
                    i++;
                    return [3 /*break*/, 69];
                case 72: return [3 /*break*/, 189];
                case 73:
                    if (!(competitionId === 9)) return [3 /*break*/, 82];
                    i = 0;
                    _a.label = 74;
                case 74:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 77];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 234,
                                amount: 1
                            }
                        })];
                case 75:
                    _a.sent();
                    _a.label = 76;
                case 76:
                    i++;
                    return [3 /*break*/, 74];
                case 77:
                    i = 0;
                    _a.label = 78;
                case 78:
                    if (!(i < participantLength)) return [3 /*break*/, 81];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 235,
                                amount: 1
                            }
                        })];
                case 79:
                    _a.sent();
                    _a.label = 80;
                case 80:
                    i++;
                    return [3 /*break*/, 78];
                case 81: return [3 /*break*/, 189];
                case 82:
                    if (!(competitionId === 10)) return [3 /*break*/, 91];
                    i = 0;
                    _a.label = 83;
                case 83:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 86];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 5,
                                amount: 1
                            }
                        })];
                case 84:
                    _a.sent();
                    _a.label = 85;
                case 85:
                    i++;
                    return [3 /*break*/, 83];
                case 86:
                    i = 0;
                    _a.label = 87;
                case 87:
                    if (!(i < participantLength)) return [3 /*break*/, 90];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 6,
                                amount: 1
                            }
                        })];
                case 88:
                    _a.sent();
                    _a.label = 89;
                case 89:
                    i++;
                    return [3 /*break*/, 87];
                case 90: return [3 /*break*/, 189];
                case 91:
                    if (!(competitionId === 11)) return [3 /*break*/, 100];
                    i = 0;
                    _a.label = 92;
                case 92:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 95];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 11,
                                amount: 1
                            }
                        })];
                case 93:
                    _a.sent();
                    _a.label = 94;
                case 94:
                    i++;
                    return [3 /*break*/, 92];
                case 95:
                    i = 0;
                    _a.label = 96;
                case 96:
                    if (!(i < participantLength)) return [3 /*break*/, 99];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 12,
                                amount: 1
                            }
                        })];
                case 97:
                    _a.sent();
                    _a.label = 98;
                case 98:
                    i++;
                    return [3 /*break*/, 96];
                case 99: return [3 /*break*/, 189];
                case 100:
                    if (!(competitionId === 12)) return [3 /*break*/, 109];
                    i = 0;
                    _a.label = 101;
                case 101:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 104];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 17,
                                amount: 1
                            }
                        })];
                case 102:
                    _a.sent();
                    _a.label = 103;
                case 103:
                    i++;
                    return [3 /*break*/, 101];
                case 104:
                    i = 0;
                    _a.label = 105;
                case 105:
                    if (!(i < participantLength)) return [3 /*break*/, 108];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 18,
                                amount: 1
                            }
                        })];
                case 106:
                    _a.sent();
                    _a.label = 107;
                case 107:
                    i++;
                    return [3 /*break*/, 105];
                case 108: return [3 /*break*/, 189];
                case 109:
                    if (!(competitionId === 13)) return [3 /*break*/, 118];
                    i = 0;
                    _a.label = 110;
                case 110:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 113];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 23,
                                amount: 1
                            }
                        })];
                case 111:
                    _a.sent();
                    _a.label = 112;
                case 112:
                    i++;
                    return [3 /*break*/, 110];
                case 113:
                    i = 0;
                    _a.label = 114;
                case 114:
                    if (!(i < participantLength)) return [3 /*break*/, 117];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 24,
                                amount: 1
                            }
                        })];
                case 115:
                    _a.sent();
                    _a.label = 116;
                case 116:
                    i++;
                    return [3 /*break*/, 114];
                case 117: return [3 /*break*/, 189];
                case 118:
                    if (!(competitionId === 14)) return [3 /*break*/, 127];
                    i = 0;
                    _a.label = 119;
                case 119:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 122];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 29,
                                amount: 1
                            }
                        })];
                case 120:
                    _a.sent();
                    _a.label = 121;
                case 121:
                    i++;
                    return [3 /*break*/, 119];
                case 122:
                    i = 0;
                    _a.label = 123;
                case 123:
                    if (!(i < participantLength)) return [3 /*break*/, 126];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 30,
                                amount: 1
                            }
                        })];
                case 124:
                    _a.sent();
                    _a.label = 125;
                case 125:
                    i++;
                    return [3 /*break*/, 123];
                case 126: return [3 /*break*/, 189];
                case 127:
                    if (!(competitionId === 15)) return [3 /*break*/, 136];
                    i = 0;
                    _a.label = 128;
                case 128:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 131];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 53,
                                amount: 1
                            }
                        })];
                case 129:
                    _a.sent();
                    _a.label = 130;
                case 130:
                    i++;
                    return [3 /*break*/, 128];
                case 131:
                    i = 0;
                    _a.label = 132;
                case 132:
                    if (!(i < participantLength)) return [3 /*break*/, 135];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 54,
                                amount: 1
                            }
                        })];
                case 133:
                    _a.sent();
                    _a.label = 134;
                case 134:
                    i++;
                    return [3 /*break*/, 132];
                case 135: return [3 /*break*/, 189];
                case 136:
                    if (!(competitionId === 16)) return [3 /*break*/, 145];
                    i = 0;
                    _a.label = 137;
                case 137:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 140];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 93,
                                amount: 1
                            }
                        })];
                case 138:
                    _a.sent();
                    _a.label = 139;
                case 139:
                    i++;
                    return [3 /*break*/, 137];
                case 140:
                    i = 0;
                    _a.label = 141;
                case 141:
                    if (!(i < participantLength)) return [3 /*break*/, 144];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 94,
                                amount: 1
                            }
                        })];
                case 142:
                    _a.sent();
                    _a.label = 143;
                case 143:
                    i++;
                    return [3 /*break*/, 141];
                case 144: return [3 /*break*/, 189];
                case 145:
                    if (!(competitionId === 17)) return [3 /*break*/, 154];
                    i = 0;
                    _a.label = 146;
                case 146:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 149];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 99,
                                amount: 1
                            }
                        })];
                case 147:
                    _a.sent();
                    _a.label = 148;
                case 148:
                    i++;
                    return [3 /*break*/, 146];
                case 149:
                    i = 0;
                    _a.label = 150;
                case 150:
                    if (!(i < participantLength)) return [3 /*break*/, 153];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 100,
                                amount: 1
                            }
                        })];
                case 151:
                    _a.sent();
                    _a.label = 152;
                case 152:
                    i++;
                    return [3 /*break*/, 150];
                case 153: return [3 /*break*/, 189];
                case 154:
                    if (!(competitionId === 18)) return [3 /*break*/, 163];
                    i = 0;
                    _a.label = 155;
                case 155:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 158];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 105,
                                amount: 1
                            }
                        })];
                case 156:
                    _a.sent();
                    _a.label = 157;
                case 157:
                    i++;
                    return [3 /*break*/, 155];
                case 158:
                    i = 0;
                    _a.label = 159;
                case 159:
                    if (!(i < participantLength)) return [3 /*break*/, 162];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 106,
                                amount: 1
                            }
                        })];
                case 160:
                    _a.sent();
                    _a.label = 161;
                case 161:
                    i++;
                    return [3 /*break*/, 159];
                case 162: return [3 /*break*/, 189];
                case 163:
                    if (!(competitionId === 19)) return [3 /*break*/, 172];
                    i = 0;
                    _a.label = 164;
                case 164:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 167];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 141,
                                amount: 1
                            }
                        })];
                case 165:
                    _a.sent();
                    _a.label = 166;
                case 166:
                    i++;
                    return [3 /*break*/, 164];
                case 167:
                    i = 0;
                    _a.label = 168;
                case 168:
                    if (!(i < participantLength)) return [3 /*break*/, 171];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 142,
                                amount: 1
                            }
                        })];
                case 169:
                    _a.sent();
                    _a.label = 170;
                case 170:
                    i++;
                    return [3 /*break*/, 168];
                case 171: return [3 /*break*/, 189];
                case 172:
                    if (!(competitionId === 20)) return [3 /*break*/, 181];
                    i = 0;
                    _a.label = 173;
                case 173:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 176];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 147,
                                amount: 1
                            }
                        })];
                case 174:
                    _a.sent();
                    _a.label = 175;
                case 175:
                    i++;
                    return [3 /*break*/, 173];
                case 176:
                    i = 0;
                    _a.label = 177;
                case 177:
                    if (!(i < participantLength)) return [3 /*break*/, 180];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 148,
                                amount: 1
                            }
                        })];
                case 178:
                    _a.sent();
                    _a.label = 179;
                case 179:
                    i++;
                    return [3 /*break*/, 177];
                case 180: return [3 /*break*/, 189];
                case 181:
                    if (!(competitionId === 21)) return [3 /*break*/, 189];
                    i = 0;
                    _a.label = 182;
                case 182:
                    if (!(i < getCarParticipant.length)) return [3 /*break*/, 185];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 153,
                                amount: 1
                            }
                        })];
                case 183:
                    _a.sent();
                    _a.label = 184;
                case 184:
                    i++;
                    return [3 /*break*/, 182];
                case 185:
                    i = 0;
                    _a.label = 186;
                case 186:
                    if (!(i < participantLength)) return [3 /*break*/, 189];
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: getCarParticipant[i].carId,
                                category: 17,
                                itemId: 154,
                                amount: 1
                            }
                        })];
                case 187:
                    _a.sent();
                    _a.label = 188;
                case 188:
                    i++;
                    return [3 /*break*/, 186];
                case 189:
                    console.log('OCM Rewards Given');
                    _a.label = 190;
                case 190: return [2 /*return*/];
            }
        });
    });
}
exports.ocmGiveNamePlateReward = ocmGiveNamePlateReward;
//# sourceMappingURL=ghost_ocm.js.map