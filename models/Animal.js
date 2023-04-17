const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    patas: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true,
    },
    cantidad_mascotas: {
        type: Number,
        required: true
    },
    gasto_mensual_por_mascota: {
        type: Number,
        required: true
    }
})

const Animal = mongoose.model(
    'animals',
    schema
)

module.exports = Animal