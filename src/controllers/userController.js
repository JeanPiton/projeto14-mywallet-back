import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { db } from "../database/database.connection.js"
import conflictError from "../errors/ConflictError.js"
import unauthorizedError from "../errors/UnauthorizedError.js"

export async function signup (req,res){
    const {name, email, password} = req.body
    if(await db.collection("users").findOne({email:email})) throw conflictError("user already exists")
    const hash = bcrypt.hashSync(password,10)
    db.collection("users").insertOne({name:name,email:email,password:hash})
    return res.sendStatus(201)
}

export async function signin(req,res){
    const {email, password} = req.body
    const user = await db.collection("users").findOne({email})
    if(!user) throw unauthorizedError("user or password is incorect")
    if(!bcrypt.compareSync(password,user.password)) throw unauthorizedError("user or password is incorect")
    const token = uuid()
    await db.collection("session").insertOne({email,token})
    res.status(200).send({name:user.name,token,email})
}