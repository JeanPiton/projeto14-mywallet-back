import joi from "joi"

export const schemaLogged = joi.object({
    email:joi.string().email().required(),
    token:joi.string().required().uuid()
})