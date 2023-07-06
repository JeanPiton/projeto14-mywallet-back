import express, { json } from "express"
import cors from "cors"
import router from "./routes/index.routes.js"

const PORT = 5000
const server = express()
server.use(cors())
server.use(json())
server.listen(PORT,()=>{console.log(`Server running at http://localhost:${PORT}`)})

server.use(router)