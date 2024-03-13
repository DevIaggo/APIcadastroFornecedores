import val from '../../Modulos/controldores/controller.js';
import valid from '../../Modulos/controldores/controllerValProdcts.js'
import express from 'express';
import repo from '../../Modulos/repositorio/repo.js'

const app = express();

app.use(express.json());

app.post('/precadastro',val.ValidaPrecadastro,valid.ValidacaoProdFornecidos, (req, res) => {
   
    repo.Inserirdados(req.body)
    .then(result => {
        res.status(200).send({ message: "Dados recebidos com sucesso!" });
    })
    .catch(error => {
        console.error("Erro ao inserir os dados:", error);
        res.status(500).send({ message: "Erro ao processar a requisição." });
    });
      
    }
)
export default app