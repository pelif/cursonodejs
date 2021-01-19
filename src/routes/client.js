let express = require('express')
let router = express.Router()
let find = require('./../controller/find')
let create = require('./../controller/create')
let update = require('./../controller/update')
let remove = require('./../controller/remove')

router.get('/', find)

router.get('/new', (req, res) => {
    res.render('client_new')
})

router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router;