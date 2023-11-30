"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("../constants");
const connectMongoDB = () => {
    try {
        mongoose_1.default.set("strictQuery", false);
        const options = {
            enableUtf8Validation: true,
            ignoreUndefined: true,
            dbName: constants_1.DB_NAME,
        };
        mongoose_1.default.connect(constants_1.MONGODB_URI, options);
        console.log("MongoDB database connected!");
    }
    catch (error) {
        console.log("error while connecting mongodb: ", error.message);
        return;
    }
};
exports.default = connectMongoDB;
