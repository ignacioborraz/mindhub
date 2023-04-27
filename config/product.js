const Joi = require('joi')

const schema = Joi.object({
    nombre: Joi.string()
        .required()
        .min(3)
        .max(30)
        .messages({
            'string.min': 'NOMBRE: min 3 letras',
            'string.max': 'NOMBRE: max 30 letras'
        }),
    imagen: Joi.string()
        .required()
        .min(3)
        .max(300)
        .uri()
        .messages({
            'string.min': 'FOTO: min 3 letras',
            'string.max': 'FOTO: max 300 letras'
        }),
    descripcion: Joi.string()
        .required()
        .min(3)
        .max(3000)
        .messages({
            'string.min': 'DESCRIPCION: min 3 letras',
            'string.max': 'DESCRIPCION: max 3000 letras'
        }),
    tipo: Joi.string()
        .required()
        .min(3)
        .max(30)
        .valid('Remedio','Juguete','remedio','juguete')
        .messages({
            'string.min': 'DESCRIPCION: min 3 letras',
            'string.max': 'DESCRIPCION: max 30 letras'
        }),
    precio: Joi.number()
        .min(0)
        .required(),
    stock: Joi.number()
        .min(0)
        .required()
})

module.exports = schema