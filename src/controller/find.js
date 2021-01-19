let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .findAll()
        .then((clients) => {
            console.log(clients)
        })
        .catch((err) => {
            console.log(err)
        })
}