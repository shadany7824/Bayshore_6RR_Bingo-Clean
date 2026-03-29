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
exports.checkScratchCar = void 0;
var __1 = require("../..");
// Sends the server response to the client
function checkScratchCar(userId, visualModel) {
    return __awaiter(this, void 0, void 0, function () {
        var checkUserItem, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(visualModel === 55)) return [3 /*break*/, 2];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 4
                            }
                        })];
                case 1:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 2:
                    if (!(visualModel === 73)) return [3 /*break*/, 4];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 3
                            }
                        })];
                case 3:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 4:
                    if (!(visualModel === 98)) return [3 /*break*/, 6];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 1
                            }
                        })];
                case 5:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 6:
                    if (!(visualModel === 26)) return [3 /*break*/, 8];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 2
                            }
                        })];
                case 7:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 8:
                    if (!(visualModel === 118)) return [3 /*break*/, 10];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 5
                            }
                        })];
                case 9:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 10:
                    if (!(visualModel === 119)) return [3 /*break*/, 12];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 6
                            }
                        })];
                case 11:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 12:
                    if (!(visualModel === 72)) return [3 /*break*/, 14];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 16
                            }
                        })];
                case 13:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 14:
                    if (!(visualModel === 11)) return [3 /*break*/, 16];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 17
                            }
                        })];
                case 15:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 16:
                    if (!(visualModel === 66)) return [3 /*break*/, 18];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 18
                            }
                        })];
                case 17:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 18:
                    if (!(visualModel === 75)) return [3 /*break*/, 20];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 19
                            }
                        })];
                case 19:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 20:
                    if (!(visualModel === 132)) return [3 /*break*/, 22];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 20
                            }
                        })];
                case 21:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 22:
                    if (!(visualModel === 129)) return [3 /*break*/, 24];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                category: 201,
                                itemId: 21
                            }
                        })];
                case 23:
                    checkUserItem = _a.sent();
                    return [3 /*break*/, 25];
                case 24:
                    checkUserItem = [];
                    _a.label = 25;
                case 25:
                    if (!(checkUserItem.length > 0)) return [3 /*break*/, 30];
                    i = 0;
                    _a.label = 26;
                case 26:
                    if (!(i < checkUserItem.length)) return [3 /*break*/, 29];
                    return [4 /*yield*/, __1.prisma.userItem.delete({
                            where: {
                                userItemId: checkUserItem[i].userItemId
                            }
                        })];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    i++;
                    return [3 /*break*/, 26];
                case 29:
                    console.log('Item used - ID ' + checkUserItem[0].itemId);
                    console.log('Item deleted!');
                    console.log("Item category was ".concat(checkUserItem[0].category, " and item game ID was ").concat(checkUserItem[0].itemId));
                    _a.label = 30;
                case 30: return [2 /*return*/];
            }
        });
    });
}
exports.checkScratchCar = checkScratchCar;
//# sourceMappingURL=check_car.js.map