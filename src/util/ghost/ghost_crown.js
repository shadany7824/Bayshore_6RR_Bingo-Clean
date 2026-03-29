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
exports.saveCrownData = void 0;
var __1 = require("../..");
// Import Util
var common = __importStar(require("../../util/common"));
// Saving Crown Data
function saveCrownData(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
    return __awaiter(this, void 0, void 0, function () {
        var ghostResultCrown, dataCrown, carId, area, ramp, path, carCrowns, areaVal;
        return __generator(this, function (_8) {
            switch (_8.label) {
                case 0:
                    ghostResultCrown = body === null || body === void 0 ? void 0 : body.rgResult;
                    if (!ghostResultCrown) return [3 /*break*/, 5];
                    carId = 0;
                    if (body.carId) {
                        carId = Number(body.carId);
                    }
                    // Ghost Crown update data
                    dataCrown = {
                        carId: carId,
                        playedAt: common.sanitizeInput(body.playedAt),
                        tunePower: common.sanitizeInput((_a = body.car) === null || _a === void 0 ? void 0 : _a.tunePower),
                        tuneHandling: common.sanitizeInput((_b = body.car) === null || _b === void 0 ? void 0 : _b.tuneHandling),
                    };
                    area = 0;
                    ramp = 0;
                    path = 0;
                    if ((_c = body.rgResult) === null || _c === void 0 ? void 0 : _c.path) {
                        if (((_d = body.rgResult) === null || _d === void 0 ? void 0 : _d.path) >= 0 && ((_e = body.rgResult) === null || _e === void 0 ? void 0 : _e.path) <= 9) { // GID_PATH_C1
                            area = Number(0);
                            ramp = Number(Math.floor(Math.random() * 4));
                        }
                        else if (((_f = body.rgResult) === null || _f === void 0 ? void 0 : _f.path) >= 10 && ((_g = body.rgResult) === null || _g === void 0 ? void 0 : _g.path) <= 15) { // GID_PATH_N9
                            area = Number(1);
                            ramp = Number(Math.floor(Math.random() * 2) + 4);
                        }
                        else if (((_h = body.rgResult) === null || _h === void 0 ? void 0 : _h.path) >= 16 && ((_j = body.rgResult) === null || _j === void 0 ? void 0 : _j.path) <= 17) { // GID_PATH_WTEAST
                            area = Number(2);
                            ramp = Number(Math.floor(Math.random() * 2) + 6);
                        }
                        else if (((_k = body.rgResult) === null || _k === void 0 ? void 0 : _k.path) >= 18 && ((_l = body.rgResult) === null || _l === void 0 ? void 0 : _l.path) <= 19) { // GID_PATH_WT_UP_DOWN
                            area = Number(3);
                            ramp = Number(Math.floor(Math.random() * 2) + 8);
                        }
                        else if (((_m = body.rgResult) === null || _m === void 0 ? void 0 : _m.path) >= 20 && ((_o = body.rgResult) === null || _o === void 0 ? void 0 : _o.path) <= 26) { // GID_PATH_WG
                            area = Number(4);
                            ramp = Number(Math.floor(Math.random() * 4) + 10);
                        }
                        else if (((_p = body.rgResult) === null || _p === void 0 ? void 0 : _p.path) >= 27 && ((_q = body.rgResult) === null || _q === void 0 ? void 0 : _q.path) <= 33) { // GID_PATH_KG
                            area = Number(5);
                            ramp = Number(Math.floor(Math.random() * 4) + 14);
                        }
                        else if (((_r = body.rgResult) === null || _r === void 0 ? void 0 : _r.path) >= 34 && ((_s = body.rgResult) === null || _s === void 0 ? void 0 : _s.path) <= 37) { // GID_PATH_YS
                            area = Number(6);
                            ramp = Number(Math.floor(Math.random() * 3) + 18);
                        }
                        else if (((_t = body.rgResult) === null || _t === void 0 ? void 0 : _t.path) >= 38 && ((_u = body.rgResult) === null || _u === void 0 ? void 0 : _u.path) <= 48) { // GID_PATH_KG_SHINYAMASHITA_MINATOMIRAI
                            area = Number(7);
                            ramp = Number(Math.floor(Math.random() * 4) + 21);
                        }
                        else if (((_v = body.rgResult) === null || _v === void 0 ? void 0 : _v.path) === 49) { // GID_PATH_NGR
                            area = Number(8);
                            ramp = Number(25);
                        }
                        else if (((_w = body.rgResult) === null || _w === void 0 ? void 0 : _w.path) >= 50 && ((_x = body.rgResult) === null || _x === void 0 ? void 0 : _x.path) <= 53) { // GID_PATH_OS
                            area = Number(9);
                            ramp = Number(26);
                        }
                        else if (((_y = body.rgResult) === null || _y === void 0 ? void 0 : _y.path) >= 54 && ((_z = body.rgResult) === null || _z === void 0 ? void 0 : _z.path) <= 55) { // GID_PATH_KB
                            area = Number(10);
                            ramp = Number(Math.floor(Math.random() * 2) + 27);
                        }
                        else if (((_0 = body.rgResult) === null || _0 === void 0 ? void 0 : _0.path) >= 58 && ((_1 = body.rgResult) === null || _1 === void 0 ? void 0 : _1.path) <= 61) { // GID_PATH_FK
                            area = Number(11);
                            ramp = Number(Math.floor(Math.random() * 4) + 29);
                        }
                        else if (((_2 = body.rgResult) === null || _2 === void 0 ? void 0 : _2.path) >= 62 && ((_3 = body.rgResult) === null || _3 === void 0 ? void 0 : _3.path) <= 63) { // GID_PATH_HK
                            area = Number(12);
                            ramp = Number(Math.floor(Math.random() * 2) + 33);
                        }
                        else if (((_4 = body.rgResult) === null || _4 === void 0 ? void 0 : _4.path) >= 64 && ((_5 = body.rgResult) === null || _5 === void 0 ? void 0 : _5.path) <= 65) { // GID_PATH_TP
                            area = Number(13);
                            ramp = Number(Math.floor(Math.random() * 2) + 35);
                        }
                        else if (((_6 = body.rgResult) === null || _6 === void 0 ? void 0 : _6.path) >= 56 && ((_7 = body.rgResult) === null || _7 === void 0 ? void 0 : _7.path) <= 57) { // GID_PATH_HS
                            area = Number(18);
                            ramp = Number(Math.floor(Math.random() * 2) + 27);
                        }
                        path = Number(body.rgResult.path);
                    }
                    return [4 /*yield*/, __1.prisma.carCrown.count({
                            where: {
                                area: area
                            }
                        })];
                case 1:
                    carCrowns = _8.sent();
                    if (!(carCrowns !== 0)) return [3 /*break*/, 3];
                    areaVal = Number(area);
                    return [4 /*yield*/, __1.prisma.carCrown.update({
                            where: {
                                area: areaVal
                            },
                            data: __assign(__assign({}, dataCrown), { area: area, ramp: ramp, path: path })
                        })];
                case 2:
                    _8.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, __1.prisma.carCrown.create({
                        data: __assign(__assign({}, dataCrown), { area: area, ramp: ramp, path: path })
                    })];
                case 4:
                    _8.sent();
                    _8.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.saveCrownData = saveCrownData;
//# sourceMappingURL=ghost_crown.js.map