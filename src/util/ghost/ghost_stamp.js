"use strict";
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
exports.shuttleReturnStamp = exports.sendStamp = void 0;
var __1 = require("../..");
// Import Util
var ghost_get_area_from_path = __importStar(require("../ghost/ghost_util/ghost_get_area_from_path"));
function sendStamp(body) {
    return __awaiter(this, void 0, void 0, function () {
        var rgResult, date, rgStamp, area, getArea, i, checkCar, dataChallenger, dataStampTarget, stampTarget;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rgResult = body.rgResult;
                    date = Math.floor(new Date().getTime() / 1000);
                    if (!rgResult) return [3 /*break*/, 9];
                    rgStamp = rgResult.rgStamp;
                    if (rgStamp === 0) {
                        rgStamp = 1;
                    }
                    area = 0;
                    if (!rgResult.path) return [3 /*break*/, 2];
                    return [4 /*yield*/, ghost_get_area_from_path.getArea(rgResult.path)];
                case 1:
                    getArea = _a.sent();
                    area = Number(getArea.area);
                    _a.label = 2;
                case 2:
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < rgResult.opponents.length)) return [3 /*break*/, 9];
                    return [4 /*yield*/, __1.prisma.car.findFirst({
                            where: {
                                carId: rgResult.opponents[i].carId,
                                NOT: {
                                    userId: body.car.userId
                                }
                            },
                            include: {
                                gtWing: true,
                                lastPlayedPlace: true
                            }
                        })];
                case 4:
                    checkCar = _a.sent();
                    if (!checkCar) return [3 /*break*/, 8];
                    if (i === 0) {
                        console.log('Sending Stamp');
                    }
                    dataChallenger = {
                        carId: rgResult.opponents[i].carId,
                        challengerCarId: body.carId,
                        stamp: rgStamp,
                        result: rgResult.opponents[i].result,
                        area: area,
                        lastPlayedAt: date
                    };
                    dataStampTarget = {
                        carId: body.carId,
                        stampTargetCarId: rgResult.opponents[i].carId,
                        returnCount: 0,
                        locked: false,
                        recommended: true
                    };
                    return [4 /*yield*/, __1.prisma.carStampTarget.findFirst({
                            where: {
                                carId: body.carId,
                                stampTargetCarId: rgResult.opponents[i].carId,
                            }
                        })
                        // No record found
                    ];
                case 5:
                    stampTarget = _a.sent();
                    if (!!(stampTarget)) return [3 /*break*/, 8];
                    console.log('Creating new stamp entry');
                    return [4 /*yield*/, __1.prisma.carChallenger.create({
                            data: dataChallenger
                        })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, __1.prisma.carStampTarget.create({
                            data: dataStampTarget
                        })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 3];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.sendStamp = sendStamp;
function shuttleReturnStamp(body) {
    return __awaiter(this, void 0, void 0, function () {
        var rgResult, date, rgStamp, area, getArea, i, checkCar, stampTarget, returnCount, dataStampTarget, challengeReturned, dataChallenger, stampReturned;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rgResult = body.rgResult;
                    date = Math.floor(new Date().getTime() / 1000);
                    if (!rgResult) return [3 /*break*/, 14];
                    rgStamp = rgResult.rgStamp;
                    if (rgStamp === 0) {
                        rgStamp = 1;
                    }
                    area = void 0;
                    if (!rgResult.path) return [3 /*break*/, 2];
                    return [4 /*yield*/, ghost_get_area_from_path.getArea(rgResult.path)];
                case 1:
                    getArea = _a.sent();
                    area = getArea.area;
                    _a.label = 2;
                case 2:
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < rgResult.opponents.length)) return [3 /*break*/, 14];
                    return [4 /*yield*/, __1.prisma.car.findFirst({
                            where: {
                                carId: rgResult.opponents[i].carId,
                                NOT: {
                                    userId: body.car.userId
                                }
                            },
                            include: {
                                gtWing: true,
                                lastPlayedPlace: true
                            }
                        })];
                case 4:
                    checkCar = _a.sent();
                    if (!checkCar) return [3 /*break*/, 13];
                    if (i === 0) {
                        console.log('Returning Stamp');
                    }
                    return [4 /*yield*/, __1.prisma.carStampTarget.findFirst({
                            where: {
                                carId: rgResult.opponents[i].carId,
                                stampTargetCarId: body.carId,
                                recommended: true
                            }
                        })];
                case 5:
                    stampTarget = _a.sent();
                    if (!stampTarget) return [3 /*break*/, 7];
                    returnCount = stampTarget.returnCount + 1;
                    dataStampTarget = {
                        carId: rgResult.opponents[i].carId,
                        stampTargetCarId: body.carId,
                        returnCount: returnCount,
                        locked: false,
                        recommended: false
                    };
                    console.log("Updating car ".concat(rgResult.opponents[i].carId, " vs ").concat(body.carId, " stamp entry and remove it from your recommendation"));
                    return [4 /*yield*/, __1.prisma.carStampTarget.update({
                            where: {
                                id: stampTarget.id
                            },
                            data: dataStampTarget
                        })];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [4 /*yield*/, __1.prisma.carChallenger.findFirst({
                        where: {
                            carId: rgResult.opponents[i].carId,
                            challengerCarId: body.carId,
                        }
                    })];
                case 8:
                    challengeReturned = _a.sent();
                    if (!challengeReturned) return [3 /*break*/, 10];
                    dataChallenger = {
                        carId: rgResult.opponents[i].carId,
                        challengerCarId: body.carId,
                        stamp: rgStamp,
                        result: rgResult.opponents[i].result,
                        area: area,
                        lastPlayedAt: date
                    };
                    console.log('Updating challenger entry');
                    return [4 /*yield*/, __1.prisma.carChallenger.update({
                            where: {
                                id: challengeReturned.id
                            },
                            data: dataChallenger
                        })];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [4 /*yield*/, __1.prisma.carStampTarget.findFirst({
                        where: {
                            carId: body.carId,
                            stampTargetCarId: rgResult.opponents[i].carId,
                            recommended: false
                        }
                    })];
                case 11:
                    stampReturned = _a.sent();
                    if (!stampReturned) return [3 /*break*/, 13];
                    console.log("Stamp returned to ".concat(rgResult.opponents[i].carId, ", recommend it so opponents can fight your ghost"));
                    return [4 /*yield*/, __1.prisma.carStampTarget.update({
                            where: {
                                id: stampReturned.id
                            },
                            data: {
                                locked: false,
                                recommended: true
                            }
                        })];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    i++;
                    return [3 /*break*/, 3];
                case 14: return [2 /*return*/];
            }
        });
    });
}
exports.shuttleReturnStamp = shuttleReturnStamp;
//# sourceMappingURL=ghost_stamp.js.map