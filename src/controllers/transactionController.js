import { db } from "../database/database.connection.js"
import dayjs from "dayjs"

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
    const email = res.locals.email
    try {
        const list = await db.collection("transactions").find({email}).toArray()
        res.status(200).send(list)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}