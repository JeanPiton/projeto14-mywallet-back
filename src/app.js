import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import joi from "joi"
import bcrypt from "bcrypt"
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


server.post("/users",async (req,res)=>{
    const {name, email, password} = req.body
    const scheme = joi.object({
        name:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().required().min(3)
    })
    const validation = scheme.validate({name,email,password})
    try{
        if(validation.error) return res.status(422).send(validation.error.message)
        if(await db.collection("users").findOne({email:email})) return res.status(409).send("user already exists")
        const hash = bcrypt.hashSync(password,10)
        db.collection("users").insertOne({name:name,email:email,password:hash})
        return res.sendStatus(201)
    }catch(err){
        res.sendStatus(500)
    }
})