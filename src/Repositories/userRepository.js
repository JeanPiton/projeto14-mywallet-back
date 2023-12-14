import { db } from "../database/database.connection.js"

async function findUser(email){
    const user = await db.collection("users").findOne({email})
    return user
}

async function createUser(name, email, password){
    await db.collection("users").insertOne({name, email, password})
}

export const userRepository = {
    findUser,
    createUser
}