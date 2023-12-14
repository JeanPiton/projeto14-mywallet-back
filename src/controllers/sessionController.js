import { db } from "../database/database.connection.js"
import unauthorizedError from "../errors/UnauthorizedError.js"

export async function getToken(req,res){
    const {email,token} = req.body
    const user = await db.collection("session").findOne({email,token})
    if(user) return res.sendStatus(200)
    throw unauthorizedError("User not logged")
}

export async function endSession(req,res){
    const token = res.locals.session.token
    await db.collection("session").deleteOne({token})
    res.sendStatus(200)
}