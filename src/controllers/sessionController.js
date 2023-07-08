import { db } from "../database/database.connection.js"

export async function getToken(req,res){
    const {email,token} = req.body
    try{
        const user = await db.collection("session").findOne({email,token})
        if(user) return res.sendStatus(200)
        res.sendStatus(401)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function endSession(req,res){
    const token = res.locals.session.token
    try {
        await db.collection("session").deleteOne({token})
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}