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
exports.getCrownGhostTrail = exports.getOCMGhostTrail = void 0;
var __1 = require("../..");
// Import Proto
var ghost_ocm_area = __importStar(require("./ghost_ocm_area"));
var ghost_area = __importStar(require("./ghost_area"));
// Get OCM Ghost Trail
function getOCMGhostTrail(carId, trailId) {
    return __awaiter(this, void 0, void 0, function () {
        var date, ghost_trails, areaVal, rampVal, pathVal, playedAt, ghostTrail, ocmEventDate, OCMArea;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = Math.floor(new Date().getTime() / 1000);
                    return [4 /*yield*/, __1.prisma.oCMTop1GhostTrail.findFirst({
                            where: {
                                carId: carId,
                                dbId: trailId,
                            }
                        })];
                case 1:
                    ghost_trails = _a.sent();
                    areaVal = 0;
                    rampVal = 0;
                    pathVal = 0;
                    playedAt = 0;
                    if (!ghost_trails) return [3 /*break*/, 2];
                    console.log('OCM Ghost Trail found');
                    // Set to OCM starting ramp data
                    areaVal = ghost_trails.area;
                    // Set to OCM starting ramp data
                    rampVal = ghost_trails.ramp;
                    // Set to OCM starting path data
                    pathVal = ghost_trails.path;
                    // Set to OCM starting path data
                    playedAt = ghost_trails.playedAt;
                    // Set to OCM trail data
                    ghostTrail = ghost_trails.trail;
                    return [3 /*break*/, 5];
                case 2:
                    console.log('OCM Ghost Trail not found');
                    return [4 /*yield*/, __1.prisma.oCMEvent.findFirst({
                            where: {
                                // qualifyingPeriodStartAt is less than current date
                                qualifyingPeriodStartAt: { lte: date },
                                // competitionEndAt is greater than current date
                                competitionEndAt: { gte: date },
                            },
                            orderBy: {
                                competitionEndAt: 'desc',
                            }
                        })];
                case 3:
                    ocmEventDate = _a.sent();
                    return [4 /*yield*/, ghost_ocm_area.OCMArea(ocmEventDate.competitionId)];
                case 4:
                    OCMArea = _a.sent();
                    // Set the value from OCMArea
                    areaVal = OCMArea.areaVal;
                    rampVal = OCMArea.rampVal;
                    pathVal = OCMArea.pathVal;
                    // Random value lmao, for default ghost trail stuff (any value maybe works)
                    playedAt = date;
                    ghostTrail = new Uint8Array([1, 2, 3, 4]);
                    _a.label = 5;
                case 5: return [2 /*return*/, { areaVal: areaVal, rampVal: rampVal, pathVal: pathVal, playedAt: playedAt, ghostTrail: ghostTrail }];
            }
        });
    });
}
exports.getOCMGhostTrail = getOCMGhostTrail;
function getCrownGhostTrail(carId, areaId) {
    return __awaiter(this, void 0, void 0, function () {
        var date, ghost_trails, rampVal, pathVal, playedAt, ghostTrail, time, ghost_areas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = Math.floor(new Date().getTime() / 1000);
                    return [4 /*yield*/, __1.prisma.ghostTrail.findFirst({
                            where: {
                                carId: carId,
                                area: areaId,
                                crownBattle: true,
                            },
                            orderBy: {
                                playedAt: 'desc'
                            }
                        })];
                case 1:
                    ghost_trails = _a.sent();
                    rampVal = 0;
                    pathVal = 0;
                    playedAt = 0;
                    if (!ghost_trails) return [3 /*break*/, 3];
                    console.log('Crown Ghost Trail found');
                    // Set to crown holder starting ramp data
                    rampVal = ghost_trails.ramp;
                    // Set to crown holder starting path data
                    pathVal = ghost_trails.path;
                    return [4 /*yield*/, __1.prisma.carCrown.findFirst({
                            where: {
                                carId: carId,
                                area: areaId
                            },
                            orderBy: {
                                playedAt: 'desc'
                            },
                            select: {
                                playedAt: true
                            }
                        })];
                case 2:
                    time = _a.sent();
                    // Error handling if played At timestamp value is current date and timestamp is bigger than 9 July 2022 (using GMT+7 timestamp)
                    if (time.playedAt !== 0 && time.playedAt >= 1657299600) {
                        // Acquired crown timestamp - 1 day
                        playedAt = time.playedAt - 172800;
                    }
                    // Error handling if played At timestamp value is 0 or timestamp is less than 9 July 2022 (using GMT+7 timestamp)
                    else if (time.playedAt === 0 || time.playedAt < 1657299600) {
                        // Acquired crown timestamp become 9 July 2022 (using GMT+7 timestamp)
                        playedAt = 1657299600;
                    }
                    // Set to crown holder trails data
                    ghostTrail = ghost_trails.trail;
                    return [3 /*break*/, 5];
                case 3:
                    console.log('Crown Ghost Trail not found');
                    return [4 /*yield*/, ghost_area.GhostArea(areaId)];
                case 4:
                    ghost_areas = _a.sent();
                    // Set the value
                    rampVal = ghost_areas.rampVal;
                    pathVal = ghost_areas.pathVal;
                    // Random value lmao, for default ghost trail stuff (any value maybe works)
                    playedAt = date;
                    ghostTrail = new Uint8Array([1, 2, 3, 4]);
                    _a.label = 5;
                case 5: return [2 /*return*/, { areaId: areaId, rampVal: rampVal, pathVal: pathVal, playedAt: playedAt, ghostTrail: ghostTrail }];
            }
        });
    });
}
exports.getCrownGhostTrail = getCrownGhostTrail;
//# sourceMappingURL=ghost_trail.js.map