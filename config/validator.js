module.exports = (schema) => [
    (req, res, next)=>{
        const data = schema.validate(req.body, {abortEarly:false})
        if(data.error){
            return res.status(400).json({
                success: false,
                method: req.method,
                path: req.url,
                response: data.error.details.map(err=>err.message)
            })
        }
        next()
    }
]