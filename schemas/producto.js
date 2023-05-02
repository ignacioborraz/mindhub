const joi = require('joi')

module.exports = joi.object({
    nombre: joi.string()
        .required()
        .min(2)
        .max(50)
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LARGE'
        }),
    imagen: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'PHOTO_REQUIRED',
            'string.empty': 'PHOTO_REQUIRED',
            'string.uri': 'INVALID_URL'
        }),
    descripcion: joi.string()
        .required()
        .min(10)
        .max(500)
        .messages({
            'any.required': 'DESCR_REQUIRED',
            'string.empty': 'DESCR_REQUIRED',
            'string.min': 'DESCR_TOO_SHORT',
            'string.max': 'DESCR_TOO_LARGE'
        }),
    tipo: joi.string()
        .required()
        .valid('Medicamento','Juguete','medicamento','juguete')
        .messages({
            'any.required': 'TYPE_REQUIRED',
            'string.empty': 'TYPE_REQUIRED',
            'any.only': "TYPE_ONLY_WORDS"
        }),
    precio: joi.number()
        .required()
        .min(1)
        .max(1000)
        .messages({
            'any.required': 'PRICE_REQUIRED',
            'number.empty': 'PRICE_REQUIRED',
            'number.min': 'PRICE_TOO_SHORT',
            'number.max': 'PRICE_TOO_LARGE'
        }),
    stock: joi.number()
        .required()
        .min(1)
        .max(1000)
        .messages({
            'any.required': 'STOCK_REQUIRED',
            'number.empty': 'STOCK_REQUIRED',
            'number.min': 'STOCK_TOO_SHORT',
            'number.max': 'STOCK_TOO_LARGE'
        }),
})