const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const home = require('./routes/home')
const client = require('./routes/client')
const methodOverride = require('method-override')
const app  = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use('/assets', express.static('./assets'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

require('./model/index')

app.use('/', home)
app.use('/client', client)

app.listen(port, () => console.log(`App listening http://localhost:${port}`))
