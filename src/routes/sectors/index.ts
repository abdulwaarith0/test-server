import { Router } from "express";
import {
	addNewEntryHandler,
	getAllEntriesHandler,
	getEntryHandler,
} from "../../controllers";

const router = Router();

router.get("/:id", getEntryHandler);
router.post("/", addNewEntryHandler);
router.get("/", getAllEntriesHandler);

export default router;
