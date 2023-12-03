import { Router } from "express";
import sectorRoutes from "./sectors";

const router = Router();

router.use(sectorRoutes);

export default router;
