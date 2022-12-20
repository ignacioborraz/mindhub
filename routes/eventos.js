var express = require('express')
var router = express.Router()

const {
    all,
    one
} = require('../controllers/evento')

router.get('/', all)
router.get('/:id', one)

module.exports = router