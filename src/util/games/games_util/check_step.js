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
exports.checkCurrentStep = void 0;
// Save story result
function checkCurrentStep(body) {
    return __awaiter(this, void 0, void 0, function () {
        var currentStep, ghostLevel;
        return __generator(this, function (_a) {
            currentStep = 0;
            currentStep = body.car.tunePower + body.car.tuneHandling;
            ghostLevel = 1;
            if (currentStep >= 0 && currentStep <= 5) {
                ghostLevel = 1;
            }
            else if (currentStep >= 6 && currentStep <= 10) {
                ghostLevel = 2;
            }
            else if (currentStep >= 11 && currentStep <= 15) {
                ghostLevel = 3;
            }
            else if (currentStep >= 16 && currentStep <= 20) {
                ghostLevel = 4;
            }
            else if (currentStep >= 21 && currentStep <= 26) {
                ghostLevel = 5;
            }
            else if (currentStep >= 27 && currentStep <= 28) {
                ghostLevel = 6;
            }
            else if (currentStep >= 29 && currentStep <= 30) {
                ghostLevel = 7;
            }
            else if (currentStep === 31) {
                ghostLevel = 8;
            }
            else if (currentStep >= 32 && currentStep <= 33) {
                ghostLevel = 9;
            }
            else if (currentStep === 34) {
                ghostLevel = 10;
            }
            // Return the value to 'BASE_PATH/src/util/games/story.ts'
            return [2 /*return*/, { ghostLevel: ghostLevel }];
        });
    });
}
exports.checkCurrentStep = checkCurrentStep;
//# sourceMappingURL=check_step.js.map