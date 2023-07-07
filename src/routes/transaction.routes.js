import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { schemaTransaction } from "../schemas/transaction.schema.js";
import { registerTransaction } from "../controllers/transactionController.js";
import { validateAuth } from "../middleware/validateAuth.js";

const transactionRouter = Router()

transactionRouter.post("/transaction",validateAuth,validateSchema(schemaTransaction),registerTransaction)

export default transactionRouter