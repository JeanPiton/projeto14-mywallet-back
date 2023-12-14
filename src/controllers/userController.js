import { userServices } from "../services/userServices.js"

export async function signup (req,res){
    const {name, email, password} = req.body
    await userServices.signup(name, email, password)
    return res.sendStatus(201)
}

export async function signin(req,res){
    const {email, password} = req.body
    const userInfo = await userServices.signin(email, password)
    res.status(200).send(userInfo)
}