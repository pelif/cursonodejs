let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .create(req.body)
        .then(() => res.redirect('/client?msg=1'))
        .catch((err) => res.redirect('/client?msg=2'))
}