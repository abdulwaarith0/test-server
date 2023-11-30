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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEntriesHandler = exports.addNewEntryHandler = exports.getEntryHandler = void 0;
const services_1 = require("../../services");
const constants_1 = require("../../constants");
const getEntryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id || typeof id !== "string")
            throw constants_1.ErrInvalidFields;
        const result = yield (0, services_1.getEntry)(id);
        const response = {
            code: 200,
            message: null,
            data: result,
        };
        res.status(response.code).json(response);
    }
    catch (error) {
        const result = (0, constants_1.getErrorResponse)(error);
        res.status(result.code).json(result);
    }
});
exports.getEntryHandler = getEntryHandler;
const addNewEntryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        if (!(0, constants_1.validateNewEntry)(payload))
            throw constants_1.ErrInvalidFields;
        const result = yield (0, services_1.addNewEntry)(payload);
        const response = {
            code: 200,
            message: null,
            data: result,
        };
        res.status(response.code).json(response);
    }
    catch (error) {
        const result = (0, constants_1.getErrorResponse)(error);
        res.status(result.code).json(result);
    }
});
exports.addNewEntryHandler = addNewEntryHandler;
const getAllEntriesHandler = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, services_1.getAllEntries)();
        const response = {
            code: 200,
            message: null,
            data: result,
        };
        res.status(response.code).json(response);
    }
    catch (error) {
        const result = (0, constants_1.getErrorResponse)(error);
        res.status(result.code).json(result);
    }
});
exports.getAllEntriesHandler = getAllEntriesHandler;
