const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

const Producto = mongoose.model(
    'productos',
    schema
)

module.exports = Producto