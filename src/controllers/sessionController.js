import { sessionServices } from "../services/sessionServices.js"

export async function getToken(req,res){
    const {email,token} = req.body
    await sessionServices.getToken(email, token)
    res.sendStatus(200)
}

export async function endSession(req,res){
    const token = res.locals.session.token
    await sessionServices.endSession(token)
    res.sendStatus(200)
}