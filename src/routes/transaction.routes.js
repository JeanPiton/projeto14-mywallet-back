import { Router } from "express";
import { validateParamSchema, validateSchema } from "../middleware/validateSchema.js";
import { schemaDelete, schemaTransaction } from "../schemas/transaction.schema.js";
import { deleteTransaction, listTransactions, registerTransaction } from "../controllers/transactionController.js";
import { validateAuth } from "../middleware/validateAuth.js";

const transactionRouter = Router()

transactionRouter.post("/transaction",validateAuth,validateSchema(schemaTransaction),registerTransaction)
transactionRouter.get("/transaction",validateAuth,listTransactions)
transactionRouter.delete("/transaction/:itemId",validateAuth,validateParamSchema(schemaDelete),deleteTransaction)

export default transactionRouter