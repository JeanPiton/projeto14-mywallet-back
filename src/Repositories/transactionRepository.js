import mongodb from "mongodb"
import { db } from "../database/database.connection"

async function registerTransaction(info, day){
    await db.collection("transactions").insertOne({...info,day})
}

async function listTransactions(email){
    const list = await db.collection("transactions").find({email}).toArray()
    return list
}

async function deleteTransaction(itemId){
    const transaction = await db.collection("transactions").deleteOne({_id:new mongodb.ObjectId(itemId)})
    return transaction
}

async function updateTransaction(value, desc, itemId){
    const transaction = await db.collection("transactions").updateOne({_id:new mongodb.ObjectId(itemId)},{$set:{value,desc}})
    return transaction
}

export const transactionRepository = {
    registerTransaction,
    listTransactions,
    deleteTransaction,
    updateTransaction
}