import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { signup } from "./controllers/userController.js"
dotenv.config()

const PORT = 5000
const server = express()
server.use(cors())
server.use(json())
server.listen(PORT,()=>{console.log(`Server running at http://localhost:${PORT}`)})

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db
mongoClient.connect()
.then(()=>db = mongoClient.db())
.catch(err=>{console.log(err)})


server.post("/users",signup)