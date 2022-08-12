let sequelize = require('./../model/index')
let Client = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Client
        .findByPk(req.params.id)
        .then((client) => {
            return res.render('client_edit', {
                client: client
            })
        })
}