import joi from "joi"

export const schemaTransaction = joi.object({
    value:joi.number().positive().required(),
    desc:joi.string().required(),
    type:joi.valid('entrada','saida').required(),
    email:joi.string().email().required()
})

export const schemaDelete = joi.object({
    id:joi.objectId().required()
})