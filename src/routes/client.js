let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.render('client_list')
})

router.get('/new', (req, res) => {
    res.render('client_new')
})

module.exports = router;