"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const constants_1 = require("./constants");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://localhost:5173'
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use((0, morgan_1.default)(constants_1.NODE_ENV === "production" ? "combined" : "dev"));
app.use("/api/", routes_1.default);
exports.default = app;
