"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sectors_1 = __importDefault(require("./sectors"));
const router = (0, express_1.Router)();
// router.get("/",  (_, res: Response) => res.status(200).json("pong!"))
router.use(sectors_1.default);
exports.default = router;
