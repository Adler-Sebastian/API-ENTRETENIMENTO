const ApiServices = require('../services/ApiServices')

module.exports = {
    pesquisarFilmes: async (req, res)=> {
        let json = {error: '', result:[]}

        let movies = await ApiServices.pesquisarFilmes();

        for (let i in movies) {
            json.result.push({
                codigo: movies[i].codigo,
                descricao: movies[i].ano
            });
        }
        res.json(json);
    },
    pesquisarUm: async (req, res) => {
        let json = {error: '', result:{}}

        let codigo = req.params.codigo;
        let filme = await ApiServices.pesquisarUm(codigo)

        if(filme) {
            json.result = filme;
        }
        res.json(json);
    },

    adicionar: async (req, res) => {
        let json = {error: '', result:{}}

        let filmes = req.body.filmes;
        let ano = req.body.ano;

        if(filmes && ano) {
            let MoviesCodigo = await ApiServices.adicionar(filmes, ano)
            json.result = {
                codigo: MoviesCodigo,
                filmes,
                ano
            };
        }else{
            json.error = 'Não foram enviados';
        }
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error: '', result:{}}

        let codigo = req.params.codigo;
        let filmes = req.body.filmes;
        let ano = req.body.ano;

        if(codigo && filmes && ano) {
             await ApiServices.alterar(codigo, filmes, ano)
            json.result = {
                codigo,
                filmes,
                ano
            };
        }else{
            json.error = 'Não foram enviados';
        }
        res.json(json);
    },

    excluir: async (req, res) => {
        let json = {error: '', result:{}};
        await ApiServices.excluir(req.params.codigo);   

        res.json(json);
    }
}