const db = require('../db');

module.exports = {
    pesquisarFilmes: () =>{
        return new Promise((confirmado, cancelado) =>{
            db.query('SELECT * FROM movies', (error, results) =>{
                if(error) { cancelado(error); return;}
                aceito(results);
            })
        });
    },
    pesquisarUm: (codigo) => {
        return new Promise((confirmado, cancelado) => {
            db.query('SELECT * from movies WHERE codigo = ? ', [codigo], (error, results)=> {
                if(error) { cancelado(error); return;}
                if(results.length > 0){
                    confirmado(results[0]);
                }else{
                    confirmado(false);
                }
            });
        });
    },

    adicionar: (filmes, ano) => {
        return new Promise((confirmado, cancelado) => {
            db.query('INSERT INTO movies (filmes, ano) values (?, ?) ', [filmes, ano], (error, results)=> {
                if(error) { cancelado(error); return;}
                confirmado(results.adicionarCodigo)
            });
        });
    },

    alterar: (codigo, filmes, ano) => {
        return new Promise((confirmado, cancelado) => {
            db.query('UPDATE movies SET filmes = ?,  ano = ? WHERE codigo = ?', 
                [codigo, filmes, ano], 
                (error, results)=> {
                if(error) { cancelado(error); return;}
                confirmado(results)
            });
        });
    },
    
    excluirDados: (codigo) =>{
        return new Promise((confirmado, cancelado) =>{
            db.query('DELETE * from movies WHERE codigo = ?', (codigo), (error, results) =>{
                if(error) { cancelado(error); return;}
                aceito(results);
            })
        });
    },
}