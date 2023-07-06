import joi from "joi"
import bcrypt from "bcrypt"

export async function signup (req,res){
    const {name, email, password} = req.body
    const scheme = joi.object({
        name:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().required().min(3)
    })
    const validation = scheme.validate({name,email,password})
    try{
        if(validation.error) return res.status(422).send(validation.error.message)
        if(await db.collection("users").findOne({email:email})) return res.status(409).send("user already exists")
        const hash = bcrypt.hashSync(password,10)
        db.collection("users").insertOne({name:name,email:email,password:hash})
        return res.sendStatus(201)
    }catch(err){
        res.sendStatus(500)
    }
}