let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/client?msg=5'))
        .catch((err) => res.redirect('/client?msg=6'))
}