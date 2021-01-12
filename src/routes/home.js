let express = require('express')
let router = express.Router()

router.use((req, res, next) => {
    req.headers.token = 'atributo de request'
    console.log('Middleware executado com sucesso!')
    next();
})

router.get('/', (req, res) => { 
    res.render('home', {
        message: "Hello World"
    })
    // res.send('Hello World')
})
router.get('/welcome', (req, res) => res.send('Welcome to Express!' + req.attr))

router.get('/requests/:name', (req, res) => {
    res.send(req.params.name)
})

router.post('/body', (req, res) => {
    res.json(req.body.lastname)
})

router.get('/response', (req, res) => {
    // res.status(202).json({
    //     name: "felipe", 
    //     lastname: "oliveira"
    // })    
    res.render('index', {
        title: 'Page Title'
    })
})


module.exports = router;