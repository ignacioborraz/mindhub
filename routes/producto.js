var express = require('express')
var router = express.Router()
const schema = require ('../schemas/producto')
let validator = require('../middlewares/validator')

const {
    all,
    one,
    create
} = require('../controllers/producto')

router.get('/', all)
router.get('/:id', one)
router.post('/', validator(schema), create)

module.exports = router