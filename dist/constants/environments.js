"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.MONGODB_URI = exports.PORT = exports.NODE_ENV = void 0;
exports.NODE_ENV = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "development";
exports.PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : "8080";
exports.MONGODB_URI = (_c = process.env.MONGODB_URI) !== null && _c !== void 0 ? _c : "";
exports.DB_NAME = (_d = process.env.DB_NAME) !== null && _d !== void 0 ? _d : "";
