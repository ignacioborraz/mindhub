const Evento = require('../models/Evento')
let actualDate = new Date("2022-10-15")

const eventController = {
    
    create: async (req, res) => {
        if (req.user.role === 'admin') {
            req.body.permition = false
            try {
                let event = await new Evento(req.body).save()
                res.status(201).json({
                    date: 'event created',
                    success: true,
                    id: event._id
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
        let events
        let order = 'asc'
        let query = {}
        if (req.query.category) {
            query.category = new RegExp(req.query.category, 'i')
        }
        if (req.query.name) {
            query.name = new RegExp(req.query.name, 'i')
        }
        if (req.query.order) {
            order = req.query.order
        }
        if (req.query.time==='past') {
            query.date = { $lt: actualDate }
        } else if (req.query.time==='upcoming') {
            query.date = { $gte: actualDate }
        }
        try {
            events = await Evento.find(query).sort({date: order})
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
            res.json({
                date: actualDate,
                events: events
            })
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
            let event = await Evento.findOne({
                _id: id
            })
            if (event) {
                res.status(200).json({ event })
            } else {
                res.status(404).json({
                    message: "could't find event",
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
                let event = await Evento.findOne({
                    _id: id
                })
                if (event) {
                    await Evento.findOneAndUpdate({
                        _id: id
                    }, req.body, {
                        new: true
                    })
                    res.status(200).json({
                        message: "event updated",
                        success: true
                    })
                } else {
                    res.status(404).json({
                        message: "could't find event",
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
                let event = await Evento.findOne({
                    _id: id
                })
                if (event) {
                    await Evento.findOneAndDelete({
                        _id: id
                    })
                    res.status(200).json({
                        message: "event deleted",
                        success: true
                    })
                } else {
                    res.status(404).json({
                        message: "could't find event",
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

module.exports = eventController