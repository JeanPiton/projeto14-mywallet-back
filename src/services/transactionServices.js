import dayjs from "dayjs"
import { transactionRepository } from "../Repositories/transactionRepository.js"

async function registerTransaction(info){
    const day = dayjs(Date.now()).format("DD/MM")
    await transactionRepository.registerTransaction(info, day)
}

async function listTransactions(email){
    const list = await transactionRepository.listTransactions(email)
    return list
}

async function deleteTransaction(itemId){
    const transaction = await transactionRepository.deleteTransaction(itemId)
    return transaction
}

async function updateTransaction(value, desc, itemId){
    const transaction = await transactionRepository.updateTransaction(value, desc, itemId)
    return transaction
}

export const transactionServices = {
    registerTransaction,
    listTransactions,
    deleteTransaction,
    updateTransaction
}