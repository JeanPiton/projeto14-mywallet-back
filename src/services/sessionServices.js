import { db } from "../database/database.connection.js"
import unauthorizedError from "../errors/UnauthorizedError.js"

async function getToken(email, token){
    const user = await db.collection("session").findOne({email,token})
    if(!user) throw unauthorizedError("User not logged")
}

async function endSession(token){
    await db.collection("session").deleteOne({token})
}

export const sessionServices = {
    getToken,
    endSession
}