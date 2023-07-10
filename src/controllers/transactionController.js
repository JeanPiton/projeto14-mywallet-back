import { db } from "../database/database.connection.js"
import dayjs from "dayjs"
import mongodb from "mongodb"

export async function registerTransaction(req,res){
    const day = dayjs(Date.now()).format("DD/MM")
    try {
        await db.collection("transactions").insertOne({...req.body,day})
        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function listTransactions(req,res){
    const email = res.locals.session.email
    try {
        const list = await db.collection("transactions").find({email}).toArray()
        res.status(200).send(list)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function deleteTransaction(req,res){
    try {
        const p = await db.collection("transactions").deleteOne({_id:new mongodb.ObjectId(req.params.itemId)})
        res.status(200).send(p)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}