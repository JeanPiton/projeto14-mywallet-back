import { Router } from "express";
import { endSession, getToken } from "../controllers/sessionController.js"
import { validateSchema } from "../middleware/validateSchema.js";
import { schemaLogged } from "../schemas/session.schema.js";
import { validateAuth } from "../middleware/validateAuth.js";

const sessionRouter = Router()

sessionRouter.post("/token",validateSchema(schemaLogged), getToken)
sessionRouter.delete("/session",validateAuth,endSession)

export default sessionRouter