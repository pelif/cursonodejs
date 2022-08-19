let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')
const msg = require('./message')

module.exports = (req, res) => {    
    let result;     
    if(req.query.msg) {
        result = msg(req.query.msg); 
    }
    console.log(result)
    Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: 'Lista de Clientes', 
                clients: clients, 
                flash: result
            })
        })
        .catch((err) => {
            console.log(err)
        })
}