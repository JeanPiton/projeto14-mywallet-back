import { Router } from "express";
import sessionRouter from "./session.routes.js";
import transactionRouter from "./transaction.routes.js";
import userRouter from "./user.routes.js";

const router = Router()

router.use(userRouter)
router.use(sessionRouter)
router.use(transactionRouter)

export default router