module.exports = function(value) {
    res = { type: 'success' }; 

    if(value == 1) {
        res.message = 'Cliente Cadastrado com sucesso';
    }    

    if(value == 2) {
        res.type = 'danger'; 
        res.message = 'Não foi possívle cadastrar o cliente!'; 
    }    

    if(value == 3) {   
        res.message = 'Cliente Alterado com sucesso!';
    }

    if(value == 4) {   
        res.type = 'danger';
        res.message = 'Não foi possível alterar o cliente!'; 
    }

    if(value == 5) {   
        res.message = 'Cliente Removido com sucesso!';
    }  

    if(value == 6) {   
        res.type = 'danger'; 
        res.message = 'Não foi possível remover o cliente! '; 
    }
    return res;    
}