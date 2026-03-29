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
exports.giveMeterRewards = void 0;
var __1 = require("../..");
// Save story result
function giveMeterRewards(body) {
    return __awaiter(this, void 0, void 0, function () {
        var carItemCount, itemIdVal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.prisma.carItem.count({
                        where: {
                            carId: body.carId,
                            category: 15,
                            itemId: {
                                lte: 34,
                                gte: 1,
                            },
                            NOT: {
                                itemId: { in: [2, 3, 5, 6, 29, 30, 31, 32, 33, 34] }, // Except story meter
                            },
                        },
                        /*where: {
                            itemId: { notIn: [2, 3, 5, 6, 29, 30, 31, 32, 33 ,34] },
                        },*/
                    })];
                case 1:
                    carItemCount = _a.sent();
                    itemIdVal = 0;
                    if (carItemCount === 0) {
                        itemIdVal = 1; // Namco Meter
                    }
                    else if (carItemCount === 1) {
                        itemIdVal = 4; // Special Meter
                    }
                    else if (carItemCount === 2) {
                        itemIdVal = 7; // Metal 1 (Black)
                    }
                    else if (carItemCount === 3) {
                        itemIdVal = 8; // Metal 2 (Red)
                    }
                    else if (carItemCount === 4) {
                        itemIdVal = 9; // Cyber 1 (Blue)
                    }
                    else if (carItemCount === 5) {
                        itemIdVal = 10; // Cyber 2 (Red)
                    }
                    else if (carItemCount === 6) {
                        itemIdVal = 11; // Aluminium 1 (Blue)
                    }
                    else if (carItemCount === 7) {
                        itemIdVal = 12; // Aluminium 1 (Red)
                    }
                    else if (carItemCount === 8) {
                        itemIdVal = 13; // Jungle 1 (Green)
                    }
                    else if (carItemCount === 9) {
                        itemIdVal = 14; // Jungle 2 (Brown)
                    }
                    else if (carItemCount === 10) {
                        itemIdVal = 15; // Dessert 1 (Red)
                    }
                    else if (carItemCount === 11) {
                        itemIdVal = 16; // Dessert 2 (Brown)
                    }
                    else if (carItemCount === 12) {
                        itemIdVal = 17; // Pirate 1 (Red)
                    }
                    else if (carItemCount === 13) {
                        itemIdVal = 18; // Pirate 2 (Blue)
                    }
                    else if (carItemCount === 14) {
                        itemIdVal = 19; // Fire Pattern 1 (Red)
                    }
                    else if (carItemCount === 15) {
                        itemIdVal = 20; // Fire Pattern 2 (Blue)
                    }
                    else if (carItemCount === 16) {
                        itemIdVal = 21; // Silver Access
                    }
                    else if (carItemCount === 17) {
                        itemIdVal = 22; // Gold Access
                    }
                    else if (carItemCount === 18) {
                        itemIdVal = 23; // Steampunk 1 (Gold)
                    }
                    else if (carItemCount === 19) {
                        itemIdVal = 24; // Steampunk 2 (Green)
                    }
                    else if (carItemCount === 20) {
                        itemIdVal = 25; // Dragon 1 (Gold)
                    }
                    else if (carItemCount === 21) {
                        itemIdVal = 26; // Dragon 2 (Blue)
                    }
                    else if (carItemCount === 22) {
                        itemIdVal = 27; // Light Line 1 (Blue)
                    }
                    else if (carItemCount === 23) {
                        itemIdVal = 28; // Light Line 2 (Orange)
                    }
                    if (!(itemIdVal !== 0)) return [3 /*break*/, 3];
                    console.log("carID ".concat(body.carId, " do n*100 play, continue give reward... meter ID ").concat(itemIdVal));
                    return [4 /*yield*/, __1.prisma.carItem.create({
                            data: {
                                carId: body.carId,
                                category: 15,
                                itemId: itemIdVal,
                                amount: 1
                            }
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.giveMeterRewards = giveMeterRewards;
//# sourceMappingURL=meter_reward.js.map