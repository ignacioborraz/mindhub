const Producto = require('../models/Producto')

const controller = {
    
    all: async (req, res) => {
        let order = 'asc'
        let query = {}
        if (req.query.tipo) {
            query.tipo = new RegExp(req.query.tipo, 'i')
        }
        if (req.query.nombre) {
            query.nombre = new RegExp(req.query.nombre, 'i')
        }
        if (req.query.orden) {
            order = req.query.orden
        }
        try {
            let products = await Producto.find(query).sort({nombre: order})
            if (products) {
                res.status(200).json({
                    message: 'productos encontrados',
                    products,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no hay productos',
                    success: false
                })
            }
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    one: async (req, res) => {
        const {
            id
        } = req.params
        try {
            let product = await Producto.findOne({
                _id: id
            })
            if (product) {
                res.status(200).json({
                    message: 'producto encontrado',
                    product,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no hay producto',
                    success: false
                })
            }
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    }

}

module.exports = controller