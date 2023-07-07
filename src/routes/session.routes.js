import { Router } from "express";
import { getToken } from "../controllers/sessionController.js"
import { validateSchema } from "../middleware/validateSchema.js";
import { schemaLogged } from "../schemas/session.schema.js";

const sessionRouter = Router()

sessionRouter.post("/token",validateSchema(schemaLogged), getToken)

export default sessionRouter