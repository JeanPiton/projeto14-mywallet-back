import "express-async-errors"

import cors from "cors"
import express, { json } from "express"
import { handleApplicationErrors } from "./middleware/errorHandling.js"
import router from "./routes/index.routes.js"

const server = express()

server.use(cors())
server.use(json())
server.use(router)
server.use(handleApplicationErrors)

const port = process.env.PORT || 5000
server.listen(port,()=>{console.log(`Server running at http://localhost:${port}`)})