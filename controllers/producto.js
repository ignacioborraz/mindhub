const Producto = require('../models/Producto')
let actualDate = new Date("2022-10-15")

const controller = {
    
    create: async (req, res) => {
        if (req.user.role === 'admin') {
            req.body.permition = false
            try {
                let product = await new Producto(req.body).save()
                res.status(201).json({
                    date: 'product created',
                    success: true,
                    id: product._id
                })
            } catch (error) {
                console.log(error)
                res.status(400).json({
                    message: error.message,
                    success: false
                })
            }
        } else {
            res.status(400).json({
                message: "unathorized",
                success: false
            })
        }
    },

    all: async (req, res) => {
        let products
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
            products = await Producto.find(query).sort({nombre: order})
            res.json({ products })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    read: async (req, res) => {
        const {
            id
        } = req.params
        try {
            let product = await Producto.findOne({
                _id: id
            })
            if (product) {
                res.status(200).json({ product })
            } else {
                res.status(404).json({
                    message: "could't find product",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    update: async (req, res) => {
        const {
            id
        } = req.params
        if (req.user.role === 'admin') {
            try {
                let product = await Producto.findOne({
                    _id: id
                })
                if (product) {
                    await Producto.findOneAndUpdate({
                        _id: id
                    }, req.body, {
                        new: true
                    })
                    res.status(200).json({
                        message: "product updated",
                        success: true
                    })
                } else {
                    res.status(404).json({
                        message: "could't find product",
                        success: false
                    })
                }
            } catch (error) {
                console.log(error)
                res.status(400).json({
                    message: "error",
                    success: false
                })
            }        
        } else {
            res.status(400).json({
                message: "unathorized",
                success: false
            })
        }
    },
    
    destroy: async (req, res) => {
        const {
            id
        } = req.params
        if (req.user.role === 'admin') {
            try {
                let product = await Producto.findOne({
                    _id: id
                })
                if (product) {
                    await Producto.findOneAndDelete({
                        _id: id
                    })
                    res.status(200).json({
                        message: "product deleted",
                        success: true
                    })
                } else {
                    res.status(404).json({
                        message: "could't find product",
                        success: false
                    })
                }
            } catch (error) {
                console.log(error)
                res.status(400).json({
                    message: "error",
                    success: false
                })
            }
        } else {
            res.status(400).json({
                message: "unathorized",
                success: false
            })
        }
    }

}

module.exports = controller