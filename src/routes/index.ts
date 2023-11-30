import { Router, Response } from "express";
import sectorRoutes from "./sectors";

const router = Router();

router.get("/",  (_, res: Response) => res.status(200))
router.use("/api", sectorRoutes);

export default router;
