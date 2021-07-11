const Joi = require ('@hapi/joi');

const schemas = {
    signin: Joi.object().keys({
        username: Joi.string().min(5).required().messages({
            "string.empty": "Username is required",
            "string.min": "The name must be at least 5 characters long"
        }),
        pass: Joi.string().min(3).max(10).required().messages({
            "string.empty" : "The pass is required",
            "string.min" : "The pass must have at least 3 characters",
            "string.max" : "The pass can have a maximum of 10 characters"
        })
    }),
    signup: Joi.object().keys({
        username: Joi.string().min(5).required().messages({
            "string.empty": "Username is required",
            "string.min": "The name must be at least 5 characters long"
        }),

        pass: Joi.string().min(3).max(10).required().messages({
            "string.empty" : "The pass is required",
            "string.min" : "The pass must have at least 3 characters",
            "string.max" : "The pass can have a maximum of 10 characters"
        }),
        email: Joi.string().email().required().messages({
            "string.empty" : "email is required"
        }),
        country: Joi.string().required()
    })
}

module.exports = {schemas};