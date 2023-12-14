import { sessionRepository } from "../Repositories/sessionRepository.js"
import unauthorizedError from "../errors/UnauthorizedError.js"

async function getToken(email, token){
    const user = await sessionRepository.findSession(email, token)
    if(!user) throw unauthorizedError("User not logged")
}

async function endSession(token){
    await sessionRepository.endSession(token)
}

export const sessionServices = {
    getToken,
    endSession
}