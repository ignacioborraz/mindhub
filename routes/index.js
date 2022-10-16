let express = require('express');
let router = express.Router();

const auth = require('./auth')
const events = require('./events')
const evento = require('./evento')
const producto = require('./producto')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Amazing Events' });
});

router.use('/auth', auth)
router.use('/amazing', events)
router.use('/espectaculares', evento)
router.use('/mindy', producto)

module.exports = router;