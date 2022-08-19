module.exports = function(value) {
    res = { type: 'success' };

    if(value == 1) {
         res.message = 'Cliente cadastrado com sucesso!'
    }

    if(value == 2) {
        res.type = 'danger';
        res.message = 'Não foi possível cadastrar o Cliente!';
    }

    if(value == 3) {
        res.message = 'Cliente Alterado com sucesso!'; 
    }

    if(value == 4) {
        res.type = 'danger'; 
        res.message = 'Não foi possível Alterar o cliente!'; 
    }

    if(value == 5) {
        res.message = 'Cliente removido com sucesso!';
    }

    if(value == 6) {
        res.type = 'danger';
        res.message = 'Não foi possível remover o cliente!'; 
    }
    
    return res;
}