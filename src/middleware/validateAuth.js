import { db } from "../database/database.connection.js"
import unauthorizedError from "../errors/UnauthorizedError.js"

export async function validateAuth(req,res,next){
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer ","")

    if(!token) throw unauthorizedError("token missing")

    const session = await db.collection("session").findOne({token})
    if(!session) throw unauthorizedError("not logged in")
    res.locals.session = session

    next()
}