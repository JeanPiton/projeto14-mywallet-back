import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { sessionRepository } from "../Repositories/sessionRepository.js"
import { userRepository } from "../Repositories/userRepository.js"
import conflictError from "../errors/ConflictError.js"
import unauthorizedError from "../errors/UnauthorizedError.js"

async function signup(name, email, password){
    const user = await userRepository.findUser(email)
    if(user) throw conflictError("user already exists")
    const hash = bcrypt.hashSync(password,10)
    await userRepository.createUser(name, email, hash)
}

async function signin(email, password){
    const user = await userRepository.findUser(email)
    if(!user) throw unauthorizedError("user or password is incorrect")
    if(!bcrypt.compareSync(password,user.password)) throw unauthorizedError("user or password is incorrect")
    const token = uuid()
    await sessionRepository.createSession(email, token)
    return {name: user.name, token, email}
}

export const userServices = {
    signup,
    signin
}