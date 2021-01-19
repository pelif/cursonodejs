let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .create(req.body)
        .then(() => console.log('INSERT OK'))
}