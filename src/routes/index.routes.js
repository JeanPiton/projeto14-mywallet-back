import { Router } from "express";
import userRouter from "./user.routes.js";
import sessionRouter from "./session.routes.js";

const router = Router()

router.use(userRouter)
router.use(sessionRouter)

export default router