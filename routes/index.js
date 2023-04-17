let express = require('express')
let router = express.Router()

const events = require('./events')
const evento = require('./eventos')
const producto = require('./producto')
const animales = require('./animales')

router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'MH API' })
});

router.use('/amazing', events)
router.use('/animales', animales)
router.use('/espectaculares', evento)
router.use('/mindy', producto)

module.exports = router