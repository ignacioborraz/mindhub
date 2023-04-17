var express = require('express')
var router = express.Router()

const {
    all,
    one
} = require('../controllers/animales')

router.get('/', all)
router.get('/:id', one)

module.exports = router