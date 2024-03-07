//VALIDAÇÃO PARA OS TIPOS DE PRODUTOS FORNECIDO
//Codigo para validar o que é recebido do usuario antes de enviar para o bando de dados.


// Função middleware para validar os produtos fornecidos
function ValidacaoProdFornecidos(req, res, next) {

    let corpo_da_requisicao = {

      // Corpo da requisição com todos os dados dos produtos recebidos
        Alimentos: req.body["Alimentos"],
        Brindes: req.body["Brindes"],
        Combustiveis: req.body["Combustiveis"],
        EPIeEquipamentoSeguranca: req.body["EPIeEquipamentoSeguranca"],
        estocagemAcondicionamento: req.body["estocagemAcondicionamento"],
        ETEeETA: req.body["ETEeETA"],
        MRO: req.body["MRO"],
        Lubrificante: req.body["Lubrificante"],
        materiaPrima: req.body["materiaPrima"],
        materialdeEmbalagens: req.body["materialdeEmbalagens"],
        materialdeExpediente: req.body["materialdeExpediente"],
        materialHigieneELimpeza: req.body["materialHigieneELimpeza"],
        materialSecundario: req.body["materialSecundario"],
        Servicos: req.body["Servicos"],
        telasSerigraficas: req.body["telasSerigraficas"],
        Uniformes: req.body["Uniformes"]
    }


    //VALIDAÇÕES DOS PRODUTOS QUE SÃO FORNECIDOS
    //O USUARIO VAI ENVIAR O QUE FORNECE, SABENDO DISSO O CODIGO DEIXA QUE NÃO SEJA OBRIGATORIO
    //VERIFICANDO SE EXISTE ALGUM DADO SENDO ENVIADO, SE SIM, VERIFICA SE É UM "ARRAY" E LIMITA
    //A QUANTIDADE DE DADOS A SER ENVIADO

    // Validações tipo de alimentos   
    if (corpo_da_requisicao.Alimentos !== undefined) {

        if (!Array.isArray(corpo_da_requisicao.Alimentos)) {

            return res.status(400).send({ message: 'No campo Alimentos, é necessário o envio dos dados correto.' });

        }

        if (corpo_da_requisicao.Alimentos.length >= 7) {
            return res.status(400).send({ message: 'O campo Alimentos é limitado a 6 opções.' });
        }
    }


    //validação tipo de brindes
    if (corpo_da_requisicao.Brindes !== undefined) {

        if (!Array.isArray(corpo_da_requisicao.Brindes)) {

            return res.status(400).send({ message: 'No campo Brindes, é necessário o envio dos dados correto.' });

        }

        if (corpo_da_requisicao.Brindes.length >= 7) {
            return res.status(400).send({ message: 'O campo Alimentos é limitado a 6 opções.' });
        }
    }


    // Validação do campo Combustiveis
    if (corpo_da_requisicao.Combustiveis !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.Combustiveis)) {
            return res.status(400).send({ message: 'No campo Combustiveis, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.Combustiveis.length >= 7) {
            return res.status(400).send({ message: 'O campo Combustiveis é limitado a 6 opções.' });
        }
    }

    // Validação do campo EPIeEquipamentoSeguranca
    if (corpo_da_requisicao.EPIeEquipamentoSeguranca !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.EPIeEquipamentoSeguranca)) {
            return res.status(400).send({ message: 'No campo EPIeEquipamentoSeguranca, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.EPIeEquipamentoSeguranca.length >= 7) {
            return res.status(400).send({ message: 'O campo EPIeEquipamentoSeguranca é limitado a 6 opções.' });
        }
    }

    // Validação do campo estocagemAcondicionamento
    if (corpo_da_requisicao.estocagemAcondicionamento !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.estocagemAcondicionamento)) {
            return res.status(400).send({ message: 'No campo estocagemAcondicionamento, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.estocagemAcondicionamento.length >= 7) {
            return res.status(400).send({ message: 'O campo estocagemAcondicionamento é limitado a 6 opções.' });
        }
    }

    // Validação do campo ETEeETA
    if (corpo_da_requisicao.ETEeETA !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.ETEeETA)) {
            return res.status(400).send({ message: 'No campo ETEeETA, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.ETEeETA.length >= 7) {
            return res.status(400).send({ message: 'O campo ETEeETA é limitado a 6 opções.' });
        }
    }

    // Validação do campo MRO
    if (corpo_da_requisicao.MRO !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.MRO)) {
            return res.status(400).send({ message: 'No campo MRO, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.MRO.length >= 7) {
            return res.status(400).send({ message: 'O campo MRO é limitado a 6 opções.' });
        }
    }

    // Validação do campo Lubrificante
    if (corpo_da_requisicao.Lubrificante !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.Lubrificante)) {
            return res.status(400).send({ message: 'No campo Lubrificante, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.Lubrificante.length >= 7) {
            return res.status(400).send({ message: 'O campo Lubrificante é limitado a 6 opções.' });
        }
    }

    // Validação do campo materiaPrima
    if (corpo_da_requisicao.materiaPrima !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.materiaPrima)) {
            return res.status(400).send({ message: 'No campo materiaPrima, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.materiaPrima.length >= 7) {
            return res.status(400).send({ message: 'O campo materiaPrima é limitado a 6 opções.' });
        }
    }

    // Validação do campo materialdeEmbalagens
    if (corpo_da_requisicao.materialdeEmbalagens !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.materialdeEmbalagens)) {
            return res.status(400).send({ message: 'No campo materialdeEmbalagens, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.materialdeEmbalagens.length >= 7) {
            return res.status(400).send({ message: 'O campo materialdeEmbalagens é limitado a 6 opções.' });
        }
    }

    // Validação do campo materialdeExpediente
    if (corpo_da_requisicao.materialdeExpediente !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.materialdeExpediente)) {
            return res.status(400).send({ message: 'No campo materialdeExpediente, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.materialdeExpediente.length >= 7) {
            return res.status(400).send({ message: 'O campo materialdeExpediente é limitado a 6 opções.' });
        }
    }

    // Validação do campo materialHigieneELimpeza
    if (corpo_da_requisicao.materialHigieneELimpeza !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.materialHigieneELimpeza)) {
            return res.status(400).send({ message: 'No campo materialHigieneELimpeza, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.materialHigieneELimpeza.length >= 7) {
            return res.status(400).send({ message: 'O campo materialHigieneELimpeza é limitado a 6 opções.' });
        }
    }

    // Validação do campo materialSecundario
    if (corpo_da_requisicao.materialSecundario !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.materialSecundario)) {
            return res.status(400).send({ message: 'No campo materialSecundario, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.materialSecundario.length >= 7) {
            return res.status(400).send({ message: 'O campo materialSecundario é limitado a 6 opções.' });
        }
    }

    // Validação do campo Servicos
    if (corpo_da_requisicao.Servicos !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.Servicos)) {
            return res.status(400).send({ message: 'No campo Servicos, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.Servicos.length >= 7) {
            return res.status(400).send({ message: 'O campo Servicos é limitado a 6 opções.' });
        }
    }

    // Validação do campo telasSerigraficas
    if (corpo_da_requisicao.telasSerigraficas !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.telasSerigraficas)) {
            return res.status(400).send({ message: 'No campo telasSerigraficas, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.telasSerigraficas.length >= 7) {
            return res.status(400).send({ message: 'O campo telasSerigraficas é limitado a 6 opções.' });
        }
    }

    // Validação do campo Uniformes
    if (corpo_da_requisicao.Uniformes !== undefined) {
        if (!Array.isArray(corpo_da_requisicao.Uniformes)) {
            return res.status(400).send({ message: 'No campo Uniformes, é necessário o envio dos dados correto.' });
        }
        if (corpo_da_requisicao.Uniformes.length >= 7) {
            return res.status(400).send({ message: 'O campo Uniformes é limitado a 6 opções.' });
        }
    }
    next()
}
      
    
export default { ValidacaoProdFornecidos } // Chama a próxima função middleware na cadeia