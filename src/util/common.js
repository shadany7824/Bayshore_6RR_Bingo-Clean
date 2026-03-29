"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeStamp = exports.sanitizeInputNotZero = exports.sanitizeInput = exports.getBigIntFromLong = exports.sendResponse = void 0;
var long_1 = __importDefault(require("long"));
// sendResponse(message, res): Void
// Sends the server response to the client
function sendResponse(message, res) {
    // Get the end of the message
    var end = message.finish();
    // Built the response data
    var r = res
        .header('Server', 'v388 wangan')
        .header('Content-Type', 'application/x-protobuf; revision=12056')
        .header('Content-Length', end.length.toString())
        .status(200);
    // Send the response to the client
    r.send(Buffer.from(end));
}
exports.sendResponse = sendResponse;
// getBigIntFromLong(n: Long): BigInt
// Given a Long data object, converts 
// it into a BigInt and returns it.
function getBigIntFromLong(n) {
    // Create the default value
    var bigInt = BigInt(0);
    // If 'n' is a long data type
    if (n instanceof long_1.default) {
        // Perform the  bit-wise operations
        bigInt = bigInt | BigInt(n.high);
        bigInt = bigInt << BigInt(32);
        bigInt = bigInt | BigInt(n.low);
    }
    // Return the finished value
    return Number(bigInt);
}
exports.getBigIntFromLong = getBigIntFromLong;
function sanitizeInput(value) {
    return (value == null || value == undefined) ? undefined : value;
}
exports.sanitizeInput = sanitizeInput;
function sanitizeInputNotZero(value) {
    return (value !== null && value !== undefined && value !== 0) ? value : undefined;
}
exports.sanitizeInputNotZero = sanitizeInputNotZero;
function getTimeStamp(date) {
    if (date === void 0) { date = new Date(); }
    // Return a timestamp string for the current / provided time
    return String("[" + date.toLocaleString() + "]");
}
exports.getTimeStamp = getTimeStamp;
//# sourceMappingURL=common.js.map