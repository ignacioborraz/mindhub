import createHttpError from "http-errors";

const notFound = (req, res, next) => {
    next(createHttpError(404, 'La ruta no existe'))
}

module.exports = notFound