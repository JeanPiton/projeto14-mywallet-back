import { Router } from "express";
import { getToken } from "../controllers/sessionController.js"

const sessionRouter = Router()

sessionRouter.post("/token", getToken)

export default sessionRouter