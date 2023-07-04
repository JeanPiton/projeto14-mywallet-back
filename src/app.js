import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient, MongoClient, MongoClient } from "mongodb"
import joi from "joi"
dotenv.config()

const PORT = 5000
const server = express()
server.use(cors())
server.use(json())
server.listen(PORT,()=>{console.log(`Server running at http://localhost:${PORT}`)})

const mongoClient = new MongoClient(process.env.DATABASE_URL)
.then(mongoClient.connect())
.catch(err=>{console.log(err)})
const db = mongoClient.db()