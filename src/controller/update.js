let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log("UPDATE OK"))
}