import dayjs from "dayjs"
import mongodb from "mongodb"
import { db } from "../database/database.connection.js"

export async function registerTransaction(req,res){
    const day = dayjs(Date.now()).format("DD/MM")
    await db.collection("transactions").insertOne({...req.body,day})
    res.sendStatus(201)
}

export async function listTransactions(req,res){
    const email = res.locals.session.email
    const list = await db.collection("transactions").find({email}).toArray()
    res.status(200).send(list)
}

export async function deleteTransaction(req,res){
    const p = await db.collection("transactions").deleteOne({_id:new mongodb.ObjectId(req.params.itemId)})
    res.status(200).send(p)
}

export async function updateTransaction(req,res){
    const {value, desc, itemId} = req.body
    const p = await db.collection("transactions").updateOne({_id:new mongodb.ObjectId(itemId)},{$set:{value,desc}})
    res.status(200).send(p)
}