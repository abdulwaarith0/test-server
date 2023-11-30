"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = (0, express_1.Router)();
router.get("/:id", controllers_1.getEntryHandler);
router.post("/", controllers_1.addNewEntryHandler);
router.get("/", controllers_1.getAllEntriesHandler);
exports.default = router;
