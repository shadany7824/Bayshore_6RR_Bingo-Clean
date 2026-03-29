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
exports.getScratchSheetProto = exports.getScratchItemList = exports.generateScratchSheet = exports.dayPassed = exports.stockTunedCars = exports.basicTunedCars = exports.fullyTunedCars = exports.scratchCars = void 0;
var __1 = require("..");
var config_1 = require("../config");
//Import Proto
var wm = __importStar(require("../wmmt/wm.proto"));
// *** CONSTANTS ***
// Scratch Sheets
var scratchSheets = [
    [
        [201, 4],
        // Rival Markers
        [26, 40], [26, 40], [26, 40], [26, 40],
        [26, 18], [26, 18], [26, 18], [26, 18],
        [26, 1], [26, 1], [26, 1], [26, 1],
        [26, 3], [26, 3], [26, 3], [26, 3],
        [26, 17], [26, 17], [26, 17], [26, 17],
        [26, 31], [26, 31], [26, 31], [26, 31],
        // Window Stickers
        [25, 24], [25, 24], [25, 24], [25, 24], [25, 24],
        [25, 8], [25, 8], [25, 8], [25, 8], [25, 8],
        [25, 3], [25, 3], [25, 3], [25, 3], [25, 3],
        [25, 6], [25, 6], [25, 6], [25, 6], [25, 6],
        [25, 14], [25, 14], [25, 14], [25, 14], [25, 14], // TRIBAL
    ],
    [
        [201, 3],
        // Rival Markers
        [26, 29], [26, 29], [26, 29], [26, 29],
        [26, 9], [26, 9], [26, 9], [26, 9],
        [26, 2], [26, 2], [26, 2], [26, 2],
        [26, 6], [26, 6], [26, 6], [26, 6],
        [26, 8], [26, 8], [26, 8], [26, 8],
        [26, 19], [26, 19], [26, 19], [26, 19],
        // Window Stickers
        [25, 28], [25, 28], [25, 28], [25, 28], [25, 28],
        [25, 11], [25, 11], [25, 11], [25, 11], [25, 11],
        [25, 5], [25, 5], [25, 5], [25, 5], [25, 5],
        [25, 4], [25, 4], [25, 4], [25, 4], [25, 4],
        [25, 16], [25, 16], [25, 16], [25, 16], [25, 16], // CARDS
    ],
    [
        [201, 1],
        // Rival Markers
        [26, 34], [26, 34], [26, 34], [26, 34],
        [26, 36], [26, 36], [26, 36], [26, 36],
        [26, 4], [26, 4], [26, 4], [26, 4],
        [26, 5], [26, 5], [26, 5], [26, 5],
        [26, 10], [26, 10], [26, 10], [26, 10],
        [26, 14], [26, 14], [26, 14], [26, 14],
        [26, 20], [26, 20], [26, 20], [26, 20],
        // Window Stickers
        [25, 13], [25, 13], [25, 13], [25, 13], [25, 13],
        [25, 7], [25, 7], [25, 7], [25, 7],
        [25, 9], [25, 9], [25, 9], [25, 9],
        [25, 18], [25, 18], [25, 18], [25, 18],
        [25, 1], [25, 1], [25, 1], [25, 1], // FIRE PATTERN		
    ],
    [
        [201, 2],
        // Rival Markers
        [26, 33], [26, 33], [26, 33], [26, 33],
        [26, 7], [26, 7], [26, 7], [26, 7],
        [26, 15], [26, 15], [26, 15], [26, 15],
        [26, 16], [26, 16], [26, 16], [26, 16],
        [26, 21], [26, 21], [26, 21], [26, 21],
        [26, 24], [26, 24], [26, 24], [26, 24],
        [26, 30], [26, 30], [26, 30], [26, 30],
        // Window Stickers
        [25, 21], [25, 21], [25, 21], [25, 21], [25, 21],
        [25, 10], [25, 10], [25, 10], [25, 10],
        [25, 12], [25, 12], [25, 12], [25, 12],
        [25, 20], [25, 20], [25, 20], [25, 20],
        [25, 27], [25, 27], [25, 27], [25, 27], // LONGHORN
    ],
    [
        [201, 5],
        // Rival Markers
        [26, 28], [26, 28], [26, 28], [26, 28],
        [26, 39], [26, 39], [26, 39], [26, 39],
        [26, 12], [26, 12], [26, 12], [26, 12],
        [26, 22], [26, 22], [26, 22], [26, 22],
        [26, 23], [26, 23], [26, 23], [26, 23],
        [26, 25], [26, 25], [26, 25], [26, 25],
        [26, 27], [26, 27], [26, 27], [26, 27],
        // Window Stickers
        [25, 26], [25, 26], [25, 26], [25, 26], [25, 26],
        [25, 23], [25, 23], [25, 23], [25, 23],
        [25, 29], [25, 29], [25, 29], [25, 29],
        [25, 2], [25, 2], [25, 2], [25, 2],
        [25, 19], [25, 19], [25, 19], [25, 19], // ANGEL HEART
    ],
    [
        [201, 6],
        // Rival Markers
        [26, 32], [26, 32], [26, 32], [26, 32],
        [26, 38], [26, 38], [26, 38], [26, 38],
        [26, 11], [26, 11], [26, 11], [26, 11],
        [26, 13], [26, 13], [26, 13], [26, 13],
        [26, 26], [26, 26], [26, 26], [26, 26],
        [26, 35], [26, 35], [26, 35], [26, 35],
        [26, 37], [26, 37], [26, 37], [26, 37],
        // Window Stickers
        [25, 25], [25, 25], [25, 25], [25, 25], [25, 25],
        [25, 30], [25, 30], [25, 30], [25, 30],
        [25, 17], [25, 17], [25, 17], [25, 17],
        [25, 22], [25, 22], [25, 22], [25, 22],
        [25, 15], [25, 15], [25, 15], [25, 15], // TRIBAL 2
    ],
    [
        [201, 16],
        // Rival Markers
        [26, 71], [26, 71], [26, 71], [26, 71],
        [26, 73], [26, 73], [26, 73], [26, 73],
        [26, 41], [26, 41], [26, 41], [26, 41],
        [26, 69], [26, 69], [26, 69], [26, 69],
        [26, 66], [26, 66], [26, 66], [26, 66],
        [26, 47], [26, 47], [26, 47], [26, 47],
        // Window Stickers
        [25, 31], [25, 31], [25, 31], [25, 31], [25, 31],
        [25, 32], [25, 32], [25, 32], [25, 32], [25, 32],
        [25, 33], [25, 33], [25, 33], [25, 33], [25, 33],
        [25, 34], [25, 34], [25, 34], [25, 34], [25, 34],
        [25, 35], [25, 35], [25, 35], [25, 35], [25, 35], // TRAP
    ],
    [
        [201, 17],
        // Rival Markers
        [26, 74], [26, 74], [26, 74], [26, 74],
        [26, 79], [26, 79], [26, 79], [26, 79],
        [26, 59], [26, 59], [26, 59], [26, 59],
        [26, 60], [26, 60], [26, 60], [26, 60],
        [26, 61], [26, 61], [26, 61], [26, 61],
        [26, 62], [26, 62], [26, 62], [26, 62],
        // Window Stickers
        [25, 36], [25, 36], [25, 36], [25, 36], [25, 36],
        [25, 37], [25, 37], [25, 37], [25, 37], [25, 37],
        [25, 38], [25, 38], [25, 38], [25, 38], [25, 38],
        [25, 39], [25, 39], [25, 39], [25, 39], [25, 39],
        [25, 40], [25, 40], [25, 40], [25, 40], [25, 40], // TECHNO 2
    ],
    [
        [201, 18],
        // Rival Markers
        [26, 70], [26, 70], [26, 70], [26, 70],
        [26, 77], [26, 77], [26, 77], [26, 77],
        [26, 54], [26, 54], [26, 54], [26, 54],
        [26, 57], [26, 57], [26, 57], [26, 57],
        [26, 55], [26, 55], [26, 55], [26, 55],
        [26, 56], [26, 56], [26, 56], [26, 56],
        [26, 45], [26, 45], [26, 45], [26, 45],
        // Window Stickers
        [25, 41], [25, 41], [25, 41], [25, 41], [25, 41],
        [25, 42], [25, 42], [25, 42], [25, 42],
        [25, 43], [25, 43], [25, 43], [25, 43],
        [25, 44], [25, 44], [25, 44], [25, 44],
        [25, 45], [25, 45], [25, 45], [25, 45], // THORNS
    ],
    [
        [201, 19],
        // Rival Markers
        [26, 76], [26, 76], [26, 76], [26, 76],
        [26, 78], [26, 78], [26, 78], [26, 78],
        [26, 49], [26, 49], [26, 49], [26, 49],
        [26, 43], [26, 43], [26, 43], [26, 43],
        [26, 67], [26, 67], [26, 67], [26, 67],
        [26, 64], [26, 64], [26, 64], [26, 64],
        [26, 46], [26, 46], [26, 46], [26, 46],
        // Window Stickers
        [25, 46], [25, 46], [25, 46], [25, 46], [25, 46],
        [25, 47], [25, 47], [25, 47], [25, 47],
        [25, 48], [25, 48], [25, 48], [25, 48],
        [25, 49], [25, 49], [25, 49], [25, 49],
        [25, 50], [25, 50], [25, 50], [25, 50], // PUZZLE
    ],
    [
        [201, 20],
        // Rival Markers
        [26, 75], [26, 75], [26, 75], [26, 75],
        [26, 72], [26, 72], [26, 72], [26, 72],
        [26, 42], [26, 42], [26, 42], [26, 42],
        [26, 63], [26, 63], [26, 63], [26, 63],
        [26, 48], [26, 48], [26, 48], [26, 48],
        [26, 65], [26, 65], [26, 65], [26, 65],
        [26, 68], [26, 68], [26, 68], [26, 68],
        // Window Stickers
        [25, 51], [25, 51], [25, 51], [25, 51], [25, 51],
        [25, 52], [25, 52], [25, 52], [25, 52],
        [25, 53], [25, 53], [25, 53], [25, 53],
        [25, 54], [25, 54], [25, 54], [25, 54],
        [25, 55], [25, 55], [25, 55], [25, 55], // CHAIN
    ],
    [
        [201, 21],
        // Rival Markers
        [26, 80], [26, 80], [26, 80], [26, 80],
        [26, 51], [26, 51], [26, 51], [26, 51],
        [26, 50], [26, 50], [26, 50], [26, 50],
        [26, 52], [26, 52], [26, 52], [26, 52],
        [26, 53], [26, 53], [26, 53], [26, 53],
        [26, 44], [26, 44], [26, 44], [26, 44],
        [26, 58], [26, 58], [26, 58], [26, 58],
        // Window Stickers
        [25, 56], [25, 56], [25, 56], [25, 56], [25, 56],
        [25, 57], [25, 57], [25, 57], [25, 57],
        [25, 58], [25, 58], [25, 58], [25, 58],
        [25, 59], [25, 59], [25, 59], [25, 59],
        [25, 60], [25, 60], [25, 60], [25, 60], // WANGAN URL 2
    ]
];
// Terminal scratch cars only
exports.scratchCars = [
    4, 3, 1, 2, 5, 6, 16, 17, 18, 19, 20, 21
];
// Fully tuned special cars
exports.fullyTunedCars = [
    4, 3, 1, 2, 5, 6, 16, 17, 18, 19, 20, 21, 39
];
// Basic tuned special cars
exports.basicTunedCars = [
    38
];
// Stock tuned special cars
exports.stockTunedCars = [
    7, 8, 9, 10, 11, 12, 13, 14, 15,
    22, 23, 24, 25, 26, 27, 37, 28,
    29, 30, 31, 32, 33, 34, 35, 36
];
// *** FUNCTIONS *** 
// Get a random integer within a range
function getRandom(a, b) {
    // Return a random integer within the range
    return Math.floor(Math.random() * (b - a)) + a;
}
// Get the days since epoch
function daysSinceEpoch(date) {
    // Return the days since the epoch
    return Math.floor(Number(date) / 8.64e7);
}
;
// Fisher yates shuffle for the scratch card elements
function shuffleScratchSheet(array) {
    // Loop over all of the array elements
    for (var i = array.length - 1; i > 0; i--) {
        // Randomly swap items in the array
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // Return the sorted array
    return array;
}
// Generates a random scratch sheet
// Contents: 
// 1 Random Scratch Car
// 25 Random Scratch Stickers
// 24 Random Scratch Versus Markers
function getRandomScratchSheet(carId) {
    // Scratch items list
    var items = [];
    // Add the scratch car for the given index
    items.push([201, exports.scratchCars[carId % exports.scratchCars.length]]);
    // Add the random scratch stickers
    // Five different sticker styles
    for (var i = 0; i < 5; i++) {
        // Get a random versus marker
        var sticker = getRandom(0, 60);
        // Five different instances
        for (var j = 0; j < 5; j++) {
            // Add marker to the list
            items.push([25, sticker + 1]);
        }
    }
    // Add the random versus markers
    // Six different marker styles
    for (var i = 0; i < 6; i++) {
        // Get a random versus marker
        var marker = getRandom(0, 80);
        // Four different instances
        for (var j = 0; j < 4; j++) {
            // Add marker to the list
            items.push([26, marker + 1]);
        }
    }
    // Return the items list
    return items;
}
// Get the days passed between dates 'a' and 'b'
function dayPassed(a, b) {
    // Return 1 if a day has passed since the last scratch, 0 otherwise
    return daysSinceEpoch(a) > daysSinceEpoch(b) ? 0 : 1;
}
exports.dayPassed = dayPassed;
// Async function for generating a new scratch sheet
function generateScratchSheet(userId, sheetNo) {
    return __awaiter(this, void 0, void 0, function () {
        var scratchItems, scratchType, sheet, _i, scratchItems_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scratchItems = [];
                    scratchType = config_1.Config.getConfig().gameOptions.scratchType;
                    // Switch on the scratch sheet type in the config
                    switch (scratchType) {
                        // More options maybe added in the future
                        case 0: // Same as actual game (randomised after last set)
                            // If the sheet number has associated data
                            if (scratchSheets.length >= sheetNo) {
                                // Get the data for the requested sheet
                                scratchItems = scratchSheets[sheetNo - 1];
                            }
                            else // Sheet is out of range
                             {
                                // Generate a random (standard) scratch sheet
                                // scratchItems = getRandomScratchSheet(sheetNo-1);
                            }
                            break;
                        case 1: // Infinite random scratch sheets (Standard Items)
                            // Generate a random (standard) scratch sheet
                            scratchItems = getRandomScratchSheet(sheetNo - 1);
                            break;
                        default: // Not implemented
                            console.log("Method not implemented: " + scratchType);
                            break;
                    }
                    if (!(scratchItems.length > 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, __1.prisma.scratchSheet.create({
                            data: {
                                userId: userId,
                                sheetNo: sheetNo
                            }
                        })];
                case 1:
                    sheet = _a.sent();
                    // Shuffle the scratch items list
                    scratchItems = shuffleScratchSheet(scratchItems);
                    _i = 0, scratchItems_1 = scratchItems;
                    _a.label = 2;
                case 2:
                    if (!(_i < scratchItems_1.length)) return [3 /*break*/, 5];
                    item = scratchItems_1[_i];
                    return [4 /*yield*/, __1.prisma.scratchSquare.create({
                            data: {
                                sheetId: sheet.id,
                                category: item[0],
                                itemId: item[1],
                                earned: false
                            }
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 7];
                case 6:
                    console.log("No scratch items. Sheet not created");
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.generateScratchSheet = generateScratchSheet;
function getScratchItemList(userId, date) {
    return __awaiter(this, void 0, void 0, function () {
        var ownedUserItems, scratchUserItems, _i, scratchUserItems_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ownedUserItems = [];
                    return [4 /*yield*/, __1.prisma.userItem.findMany({
                            where: {
                                userId: userId,
                                type: 1 // Scratch Item
                            }
                        })];
                case 1:
                    scratchUserItems = _a.sent();
                    // Loop over all of the returned items
                    for (_i = 0, scratchUserItems_1 = scratchUserItems; _i < scratchUserItems_1.length; _i++) {
                        item = scratchUserItems_1[_i];
                        // Add all of the scratch items to the list
                        ownedUserItems.push(wm.wm.protobuf.UserItem.create({
                            category: item.category,
                            itemId: item.itemId,
                            userItemId: item.userItemId,
                            earnedAt: item.earnedAt
                            // no expiration date
                        }));
                    }
                    // Return the owned user items list
                    return [2 /*return*/, ownedUserItems];
            }
        });
    });
}
exports.getScratchItemList = getScratchItemList;
function getScratchSheetProto(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var scratchSheetProto, scratchSheets, _i, scratchSheets_1, sheet, scratchSquareProto, _a, _b, square;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    scratchSheetProto = [];
                    return [4 /*yield*/, __1.prisma.scratchSheet.findMany({
                            where: {
                                userId: userId
                            },
                            include: {
                                squares: {
                                    orderBy: {
                                        id: 'asc'
                                    }
                                }
                            }
                        })];
                case 1:
                    scratchSheets = _c.sent();
                    // Loop over all of the protos
                    for (_i = 0, scratchSheets_1 = scratchSheets; _i < scratchSheets_1.length; _i++) {
                        sheet = scratchSheets_1[_i];
                        scratchSquareProto = [];
                        // Loop over all of the squares
                        for (_a = 0, _b = sheet.squares; _a < _b.length; _a++) {
                            square = _b[_a];
                            // Add the current square to the protobuf array
                            scratchSquareProto.push(wm.wm.protobuf.ScratchSheet.ScratchSquare.create({
                                category: square.category,
                                itemId: square.itemId,
                                earned: square.earned
                            }));
                        }
                        // Add the scratch sheet to the sheets list
                        scratchSheetProto.push(wm.wm.protobuf.ScratchSheet.create({
                            squares: scratchSquareProto
                        }));
                    }
                    // Return the scratch sheet proto object
                    return [2 /*return*/, scratchSheetProto];
            }
        });
    });
}
exports.getScratchSheetProto = getScratchSheetProto;
//# sourceMappingURL=scratch.js.map