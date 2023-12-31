import joi from "joi"

export const schemaTransaction = joi.object({
    value:joi.number().positive().required(),
    desc:joi.string().required(),
    type:joi.valid('entrada','saida').required(),
    email:joi.string().email().required()
})

export const schemaDelete = joi.object({
    itemId:joi.string().hex().length(24).required()
})

export const schemaUpdate = joi.object({
    value:joi.number().positive().required(),
    desc:joi.string().required(),
    itemId:joi.string().hex().length(24).required()
})