import joi from "joi"
import bcrypt from "bcrypt"
import { db } from "../database/database.connection.js"
import {v4 as uuid} from "uuid"

export async function signup (req,res){
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
        console.log(err)
    }
}

export async function signin(req,res){
    const {email, password} = req.body
    const scheme = joi.object({email:joi.string().email().required(),password:joi.string().required()})
    const validation = scheme.validate({email, password})
    try{
        if(validation.error) return res.status(422).send(validation.error.message)
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