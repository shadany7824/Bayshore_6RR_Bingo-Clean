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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveStoryResult = void 0;
var long_1 = __importDefault(require("long"));
var __1 = require("../..");
// Import Util
var common = __importStar(require("../common"));
var check_step = __importStar(require("../games/games_util/check_step"));
// Save story result
function saveStoryResult(body, car) {
    return __awaiter(this, void 0, void 0, function () {
        var storyResult, stLoseBits, data, check_steps;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!(body.retired || body.timeup)) return [3 /*break*/, 3];
                    console.log('Game not retired / timed out, continuing ...');
                    storyResult = body === null || body === void 0 ? void 0 : body.stResult;
                    stLoseBits = void 0;
                    if (!storyResult) return [3 /*break*/, 3];
                    data = {
                        stClearDivCount: common.sanitizeInputNotZero(storyResult.stClearDivCount),
                        stPlayCount: common.sanitizeInput(storyResult.stPlayCount),
                        stClearCount: common.sanitizeInputNotZero(storyResult.stClearCount),
                        stConsecutiveWins: common.sanitizeInput(storyResult.stConsecutiveWins),
                        tuningPoints: common.sanitizeInput(storyResult.tuningPoint),
                        stCompleted100Episodes: common.sanitizeInput(storyResult.stCompleted_100Episodes),
                    };
                    // If the current consecutive wins is greater than the previous max
                    if (storyResult.stConsecutiveWins > car.stConsecutiveWinsMax) {
                        // Update the maximum consecutive wins;
                        data.stConsecutiveWinsMax = storyResult.stConsecutiveWins;
                    }
                    // If the lose bits are set, and are long data
                    if (long_1.default.isLong(storyResult.stLoseBits)) {
                        // Convert them to BigInt and add to the data
                        data.stLoseBits = common.getBigIntFromLong(storyResult.stLoseBits);
                        if (data.stLoseBits > 0) {
                            stLoseBits = data.stLoseBits;
                        }
                        // If a loss has been recorded
                        if (stLoseBits > 0) {
                            // End the win streak
                            data.stConsecutiveWins = 0;
                        }
                    }
                    else {
                        stLoseBits = 0;
                    }
                    return [4 /*yield*/, check_step.checkCurrentStep(body)];
                case 1:
                    check_steps = _a.sent();
                    // Set the ghost level to the correct level
                    data.ghostLevel = check_steps.ghostLevel;
                    // Check if clearBits is not null, and not lose the story
                    if (storyResult.stClearBits !== null && storyResult.stClearBits !== undefined) {
                        if (stLoseBits === 0) {
                            data.stClearBits = storyResult.stClearBits;
                        }
                    }
                    if (!(data.stClearCount || stLoseBits)) return [3 /*break*/, 3];
                    console.log('Updating story data');
                    // Update the car properties
                    return [4 /*yield*/, __1.prisma.car.update({
                            where: {
                                carId: body.carId
                            },
                            data: data
                        })];
                case 2:
                    // Update the car properties
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.saveStoryResult = saveStoryResult;
//# sourceMappingURL=story.js.map