let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: 'Lista de Clientes', 
                clients: clients
            })
        })
        .catch((err) => {
            console.log(err)
        })
}