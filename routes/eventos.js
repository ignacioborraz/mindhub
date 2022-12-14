var express = require('express')
var router = express.Router()

const {
    all,
    one,
    create
} = require('../controllers/evento')

router.get('/', all)
router.get('/:id', one)
router.post('/',create)

module.exports = router