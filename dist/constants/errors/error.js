"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("./messages");
const getErrorResponse = (error) => {
    const delimiter = "Error: ";
    let message = error.toString().replace(delimiter, ""), code = 0;
    switch (error) {
        case messages_1.ErrInvalidFields:
            code = 400;
            break;
        case messages_1.ErrResourceNotFound:
            code = 404;
            break;
        case messages_1.ErrInternalServerError:
            code = 500;
            break;
        default:
            code = 500;
            message = messages_1.ErrInternalServerError.toString().replace(delimiter, "");
    }
    const result = {
        code,
        data: null,
        message,
    };
    return result;
};
exports.default = getErrorResponse;
