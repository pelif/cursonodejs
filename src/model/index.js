const Seq = require('sequelize')
const Sequelize = new Seq(
    'mysql://root:myrootsql@10.7.0.3/crud_node', {
        operatorAliases: Seq.Op
    })

Sequelize
    .authenticate()
    .then(() => console.log("Sequelize OK"))    
    .catch(() => console.log("Error Sequelize"))

Sequelize.sync()

module.exports = Sequelize