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
exports.getArea = void 0;
function getArea(path) {
    return __awaiter(this, void 0, void 0, function () {
        var area;
        return __generator(this, function (_a) {
            area = 0;
            if (path >= 0 && path <= 9) { // GID_PATH_C1
                area = Number(0);
            }
            else if (path >= 10 && path <= 15) { // GID_PATH_N9
                area = Number(1);
            }
            else if (path >= 16 && path <= 17) { // GID_PATH_WTEAST
                area = Number(2);
            }
            else if (path >= 18 && path <= 19) { // GID_PATH_WT_UP_DOWN
                area = Number(3);
            }
            else if (path >= 20 && path <= 26) { // GID_PATH_WG
                area = Number(4);
            }
            else if (path >= 27 && path <= 33) { // GID_PATH_KG
                area = Number(5);
            }
            else if (path >= 34 && path <= 37) { // GID_PATH_YS
                area = Number(6);
            }
            else if (path >= 38 && path <= 48) { // GID_PATH_KG_SHINYAMASHITA_MINATOMIRAI
                area = Number(7);
            }
            else if (path === 49) { // GID_PATH_NGR
                area = Number(8);
            }
            else if (path >= 50 && path <= 53) { // GID_PATH_OS
                area = Number(9);
            }
            else if (path >= 54 && path <= 55) { // GID_PATH_KB
                area = Number(10);
            }
            else if (path >= 58 && path <= 61) { // GID_PATH_FK
                area = Number(11);
            }
            else if (path >= 62 && path <= 63) { // GID_PATH_HK
                area = Number(12);
            }
            else if (path >= 64 && path <= 65) { // GID_PATH_TP
                area = Number(13);
            }
            else if (path >= 56 && path <= 57) { // GID_PATH_HS
                area = Number(18);
            }
            return [2 /*return*/, { area: area }];
        });
    });
}
exports.getArea = getArea;
//# sourceMappingURL=ghost_get_area_from_path.js.map