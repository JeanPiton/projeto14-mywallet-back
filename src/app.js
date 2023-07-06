import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { signin, signup } from "./controllers/userController.js"
dotenv.config()

const PORT = 5000
const server = express()
server.use(cors())
server.use(json())
server.listen(PORT,()=>{console.log(`Server running at http://localhost:${PORT}`)})

const mongoClient = new MongoClient(process.env.DATABASE_URL)
try{
    await mongoClient.connect()
}catch(err){
    console.log(err)
}
export const db = mongoClient.db()

server.post("/sign-up", signup)

server.post("/sign-in", signin)