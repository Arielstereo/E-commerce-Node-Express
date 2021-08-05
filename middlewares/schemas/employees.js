const Joi = require ('@hapi/joi');

const schemas = {
    newEmployee: Joi.object().keys({
        name: Joi.string().required().messages({
            "string.empty": "* El nombre del empleado es obligatorio"
        }),
        surname: Joi.string().required().messages({
            "string.empty": "* El apellido del empleado es obligatorio"
        }),
        sector: Joi.string().required().messages({
            "string.empty" : "* El sector es obligatorio"
        }),
        file_number: Joi.string().max(5).required().messages({
            "string.empty": "* El número de legajo es obligatorio",
            "string.max": "* El número debe tener como máximo 5 caracteres"
        })
    })
}

module.exports = {schemas};