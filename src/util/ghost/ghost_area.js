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
exports.GhostArea = void 0;
// OCM Area
function GhostArea(area) {
    return __awaiter(this, void 0, void 0, function () {
        var rampVal, pathVal;
        return __generator(this, function (_a) {
            rampVal = 0;
            pathVal = 0;
            // GID_RUNAREA_C1
            if (Number(area) === 0) {
                rampVal = Math.floor(Math.random() * 4);
                // GID_RAMP_C1_IN_KANDABASHI
                if (rampVal === 0) {
                    pathVal = Math.floor(Math.random() * 3); // path id 0-2
                }
                // GID_RAMP_C1_IN_SHIODOME
                else if (rampVal === 1) {
                    pathVal = 3;
                }
                // GID_RAMP_C1_OUT_KANDABASHI
                else if (rampVal === 2) {
                    pathVal = Math.floor(Math.random() * 3) + 4; // path id 4-6
                }
                // GID_RAMP_C1_OUT_SHIBA
                else if (rampVal === 3) {
                    pathVal = Math.floor(Math.random() * 3) + 7; // path id 7-9
                }
            }
            // GID_RUNAREA_RING
            else if (Number(area) === 1) {
                rampVal = Math.floor(Math.random() * 2) + 4;
                // GID_RAMP_RING_LEFT_ARIAKE
                if (rampVal === 4) {
                    pathVal = Math.floor(Math.random() * 3) + 10; // path id 10-12
                }
                // GID_RAMP_RING_RIGHT_KIBA
                else if (rampVal === 5) {
                    pathVal = Math.floor(Math.random() * 3) + 13; // path id 13-15
                }
            }
            // GID_RUNAREA_SUBTOKYO_3_4
            else if (Number(area) === 2) {
                rampVal = Math.floor(Math.random() * 2) + 6;
                // GID_RAMP_SUBTOKYO_SHIBUYA
                if (rampVal === 6) {
                    pathVal = 16;
                }
                // GID_RAMP_SUBTOKYO_GAIEN
                else if (rampVal === 7) {
                    pathVal = 17;
                }
            }
            // GID_RUNAREA_SUBTOKYO_5
            else if (Number(area) === 3) {
                rampVal = Math.floor(Math.random() * 2) + 8;
                // GID_RAMP_SUBTOKYO_DAIKANCHOU
                if (rampVal === 8) {
                    pathVal = 18;
                }
                // GID_RAMP_SUBTOKYO_SHINJUKU
                else if (rampVal === 9) {
                    pathVal = 19;
                }
            }
            // GID_RUNAREA_WANGAN
            else if (Number(area) === 4) {
                rampVal = Math.floor(Math.random() * 4) + 10;
                // GID_RAMP_WANGAN_EAST_AIRPORT
                if (rampVal === 10) {
                    pathVal = Math.floor(Math.random() * 3) + 20; // path id 20-22
                }
                // GID_RAMP_WANGAN_EAST_DAIKOKU
                else if (rampVal === 11) {
                    pathVal = 23;
                }
                // GID_RAMP_WANGAN_WEST_RINKAI
                else if (rampVal === 12) {
                    pathVal = 24;
                }
                // GID_RAMP_WANGAN_WEST_AIRPORT
                else if (rampVal === 13) {
                    pathVal = Math.floor(Math.random() * 2) + 25; // path id 25-26
                }
            }
            // GID_RUNAREA_K1
            else if (Number(area) === 5) {
                rampVal = Math.floor(Math.random() * 4) + 14;
                // GID_RAMP_K1_DOWN_SHIBAURA
                if (rampVal === 14) {
                    pathVal = 27;
                }
                // GID_RAMP_K1_DOWN_HANEDA
                else if (rampVal === 15) {
                    pathVal = Math.floor(Math.random() * 2) + 28; // path id 28-29
                }
                // GID_RAMP_K1_UP_HANEDA
                else if (rampVal === 16) {
                    pathVal = Math.floor(Math.random() * 2) + 30; // path id 30-31
                }
                // GID_RAMP_K1_UP_SHIOIRI
                else if (rampVal === 17) {
                    pathVal = Math.floor(Math.random() * 2) + 32; // path id 32-33
                }
            }
            // GID_RUNAREA_YAESU
            else if (Number(area) === 6) {
                rampVal = Math.floor(Math.random() * 3) + 18;
                // GID_RAMP_YAESU_SHIODOME
                if (rampVal === 18) {
                    pathVal = Math.floor(Math.random() * 2) + 34; // path id 34-35
                }
                // GID_RAMP_YAESU_KYOBASHI
                else if (rampVal === 19) {
                    pathVal = 36;
                }
                // GID_RAMP_YAESU_KANDABASHI
                else if (rampVal === 20) {
                    pathVal = 37;
                }
            }
            // GID_RUNAREA_YOKOHAMA
            else if (Number(area) === 7) {
                rampVal = Math.floor(Math.random() * 4) + 21;
                // GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA
                if (rampVal === 21) {
                    pathVal = Math.floor(Math.random() * 2) + 38; // path id 38-39
                }
                // GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI
                else if (rampVal === 22) {
                    pathVal = Math.floor(Math.random() * 3) + 40; // path id 40-42
                }
                // GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA
                else if (rampVal === 23) {
                    pathVal = Math.floor(Math.random() * 3) + 43; // path id 43-45
                }
                // GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI
                else if (rampVal === 24) {
                    pathVal = Math.floor(Math.random() * 3) + 46; // path id 46-48
                }
            }
            // GID_RUNAREA_NAGOYA
            else if (Number(area) === 8) {
                rampVal = 25;
                pathVal = 49;
            }
            // GID_RUNAREA_OSAKA
            else if (Number(area) === 9) {
                rampVal = 26;
                pathVal = Math.floor(Math.random() * 4) + 50;
            }
            // GID_RUNAREA_KOBE
            else if (Number(area) === 10) {
                rampVal = Math.floor(Math.random() * 2) + 27;
                // GID_RAMP_KOBE_SHINKOUCHOU
                if (rampVal === 27) {
                    pathVal = 54;
                }
                // GID_RAMP_KOBE_NADAOOHASHI
                else if (rampVal === 28) {
                    pathVal = 55;
                }
            }
            // GID_RUNAREA_FUKUOKA
            else if (Number(area) === 11) {
                rampVal = Math.floor(Math.random() * 4) + 29;
                // GID_RAMP_FUKUOKA_WEST_MEIHAMA
                if (rampVal === 29) {
                    pathVal = 58;
                }
                // GID_RAMP_FUKUOKA_WEST_HAKATA
                else if (rampVal === 30) {
                    pathVal = 59;
                }
                // GID_RAMP_FUKUOKA_EAST_NISHI
                else if (rampVal === 31) {
                    pathVal = 60;
                }
                // GID_RAMP_FUKUOKA_EAST_HANDOUBASHI
                else if (rampVal === 32) {
                    pathVal = 61;
                }
            }
            // GID_RUNAREA_HAKONE
            else if (Number(area) === 12) {
                rampVal = Math.floor(Math.random() * 2) + 33;
                // GID_RAMP_HAKONE_FOR
                if (rampVal === 33) {
                    pathVal = 62;
                }
                // GID_RAMP_HAKONE_BACK
                else if (rampVal === 34) {
                    pathVal = 63;
                }
            }
            // GID_RUNAREA_TURNPIKE
            else if (Number(area) === 13) {
                rampVal = Math.floor(Math.random() * 2) + 35;
                // GID_RAMP_TURNPIKE_UP
                if (rampVal === 35) {
                    pathVal = 64;
                }
                // GID_RAMP_TURNPIKE_DOWN
                else if (rampVal === 36) {
                    pathVal = 65;
                }
            }
            // 14 - 16 are dummy area, 17 is GID_RUNAREA_C1_CLOSED
            // GID_RUNAREA_HIROSHIMA
            else if (Number(area) === 18) {
                rampVal = Math.floor(Math.random() * 2) + 37;
                // GID_RAMP_HIROSHIMA_SHINONOME
                if (rampVal === 37) {
                    pathVal = 56;
                }
                // GID_RAMP_HIROSHIMA_UJINA
                else if (rampVal === 38) {
                    pathVal = 57;
                }
            }
            return [2 /*return*/, { rampVal: rampVal, pathVal: pathVal }];
        });
    });
}
exports.GhostArea = GhostArea;
//# sourceMappingURL=ghost_area.js.map