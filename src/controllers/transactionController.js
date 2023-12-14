import { transactionServices } from "../services/transactionServices.js"

export async function registerTransaction(req,res){
    const info = req.body
    await transactionServices.registerTransaction(info)
    res.sendStatus(201)
}

export async function listTransactions(req,res){
    const email = res.locals.session.email
    const list = await transactionServices.listTransactions(email)
    res.status(200).send(list)
}

export async function deleteTransaction(req,res){
    const itemId = req.params.itemId
    const transaction = await transactionServices.deleteTransaction(itemId)
    res.status(200).send(transaction)
}

export async function updateTransaction(req,res){
    const {value, desc, itemId} = req.body
    const transaction = await transactionServices.updateTransaction(value, desc, itemId)
    res.status(200).send(transaction)
}