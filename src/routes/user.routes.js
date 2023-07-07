import {Router} from "express"
import { signin, signup } from "../controllers/userController.js"
import { validateSchema } from "../middleware/validateSchema.js"
import { schemaLogin, schemaSubscribe } from "../schemas/user.schema.js"

const userRouter = Router()

userRouter.post("/sign-up",validateSchema(schemaSubscribe), signup)
userRouter.post("/sign-in",validateSchema(schemaLogin), signin)

export default userRouter