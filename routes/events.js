var express = require('express')
var router = express.Router()
let passport = require('../config/passport')

const {
    all,
    create,
    read,
    update,
    destroy,
    create2,
    update2,
    destroy2
} = require('../controllers/event')

router.get('/', all)
router.get('/:id', read)
router.post('/', create2)
router.patch('/:id', update2)
router.delete('/:id', destroy2)
router.post('/auth', passport.authenticate('jwt', {session:false}), create)
router.patch('/auth/:id', passport.authenticate('jwt', {session:false}), update)
router.delete('/auth/:id', passport.authenticate('jwt', {session:false}), destroy)

module.exports = router