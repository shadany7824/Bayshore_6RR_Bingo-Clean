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
exports.DefaultGhostCarPorsche = exports.DefaultGhostCarAcura = exports.DefaultGhostCarHonda = exports.DefaultGhostCarLamborghini = exports.DefaultGhostCarDodge = exports.DefaultGhostCarAudi = exports.DefaultGhostCarToyota = exports.DefaultGhostCarSubaru = exports.DefaultGhostCarNissan = exports.DefaultGhostCarMitsubishi = exports.DefaultGhostCarMercedes = exports.DefaultGhostCarMazda = exports.DefaultGhostCarChevrolet = exports.DefaultGhostCarBMW = void 0;
var config_1 = require("../../config");
// Import Proto
var wm = __importStar(require("../../wmmt/wm.proto"));
// Global Variable
var date = Math.floor(new Date().getTime() / 1000);
var playedPlace = wm.wm.protobuf.Place.create({
    placeId: config_1.Config.getConfig().placeId,
    regionId: config_1.Config.getConfig().regionId,
    shopName: config_1.Config.getConfig().shopName,
    country: config_1.Config.getConfig().country
});
function DefaultGhostCarBMW() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'NAMCO',
                regionId: 18,
                manufacturer: 0,
                model: 71,
                visualModel: 100,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'BANDAI NAMCO',
                windowStickerFont: 0,
                title: 'Superior NAMCO',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarBMW = DefaultGhostCarBMW;
function DefaultGhostCarChevrolet() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＴＡＸＩ',
                regionId: 18,
                manufacturer: 1,
                model: 66,
                visualModel: 1,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarChevrolet = DefaultGhostCarChevrolet;
function DefaultGhostCarMazda() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＥＲＥＫ７',
                regionId: 18,
                manufacturer: 2,
                model: 9,
                visualModel: 6,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarMazda = DefaultGhostCarMazda;
function DefaultGhostCarMercedes() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＳＬＳ',
                regionId: 18,
                manufacturer: 3,
                model: 87,
                visualModel: 107,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarMercedes = DefaultGhostCarMercedes;
function DefaultGhostCarMitsubishi() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＥＶＯ　９',
                regionId: 18,
                manufacturer: 4,
                model: 22,
                visualModel: 15,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarMitsubishi = DefaultGhostCarMitsubishi;
function DefaultGhostCarNissan() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＤＥＢＵＧ',
                regionId: 18,
                manufacturer: 5,
                model: 27,
                visualModel: 30,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarNissan = DefaultGhostCarNissan;
function DefaultGhostCarSubaru() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＳＶＸ',
                regionId: 18,
                manufacturer: 7,
                model: 47,
                visualModel: 54,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarSubaru = DefaultGhostCarSubaru;
function DefaultGhostCarToyota() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'Ａ９０',
                regionId: 18,
                manufacturer: 8,
                model: 122,
                visualModel: 145,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarToyota = DefaultGhostCarToyota;
function DefaultGhostCarAudi() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'Ｒ８',
                regionId: 18,
                manufacturer: 9,
                model: 89,
                visualModel: 109,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarAudi = DefaultGhostCarAudi;
function DefaultGhostCarDodge() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＶＩＰＥＲ',
                regionId: 18,
                manufacturer: 10,
                model: 91,
                visualModel: 111,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarDodge = DefaultGhostCarDodge;
function DefaultGhostCarLamborghini() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＭＩＵＲＡ',
                regionId: 18,
                manufacturer: 11,
                model: 103,
                visualModel: 125,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarLamborghini = DefaultGhostCarLamborghini;
function DefaultGhostCarHonda() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'Ｓ６６０',
                regionId: 18,
                manufacturer: 12,
                model: 105,
                visualModel: 130,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarHonda = DefaultGhostCarHonda;
function DefaultGhostCarAcura() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: 'ＡＣＵＲＡ',
                regionId: 18,
                manufacturer: 12,
                model: 107,
                visualModel: 128,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarAcura = DefaultGhostCarAcura;
function DefaultGhostCarPorsche() {
    return __awaiter(this, void 0, void 0, function () {
        var cars;
        return __generator(this, function (_a) {
            cars = wm.wm.protobuf.Car.create({
                carId: 999999999,
                name: '７１８',
                regionId: 18,
                manufacturer: 14,
                model: 121,
                visualModel: 144,
                defaultColor: 0,
                customColor: 0,
                wheel: 20,
                wheelColor: 0,
                aero: 0,
                bonnet: 0,
                wing: 0,
                mirror: 0,
                neon: 0,
                trunk: 0,
                plate: 0,
                plateColor: 0,
                plateNumber: 0,
                tunePower: 18,
                tuneHandling: 16,
                rivalMarker: 32,
                aura: 551,
                windowSticker: true,
                windowStickerString: 'ＢＡＹＳＨＯＲＥ',
                windowStickerFont: 0,
                title: 'Wangan Beginner',
                level: 65,
                lastPlayedAt: date,
                country: 'JPN',
                lastPlayedPlace: playedPlace
            });
            return [2 /*return*/, { cars: cars }];
        });
    });
}
exports.DefaultGhostCarPorsche = DefaultGhostCarPorsche;
//# sourceMappingURL=ghost_default_car.js.map