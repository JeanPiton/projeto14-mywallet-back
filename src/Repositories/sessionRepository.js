import { db } from "../database/database.connection.js"

async function createSession(email, token){
    await db.collection("session").insertOne({email,token})
}

async function findSession(email, token){
    const user = await db.collection("session").findOne({email,token})
    return user
}

async function endSession(token){
    await db.collection("session").deleteOne({token})
}

export const sessionRepository = {
    createSession,
    findSession,
    endSession
}