
function ValidaPrecadastro(req, res, next) {
    console.log(`POST - PRECADASTRO DE CLIENTE FORNECEDOR - Iniciando validações.`)

    let corpo_da_requisicao = {

        //BODY RECEBIDO COM DADOS DOS FORNECEDORES
        razSocial: req.body["razSocial"],
        nomeFantasia: req.body["nomeFantasia"],
        anoFundacao: req.body["anoFundacao"],
        cnpjMatriz: req.body["cnpjMatriz"],
        Cpf: req.body["Cpf"],
        InscriEstadual: req.body["InscriEstadual"],
        InscriMunicipal: req.body["InscriMunicipal"],
        RamoAtivdd: req.body["RamoAtivdd"],
        Endereco: req.body["Endereco"],
        numero: req.body["numero"],
        Estado: req.body["Estado"],
        Cidade: req.body["Cidade"],
        bairro: req.body["bairro"],
        Cep: req.body["Cep"],
        contatotelefonico: req.body["contatotelefonico"],
        telefone: req.body["telefone"],
        Email: req.body["Email"],
        TipodeEmpresa: req.body["TipodeEmpresa"],
        TipodeSociedade: req.body["TipodeSociedade"],
        tipoderamodeAtividade: req.body["tipoderamodeAtividade"],
        qntdFiliais: req.body["qntdFiliais"],
        regiaoqueAtua: req.body["regiaoqueAtua"],
        quantcolaboradores: req.body["quantcolaboradores"],
        faturamentoAnual: req.body["faturamentoAnual"],
        tempdeMercado: req.body["tempdeMercado"],
        clientessuaEmpresapossui: req.body["clientessuaEmpresapossui"],
        qntddeFornecedores: req.body["qntddeFornecedores"],
        principaisClientes: req.body["principaisClientes"],
        pricipaisFornecedores: req.body["pricipaisFornecedores"],
        principaisconcorrentes: req.body["principaisconcorrentes"],
        fornecimentoCebras: req.body["fornecimentoCebras"],
        planoAPPCC: req.body["planoAPPCC"],
        sistemqualiImplementado: req.body["sistemqualiImplementado"],
        sistgestaointegrado: req.body["sistgestaointegrado"],
        nivelTecnologia: req.body["nivelTecnologia"],
        rastreabilidadeProduto: req.body["rastreabilidadeProduto"],
        avaliacaoFornecedores: req.body["avaliacaoFornecedores"],
        comprometimentoSocial: req.body["comprometimentoSocial"],

        // BODY RECEBIDOS COM TODOS OS DADOS DOS PRODUTOS RECEBIDOS
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


    //VALIDAÇÃO COMPLETA DOS DADOS DOS FORNECEDORES
    //Aqui recebemos os dados e verificamos o que é enviado, limitamos a quantidade e incrementamos um valor para fazer
    //a relação no banco de dados

    //Validação razão social
    if (isNullOrWhiteSpace(corpo_da_requisicao.razSocial)) {

        return res.status(404).send({ message: 'É necessário preencher sua razão social.' })
    }
    //validação Nome fantasia

    if (isNullOrWhiteSpace(corpo_da_requisicao.nomeFantasia)) {
        return res.status(404).send({ message: 'É necessário preencher sua nome fantasia.' })
    }
    //validação Ano de fundação

    const anoAtual = new Date().getFullYear();
    const anoFundacao = parseInt(corpo_da_requisicao.anoFundacao, 10);

    if (isNaN(anoFundacao) || anoFundacao < 1000 || anoFundacao > 9999) {
        return res.status(400).send({ message: 'Ano de fundação inválido.' });
    } else if (anoFundacao > anoAtual) {
        return res.status(400).send({ message: 'A data de fundação não pode ser posterior ao ano atual.' });
    }

    //Validação CNPJ
    if (!isNullOrWhiteSpace(corpo_da_requisicao.cnpjMatriz) && !validaCNPJ(corpo_da_requisicao.cnpjMatriz)) {
        return res.status(400).send({ message: 'CNPJ Matriz inválido.' })
    }


    //Validação CPF
    if (!isNullOrWhiteSpace(corpo_da_requisicao.Cpf) && !verificaCPF(corpo_da_requisicao.Cpf)) {
        return res.status(400).send({ message: 'CPF inválido.' });
    }

    //Validação de Inscrição estadual
    if (isNullOrWhiteSpace(corpo_da_requisicao.InscriEstadual)) {
        return res.status(404).send({ message: 'É necessário preencher sua inscrição estadual.' })
    }
    else if (corpo_da_requisicao.InscriEstadual.length <= 10) {
        return res.status(400).send({ message: 'Inscrição Estadual inválida. Deve conter exatamente 9 caracteres.' });
    }

    //Validação inscrição municipal
    if (isNullOrWhiteSpace(corpo_da_requisicao.InscriMunicipal)) {
        return res.status(404).send({ message: 'É necessário preencher sua inscrição municipal .' })
    }
    else if (corpo_da_requisicao.InscriMunicipal.length <= 12) {
        return res.status(400).send({ message: 'Inscrição municipal inválida. Deve conter exatamente 11 caracteres.' });
    }

    //validação Ramo de atividade
    if (isNullOrWhiteSpace(corpo_da_requisicao.RamoAtivdd)) {
        return res.status(404).send({ message: 'É necessário preencher seu ramo de atividade conforme o CNPJ.' })
    }

    //validação endereço
    if (isNullOrWhiteSpace(corpo_da_requisicao.Endereco)) {
        return res.status(404).send({ message: 'É necessário preencher seu endereço.' })
    }

    //validação  numero
    if (isNullOrWhiteSpace(corpo_da_requisicao.numero)) {
        return res.status(404).send({ message: 'É necessário preencher o numero.' })
    }

    //validação estado
    if (isNullOrWhiteSpace(corpo_da_requisicao.Estado)) {
        return res.status(404).send({ message: 'É necessário preencher seu estado.' })
    }

    //validação cidade
    if (isNullOrWhiteSpace(corpo_da_requisicao.Cidade)) {
        return res.status(404).send({ message: 'É necessário preencher qual a sua Cidade.' })
    }

    //validação bairro
    if (isNullOrWhiteSpace(corpo_da_requisicao.bairro)) {
        return res.status(404).send({ message: 'É necessário preencher qual o seu bairro.' })
    }

    //validação de cep
    if (isNullOrWhiteSpace(corpo_da_requisicao.Cep)) {
        return res.status(404).send({ message: 'É necessário preencher o seu CEP.' })
    }
    else if (corpo_da_requisicao.Cep.length !== 9) {
        return res.status(400).send({ message: 'CEP invalido. permitido no macimo 9 caracteres.' });
    }

    //Validação de contado
    if (isNullOrWhiteSpace(corpo_da_requisicao.contatotelefonico)) {
        return res.status(404).send({ message: 'É necessário preencher o seu contato telefônico.' })
    }
    else if (corpo_da_requisicao.contatotelefonico.length >= 16) {
        return res.status(400).send({ message: 'Só permitido até 15 digitos.' });
    }
    // validação de telefone
    if (isNullOrWhiteSpace(corpo_da_requisicao.telefone)) {
        return res.status(404).send({ message: 'É necessário preencher o seu telefone.' })
    }
    else if (corpo_da_requisicao.telefone.length >= 14) {
        return res.status(400).send({ message: 'Só permitido até 13 digitos.' });
    }
    //validação email
    if (isNullOrWhiteSpace(corpo_da_requisicao.Email)) {
        return res.status(404).send({ message: 'É necessário preencher o seu E-mail.' })
    }
    //  validação tipo de empresa
    if (isNullOrWhiteSpace(corpo_da_requisicao.TipodeEmpresa)) {
        return res.status(404).send({ message: 'É necessário definir o seu tipo de empresa.' })
    }
    else if (corpo_da_requisicao.TipodeEmpresa >= 5) {
        return res.status(400).send({ message: 'Opção invalida.' });
    }
    // validação tipo de sociedade
    if (isNullOrWhiteSpace(corpo_da_requisicao.TipodeSociedade)) {
        return res.status(404).send({ message: 'É necessário preencher o seu tipo de sociedade.' })
    }
    else if (corpo_da_requisicao.TipodeSociedade <= 4 || corpo_da_requisicao.TipodeSociedade >= 8) {
        return res.status(400).send({ message: 'Tipo de sociedade invalida' });
    }
    //validação tipo de ramo de atividade
    if (isNullOrWhiteSpace(corpo_da_requisicao.tipoderamodeAtividade)) {
        return res.status(404).send({ message: 'É necessário preencher o seu tipo de ramo de atividade.' })
    }
    else if (corpo_da_requisicao.tipoderamodeAtividade <= 7 || corpo_da_requisicao.tipoderamodeAtividade >= 11) {
        return res.status(400).send({ message: 'Ramo de atividade invalido' });
    }
    //validação quantidade de filiais
    if (isNullOrWhiteSpace(corpo_da_requisicao.qntdFiliais)) {
        return res.status(404).send({ message: 'É necessário preencher a quantidade de filiais.' })
    }
    else if (corpo_da_requisicao.qntdFiliais <= 10 || corpo_da_requisicao.qntdFiliais >= 16) {
        return res.status(400).send({ message: 'Quantidade de filiais invalida' });
    }
    // validação região que atua
    if (isNullOrWhiteSpace(corpo_da_requisicao.regiaoqueAtua)) {
        return res.status(404).send({ message: 'É necessário preencher a região que sua empresa atua.' })
    }
    else if (corpo_da_requisicao.regiaoqueAtua <= 15 || corpo_da_requisicao.regiaoqueAtua >= 19) {
        return res.status(400).send({ message: 'Região que a sua empresa atua invalida' });
    }
    //  validação qntd de colaboradores
    if (isNullOrWhiteSpace(corpo_da_requisicao.quantcolaboradores)) {
        return res.status(404).send({ message: 'É necessário preencher a quantidade de colaboradores.' })
    }
    else if (corpo_da_requisicao.quantcolaboradores <= 18 || corpo_da_requisicao.quantcolaboradores >= 24) {
        return res.status(400).send({ message: 'Qualtidade de colaboradores invalida' });
    }
    // validação quantidade faturamento anual
    if (isNullOrWhiteSpace(corpo_da_requisicao.faturamentoAnual)) {
        return res.status(404).send({ message: 'É necessário preencher faturamento anual da sua empresa.' })
    }
    else if (corpo_da_requisicao.faturamentoAnual <= 23 || corpo_da_requisicao.faturamentoAnual >= 28) {
        return res.status(400).send({ message: 'Faturamento anual da sua empresa invalido' });
    }
    //validação tempo de mercado  
    if (isNullOrWhiteSpace(corpo_da_requisicao.tempdeMercado)) {
        return res.status(404).send({ message: 'É necessário preencher seu tempo de mercado.' })
    }
    else if (corpo_da_requisicao.tempdeMercado <= 27 || corpo_da_requisicao.tempdeMercado >= 32) {
        return res.status(400).send({ message: 'Tempo de mercado invalido' });
    }
    // validação quantos cliente possui
    if (isNullOrWhiteSpace(corpo_da_requisicao.clientessuaEmpresapossui)) {
        return res.status(404).send({ message: 'É necessário preencher quantos clientes sua empresa possui.' })
    }
    else if (corpo_da_requisicao.clientessuaEmpresapossui <= 31 || corpo_da_requisicao.clientessuaEmpresapossui >= 37) {
        return res.status(400).send({ message: 'Quantidade de cliente invalidas' });
    }

    //validação quantos fornecedores possui
    if (isNullOrWhiteSpace(corpo_da_requisicao.qntddeFornecedores)) {
        return res.status(404).send({ message: 'É necessário preencher quantos fornecedores sua empresa possui.' })
    }
    else if (corpo_da_requisicao.qntddeFornecedores <= 36 || corpo_da_requisicao.qntddeFornecedores >= 42) {
        return res.status(400).send({ message: 'Quantidade de fornecedores invalida' });
    }

    // pricipais clientes
    if (isNullOrWhiteSpace(corpo_da_requisicao.principaisClientes)) {
        return res.status(404).send({ message: 'É necessário preencher seus pricipais clientes.' })
    }
    //Pricipais fornecedores
    if (isNullOrWhiteSpace(corpo_da_requisicao.pricipaisFornecedores)) {
        return res.status(404).send({ message: 'É necessário preencher seus pricipais fornecedores.' })
    }

    // validação principais concorrentes
    if (isNullOrWhiteSpace(corpo_da_requisicao.principaisconcorrentes)) {
        return res.status(404).send({ message: 'É necessário preencher seus pricipais concorrentes.' })
    }

    // validação ja forneceu para cerbras
    if (isNullOrWhiteSpace(corpo_da_requisicao.fornecimentoCebras)) {
        return res.status(404).send({ message: 'É necessário preencher se sua empresa já forneceu para Cerbrás .' })
    }
    else if (corpo_da_requisicao.fornecimentoCebras <= 41 || corpo_da_requisicao.fornecimentoCebras >= 44) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para validar se sua empresa já forneceu para Cerbrás' });
    }
    //validação se possui plano APPCC 
    if (isNullOrWhiteSpace(corpo_da_requisicao.planoAPPCC)) {
        return res.status(404).send({ message: 'É necessário preencher se sua empresa possui plano APPCC (Analise dos perigos e pontos criticos de controle).' })
    }
    else if (corpo_da_requisicao.planoAPPCC <= 43 || corpo_da_requisicao.planoAPPCC >= 46) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para informar se sua empresa possui plano APPCC ' });
    }
    //validação se sua empresa possui Sistema Qualidade Implementado
    if (isNullOrWhiteSpace(corpo_da_requisicao.sistemqualiImplementado)) {
        return res.status(404).send({ message: 'É necessário preencher se sua empresa possui sistema de qualidade implementado.' })
    }
    else if (corpo_da_requisicao.sistemqualiImplementado <= 45 || corpo_da_requisicao.sistemqualiImplementado >= 48) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para informar se sua empresa possui sistema de qualidade implementado.' });
    }
    //validação sistema de gestão integrado (ERP)
    if (isNullOrWhiteSpace(corpo_da_requisicao.sistgestaointegrado)) {
        return res.status(404).send({ message: 'É necessário preencher se sua empresa possui sistema de gestão Integrado.' })
    }
    else if (corpo_da_requisicao.sistgestaointegrado <= 47 || corpo_da_requisicao.sistgestaointegrado >= 50) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para informar se sua empresa possui sistema de gestão Integrado. ' });
    }
    //validação de nível tecnológico de sua empresa (ERP)
    if (isNullOrWhiteSpace(corpo_da_requisicao.nivelTecnologia)) {
        return res.status(404).send({ message: 'É necessário preencher o nivél de tecnológico da empresa.' })
    }
    else if (corpo_da_requisicao.nivelTecnologia <= 49 || corpo_da_requisicao.nivelTecnologia >= 53) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para informar o nivél de tecnológico da empresa.' });
    }
    //validação se sua empresa pode garantir a rastreabilidade de todos os produtos que sua empresa comercializa e/ou produz
    if (isNullOrWhiteSpace(corpo_da_requisicao.rastreabilidadeProduto)) {
        return res.status(404).send({ message: 'É necessário preencher se sua empresa pode garantir a rastreabilidade de todos os produtos que sua empresa comercializa e/ou produz.' })
    }
    else if (corpo_da_requisicao.rastreabilidadeProduto <= 52 || corpo_da_requisicao.rastreabilidadeProduto >= 55) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para informar se sua empresa pode garantir a rastreabilidade de todos os produtos que sua empresa comercializa e/ou produz.' });
    }
    //validação se você avalia o nivel de serviço de seus fornecedores
    if (isNullOrWhiteSpace(corpo_da_requisicao.avaliacaoFornecedores)) {
        return res.status(404).send({ message: 'É necessário preencher se você avalia o nivel de serviço de seus fornecedores.' })
    }
    else if (corpo_da_requisicao.avaliacaoFornecedores <= 54 || corpo_da_requisicao.avaliacaoFornecedores >= 57) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para informar  se você avalia o nivel de serviço de seus fornecedores.' });
    }
    //validação qual o comprometimento de sua empresa com a responsabilidade social
    if (isNullOrWhiteSpace(corpo_da_requisicao.comprometimentoSocial)) {
        return res.status(404).send({ message: 'É necessário preencher qual o comprometimento de sua empresa com a responsabilidade social.' })
    }
    else if (corpo_da_requisicao.comprometimentoSocial <= 56 || corpo_da_requisicao.comprometimentoSocial >= 61) {
        return res.status(400).send({ message: 'quantidade de de opções invalida para informar qual o comprometimento de sua empresa com a responsabilidade social.' });
    }
    next()
}

//function para validação do CNPJ
function validaCNPJ(cnpj) {
    var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    var c = String(cnpj).replace(/[^\d]/g, '')

    if (c.length !== 14)
        return false

    if (/0{14}/.test(c))
        return false

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if (c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if (c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    return true
}
// Validação de CPF
function verificaCPF(strCpf) {
    strCpf = strCpf.replace(/[^\d]/g, '');

    if (strCpf.length !== 11 || /^(\d)\1{10}$/.test(strCpf)) return false;

    var soma = 0;
    var resto;


    for (var i = 1; i <= 9; i++) {
        soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(strCpf.substring(9, 10))) return false;


    soma = 0;

    for (var i = 1; i <= 10; i++) {
        soma += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(strCpf.substring(10, 11))) return false;

    return true;
}

function isNullOrWhiteSpace(input) {
    if (input == null || input == undefined) {
        return true;
    }
    let str = String(input);
    if (str.match(/^ *$/) !== null) {
        return true;
    }
}



export default { ValidaPrecadastro } 