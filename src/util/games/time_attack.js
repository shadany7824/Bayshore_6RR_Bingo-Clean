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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTimeAttackResult = void 0;
var __1 = require("../..");
// Save time attack result
function saveTimeAttackResult(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
    return __awaiter(this, void 0, void 0, function () {
        var cheatedTime, currentRecord;
        return __generator(this, function (_26) {
            switch (_26.label) {
                case 0:
                    cheatedTime = false;
                    if (!!(body.retired || body.timeup)) return [3 /*break*/, 6];
                    console.log('Game not retired / timed out, continuing ...');
                    return [4 /*yield*/, __1.prisma.timeAttackRecord.findFirst({
                            where: {
                                carId: body.carId,
                                course: body.taResult.course
                            }
                        })];
                case 1:
                    currentRecord = _26.sent();
                    // Check the time
                    if ((((_a = body.taResult) === null || _a === void 0 ? void 0 : _a.course) === 0 && ((_b = body.taResult) === null || _b === void 0 ? void 0 : _b.time) <= 169000) || // C1 Inward (2'49"000)
                        (((_c = body.taResult) === null || _c === void 0 ? void 0 : _c.course) === 1 && ((_d = body.taResult) === null || _d === void 0 ? void 0 : _d.time) <= 168000) || // C1 Outward (2'48"000)
                        (((_e = body.taResult) === null || _e === void 0 ? void 0 : _e.course) === 2 && ((_f = body.taResult) === null || _f === void 0 ? void 0 : _f.time) <= 210000) || // NBL CCW (3'30"000)
                        (((_g = body.taResult) === null || _g === void 0 ? void 0 : _g.course) === 3 && ((_h = body.taResult) === null || _h === void 0 ? void 0 : _h.time) <= 266000) || // NBL CW (4'26"000)
                        (((_j = body.taResult) === null || _j === void 0 ? void 0 : _j.course) === 4 && ((_k = body.taResult) === null || _k === void 0 ? void 0 : _k.time) <= 205000) || // Shibuya/Shinjuku (3'25"000)
                        (((_l = body.taResult) === null || _l === void 0 ? void 0 : _l.course) === 5 && ((_m = body.taResult) === null || _m === void 0 ? void 0 : _m.time) <= 250000) || // Ikebukuro/Yamate Tunnel (4'10"000)
                        (((_o = body.taResult) === null || _o === void 0 ? void 0 : _o.course) === 6 && ((_p = body.taResult) === null || _p === void 0 ? void 0 : _p.time) <= 232000) || // Wangan Eastbound (3'52"000)
                        (((_q = body.taResult) === null || _q === void 0 ? void 0 : _q.course) === 7 && ((_r = body.taResult) === null || _r === void 0 ? void 0 : _r.time) <= 231000) || // Wangan Westbound (3'51"000)
                        (((_s = body.taResult) === null || _s === void 0 ? void 0 : _s.course) === 8 && ((_t = body.taResult) === null || _t === void 0 ? void 0 : _t.time) <= 165000) || // Yokohane Downline (2'45"000)
                        (((_u = body.taResult) === null || _u === void 0 ? void 0 : _u.course) === 9 && ((_v = body.taResult) === null || _v === void 0 ? void 0 : _v.time) <= 172000) || // Yokohane Upline (2'52"000)
                        (((_w = body.taResult) === null || _w === void 0 ? void 0 : _w.course) === 10 && ((_x = body.taResult) === null || _x === void 0 ? void 0 : _x.time) <= 215000) || // Yaesu Inward (3'35"000)
                        (((_y = body.taResult) === null || _y === void 0 ? void 0 : _y.course) === 11 && ((_z = body.taResult) === null || _z === void 0 ? void 0 : _z.time) <= 189000) || // Yaesu Outward (3'09"000)
                        (((_0 = body.taResult) === null || _0 === void 0 ? void 0 : _0.course) === 12 && ((_1 = body.taResult) === null || _1 === void 0 ? void 0 : _1.time) <= 180000) || // Minato Mirai Inward (3'00"000)
                        (((_2 = body.taResult) === null || _2 === void 0 ? void 0 : _2.course) === 13 && ((_3 = body.taResult) === null || _3 === void 0 ? void 0 : _3.time) <= 180000) || // Minato Mirai Outward (3'00"000)
                        (((_4 = body.taResult) === null || _4 === void 0 ? void 0 : _4.course) === 14 && ((_5 = body.taResult) === null || _5 === void 0 ? void 0 : _5.time) <= 181000) || // Nagoya (3'01"000)
                        (((_6 = body.taResult) === null || _6 === void 0 ? void 0 : _6.course) === 15 && ((_7 = body.taResult) === null || _7 === void 0 ? void 0 : _7.time) <= 225000) || // Osaka (3'45"000)
                        (((_8 = body.taResult) === null || _8 === void 0 ? void 0 : _8.course) === 16 && ((_9 = body.taResult) === null || _9 === void 0 ? void 0 : _9.time) <= 243000) || // Kobe (4'03"000)
                        (((_10 = body.taResult) === null || _10 === void 0 ? void 0 : _10.course) === 17 && ((_11 = body.taResult) === null || _11 === void 0 ? void 0 : _11.time) <= 206000) || // Fukuoka (3'26"000)
                        (((_12 = body.taResult) === null || _12 === void 0 ? void 0 : _12.course) === 18 && ((_13 = body.taResult) === null || _13 === void 0 ? void 0 : _13.time) <= 144000) || // Hakone Outbound (2'24"000)
                        (((_14 = body.taResult) === null || _14 === void 0 ? void 0 : _14.course) === 19 && ((_15 = body.taResult) === null || _15 === void 0 ? void 0 : _15.time) <= 143000) || // Hakone Inbound (2'23"000)
                        (((_16 = body.taResult) === null || _16 === void 0 ? void 0 : _16.course) === 20 && ((_17 = body.taResult) === null || _17 === void 0 ? void 0 : _17.time) <= 168000) || // Mt. Taikan Uphill (2'48"000)
                        (((_18 = body.taResult) === null || _18 === void 0 ? void 0 : _18.course) === 21 && ((_19 = body.taResult) === null || _19 === void 0 ? void 0 : _19.time) <= 174000) || // Mt. Taikan Downhill (2'54"000)
                        (((_20 = body.taResult) === null || _20 === void 0 ? void 0 : _20.course) === 22 && ((_21 = body.taResult) === null || _21 === void 0 ? void 0 : _21.time) <= 718000) || // Metro Hwy Tokyo (11'58"000)
                        (((_22 = body.taResult) === null || _22 === void 0 ? void 0 : _22.course) === 23 && ((_23 = body.taResult) === null || _23 === void 0 ? void 0 : _23.time) <= 546000) || // Metro Hwy Kanagawa (9'06"000)
                        (((_24 = body.taResult) === null || _24 === void 0 ? void 0 : _24.course) === 24 && ((_25 = body.taResult) === null || _25 === void 0 ? void 0 : _25.time) <= 209000)) // Hiroshima (3'29"000)
                     {
                        cheatedTime = true;
                    }
                    if (!(cheatedTime === false)) return [3 /*break*/, 6];
                    if (!currentRecord) return [3 /*break*/, 4];
                    if (!(body.taResult.time < currentRecord.time)) return [3 /*break*/, 3];
                    console.log('Updating time attack record...');
                    return [4 /*yield*/, __1.prisma.timeAttackRecord.update({
                            where: {
                                // Could be null - if it is null, this will insert.
                                dbId: currentRecord.dbId
                            },
                            data: {
                                model: body.car.model,
                                time: body.taResult.time,
                                section1Time: body.taResult.section_1Time,
                                section2Time: body.taResult.section_2Time,
                                section3Time: body.taResult.section_3Time,
                                section4Time: body.taResult.section_4Time,
                                section5Time: body.taResult.section_5Time,
                                section6Time: body.taResult.section_6Time,
                                section7Time: body.taResult.section_7Time,
                                tunePower: body.car.tunePower,
                                tuneHandling: body.car.tuneHandling
                            }
                        })];
                case 2:
                    _26.sent();
                    _26.label = 3;
                case 3: return [3 /*break*/, 6];
                case 4:
                    console.log('Creating new time attack record');
                    return [4 /*yield*/, __1.prisma.timeAttackRecord.create({
                            data: {
                                carId: body.carId,
                                model: body.car.model,
                                time: body.taResult.time,
                                isMorning: body.taResult.isMorning,
                                course: body.taResult.course,
                                section1Time: body.taResult.section_1Time,
                                section2Time: body.taResult.section_2Time,
                                section3Time: body.taResult.section_3Time,
                                section4Time: body.taResult.section_4Time,
                                section5Time: body.taResult.section_5Time,
                                section6Time: body.taResult.section_6Time,
                                section7Time: body.taResult.section_7Time,
                                tunePower: body.car.tunePower,
                                tuneHandling: body.car.tuneHandling
                            }
                        })];
                case 5:
                    _26.sent();
                    _26.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.saveTimeAttackResult = saveTimeAttackResult;
//# sourceMappingURL=time_attack.js.map