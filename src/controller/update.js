let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/client?msg=3'))
        .catch((err) => res.redirect('/client?msg=4'))
}