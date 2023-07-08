import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { schemaTransaction } from "../schemas/transaction.schema.js";
import { listTransactions, registerTransaction } from "../controllers/transactionController.js";
import { validateAuth } from "../middleware/validateAuth.js";

const transactionRouter = Router()

transactionRouter.post("/transaction",validateAuth,validateSchema(schemaTransaction),registerTransaction)
transactionRouter.get("/transaction",validateAuth,listTransactions)

export default transactionRouter