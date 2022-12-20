const Evento = require('../models/Evento')
let actualDate = new Date(2022,9,15)

const controller = {

    all: async (req, res) => {
        let order = 'asc'
        let query = {}
        if (req.query.category) {
            let categories = req.query.category.split(',')
            query.category = categories.map(cat => new RegExp(cat, 'i'))
        }
        if (req.query.name) {
            query.name = new RegExp(req.query.name, 'i')
        }
        if (req.query.time==='past') {
            query.date = { $lt: actualDate }
        } else if (req.query.time==='upcoming') {
            query.date = { $gte: actualDate }
        }
        if (req.query.order) {
            order = req.query.order
        }
        try {
            let events = await Evento.find(query).sort({date: order})
            if (events) {
                events = events.map(e => {
                    if (e.assistance) {
                        return {
                            id: e._id,
                            name: e.name,
                            image: e.image,
                            date: e.date,
                            description: e.description,
                            category: e.category,
                            place: e.place,
                            capacity: e.capacity,
                            assistance: e.assistance,
                            price: e.price
                        }
                    } else {
                        return {
                            id: e._id,
                            name: e.name,
                            image: e.image,
                            date: e.date,
                            description: e.description,
                            category: e.category,
                            place: e.place,
                            capacity: e.capacity,
                            estimate: e.estimate,
                            price: e.price
                        }
                    }
                })
                res.status(200).json({
                    date: actualDate,
                    response: events,
                    success: true
                })
            } else {
                res.status(404).json({
                    response: "no encontrado",
                    success: false
                })
            }
        } catch (err) {
            console.log(err)
            res.status(400).json({
                response: "error",
                success: false
            })
        }
    },

    one: async (req, res) => {
        const {
            id
        } = req.params
        try {
            let event = await Evento.findOne({
                _id: id
            })
            if (event) {
                res.status(200).json({
                    response: event,
                    success: true
                })
            } else {
                res.status(404).json({
                    response: "no encontrado",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                response: "error",
                success: false
            })
        }
    }

}

module.exports = controller