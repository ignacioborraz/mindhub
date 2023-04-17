const Animal = require('../models/Animal')

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
            let animals = await Animal.find(query).sort({nombre: order})
            if (animals) {
                res.status(200).json({
                    message: 'animales encontrados',
                    animals,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no hay animales',
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
            let animal = await Animal.findOne({
                _id: id
            })
            if (animal) {
                res.status(200).json({
                    message: 'animal encontrado',
                    animal,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no hay animal',
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