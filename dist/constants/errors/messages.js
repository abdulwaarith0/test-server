"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrInternalServerError = exports.ErrResourceNotFound = exports.ErrInvalidFields = void 0;
// 400 error codes
exports.ErrInvalidFields = new Error("invalid fields");
// 404 error codes
exports.ErrResourceNotFound = new Error("resource not found");
// 500 error codes
exports.ErrInternalServerError = new Error("internal server error");
