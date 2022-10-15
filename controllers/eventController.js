const Event = require('../models/Event')

const eventController = {
    
    create: async (req, res) => {
        if (req.user.role === 'admin') {
            req.body.permition = false
            try {
                let event = await new Event(req.body).save()
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
        let order = 'desc'
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
        try {
            events = await Event.find(query)
                .sort({date: req.query.order})
            res.json({
                date: "2022-10-15",
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
            let event = await Event.findOne({
                _id: id
            })
            if (event) {
                res.status(200).json({
                    message: "you get one event",
                    response: event,
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
    },

    update: async (req, res) => {
        const {
            id
        } = req.params
        if (req.user.role === 'admin') {
            try {
                let event = await Event.findOne({
                    _id: id
                })
                if (event) {
                    await Event.findOneAndUpdate({
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
                let event = await Event.findOne({
                    _id: id
                })
                if (event) {
                    await Event.findOneAndDelete({
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