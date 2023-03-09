let express = require('express')
let router = express.Router()

const events = require('./events')
const eventsMH = require('./eventsMH')
const evento = require('./eventos')
const producto = require('./producto')

router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'MH API' })
});

router.use('/amazing', events)
router.use('/amazing-events', eventsMH)
router.use('/espectaculares', evento)
router.use('/mindy', producto)

module.exports = router