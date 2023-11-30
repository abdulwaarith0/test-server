import { Router, Response } from "express";
import sectorRoutes from "./sectors";

const router = Router();

router.get("/",  (_, res: Response) => res.status(200).json("pong!"))
router.use("/api", sectorRoutes);

export default router;
