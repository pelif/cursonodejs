let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log("DELETE OK"))
        .catch((err) => {
            console.log(err)
        })
}