var express = require('express')
var router = express.Router()

const {
    all,
    one,
    create
} = require('../controllers/eventMH')

router.get('/', all)
router.get('/:id', one)
router.post('/',create)

module.exports = router