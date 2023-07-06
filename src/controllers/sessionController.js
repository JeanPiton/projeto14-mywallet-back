import { db } from "../database/database.connection.js"
import { schemaLogged } from "../schemas/session.schema.js"

export async function getToken(req,res){
    const {email,token} = req.body
    const validation = schemaLogged.validate({email,token})
    try{
        const user = await db.collection("session").findOne({email,token})
        console.log(req.body)
        console.log(user)
        if(user) return res.sendStatus(200)
        res.sendStatus(401)
    }catch(err){
        console.log(err)
    }
}