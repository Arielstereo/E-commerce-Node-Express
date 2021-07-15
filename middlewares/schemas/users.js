const Joi = require ('@hapi/joi');

const schemas = {
    signin: Joi.object().keys({
        username: Joi.string().min(5).required().messages({
            "string.empty": "* El nombre del usuario es obligatorio",
            "string.min": "* El nombre del usuario debe tener como minimo 5 caracteres"
        }),
        pass: Joi.string().min(3).max(10).required().messages({
            "string.empty" : "* La contraseña es obligatoria",
            "string.min" : "* La contraseña debe tener como minimo 3 caracteres",
            "string.max" : "* La contraseña debe tener como maximo 10 caracteres"
        })
    }),
    signup: Joi.object().keys({
        username: Joi.string().min(5).required().messages({
            "string.empty": "* El nombre del usuario es obligatorio",
            "string.min": "* El nombre de usuario debe tener como minimo 5 caracteres"
        }),

        pass: Joi.string().min(3).max(10).required().messages({
            "string.empty" : "* La contraseña es obligatoria",
            "string.min" : "* La contraseña debe tener como minimo 3 caracteres",
            "string.max" : "* La contraseña debe tener como maximo 10 caracteres"
        }),
        email: Joi.string().email().required().messages({
            "string.empty" : "* El email es obligatorio"
        }),
        country: Joi.string().required()
    })
}

module.exports = {schemas};