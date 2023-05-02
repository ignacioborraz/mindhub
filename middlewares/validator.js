const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        console.log(validation.error.details)
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(err => err.message)
            })
        }

        return next()
    }

]

module.exports =  validator