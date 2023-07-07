import bcrypt from "bcrypt"
import { db } from "../database/database.connection.js"
import {v4 as uuid} from "uuid"

export async function signup (req,res){
    const {name, email, password} = req.body
    try{
        if(await db.collection("users").findOne({email:email})) return res.status(409).send("user already exists")
        const hash = bcrypt.hashSync(password,10)
        db.collection("users").insertOne({name:name,email:email,password:hash})
        return res.sendStatus(201)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export async function signin(req,res){
    const {email, password} = req.body
    try{
        const user = await db.collection("users").findOne({email})
        if(!user) return res.status(404).send("user not found")
        if(!bcrypt.compareSync(password,user.password)) return res.sendStatus(401)
        const token = uuid()
        await db.collection("session").insertOne({email,token})
        res.status(200).send({name:user.name,token,email})
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}