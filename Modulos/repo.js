// Importação das dependências e módulos necessários
import GetConect from '../cnct/connection.js'
import mssql from 'mssql'

// Função assíncrona para inserir os dados no banco de dados
async function Inserirdados(body) {
    try {
        // Consulta SQL para inserir os dados na tabela 'cadastro'
        const consulta = `INSERT INTO cadastro ( 
            razSocial,
            nomeFantasia,
            anoFundacao,
            cnpjMatriz,
            Cpf,
            InscriEstadual,
            InscriMunicipal,
            RamoAtivdd,
            Endereco,
            numero,
            Estado,
            Cidade,
            bairro,
            Cep,
            contatotelefonico,
            telefone,
            Email,
            TipodeEmpresa,
            TipodeSociedade,
            tipoderamodeAtividade,
            qntdFiliais,
            regiaoqueAtua,
            quantcolaboradores,
            faturamentoAnual,
            tempdeMercado,
            clientessuaEmpresapossui,
            qntddeFornecedores,
            principaisClientes,
            pricipaisFornecedores,
            principaisconcorrentes,
            fornecimentoCebras,
            planoAPPCC,
            sistemqualiImplementado,
            sistgestaointegrado,
            nivelTecnologia,
            rastreabilidadeProduto,
            avaliacaoFornecedores,
            comprometimentoSocial, 
            Alimentos,
            Brindes,
            Combustiveis,
            EPIeEquipamentoSeguranca,
            estocagemAcondicionamento,
            ETEeETA,
            MRO,
            Lubrificante,
            materiaPrima,
            materialdeEmbalagens,
            materialdeExpediente,
            materialHigieneELimpeza,
            materialSecundario,
            Servicos,
            telasSerigraficas,
            Uniformes
            
            )
            VALUES (
                @razSocial,
                @nomeFantasia,
                @anoFundacao,
                @cnpjMatriz,
                @Cpf,
                @InscriEstadual,
                @InscriMunicipal,
                @RamoAtivdd,
                @Endereco,
                @numero,
                @Estado,
                @Cidade,
                @bairro,
                @Cep,
                @contatotelefonico,
                @telefone,
                @Email,
                @TipodeEmpresa,
                @TipodeSociedade,
                @tipoderamodeAtividade,
                @qntdFiliais,
                @regiaoqueAtua,
                @quantcolaboradores,
                @faturamentoAnual,
                @tempdeMercado,
                @clientessuaEmpresapossui,
                @qntddeFornecedores,
                @principaisClientes,
                @pricipaisFornecedores,
                @principaisconcorrentes,
                @fornecimentoCebras,
                @planoAPPCC,
                @sistemqualiImplementado,
                @sistgestaointegrado,
                @nivelTecnologia,
                @rastreabilidadeProduto,
                @avaliacaoFornecedores,
                @comprometimentoSocial,
                @Alimentos,
                @Brindes,
                @Combustiveis,
                @EPIeEquipamentoSeguranca,
                @estocagemAcondicionamento,
                @ETEeETA,
                @MRO,
                @Lubrificante,
                @materiaPrima,
                @materialdeEmbalagens,
                @materialdeExpediente,
                @materialHigieneELimpeza,
                @materialSecundario,
                @Servicos,
                @telasSerigraficas,
                @Uniformes
                )`
         // Obtém a string de conexão do módulo de conexão
        const stringCon = GetConect.GetConect()
         // Estabelece a conexão com o banco de dados e executa a inserção dos dados
        let result = await mssql.connect(stringCon).then(() => {
            // Define os parâmetros da consulta SQL com os valores do corpo da requisição
            let request = new mssql.Request()
                .input('razSocial', body.razSocial)
                .input('nomeFantasia', body.nomeFantasia)
                .input('anoFundacao', body.anoFundacao)
                .input('cnpjMatriz', body.cnpjMatriz)
                .input('Cpf', body.Cpf)
                .input('InscriEstadual', body.InscriEstadual)
                .input('InscriMunicipal', body.InscriMunicipal)
                .input('RamoAtivdd', body.RamoAtivdd)
                .input('Endereco', body.Endereco)
                .input('numero', body.numero)
                .input('Estado', body.Estado)
                .input('Cidade', body.Cidade)
                .input('bairro', body.bairro)
                .input('Cep', body.Cep)
                .input('contatotelefonico', body.contatotelefonico)
                .input('telefone', body.telefone)
                .input('Email', body.Email)
                .input('TipodeEmpresa', body.TipodeEmpresa)
                .input('TipodeSociedade', body.TipodeSociedade)
                .input('tipoderamodeAtividade', body.tipoderamodeAtividade)
                .input('qntdFiliais', body.qntdFiliais)
                .input('regiaoqueAtua', body.regiaoqueAtua)
                .input('quantcolaboradores', body.quantcolaboradores)
                .input('faturamentoAnual', body.faturamentoAnual)
                .input('tempdeMercado', body.tempdeMercado)
                .input('clientessuaEmpresapossui', body.clientessuaEmpresapossui)
                .input('qntddeFornecedores', body.qntddeFornecedores)
                .input('principaisClientes', body.principaisClientes.join(', '))
                .input('pricipaisFornecedores', body.pricipaisFornecedores.join(', '))
                .input('principaisconcorrentes', body.principaisconcorrentes.join(', '))
                .input('fornecimentoCebras', body.fornecimentoCebras)
                .input('planoAPPCC', body.planoAPPCC)
                .input('sistemqualiImplementado', body.sistemqualiImplementado)
                .input('sistgestaointegrado', body.sistgestaointegrado)
                .input('nivelTecnologia', body.nivelTecnologia)
                .input('rastreabilidadeProduto', body.rastreabilidadeProduto)
                .input('avaliacaoFornecedores', body.avaliacaoFornecedores)
                .input('comprometimentoSocial', body.comprometimentoSocial)
                
                //Input do tipo de produto fornecido
                
                .input('Alimentos', body.Alimentos ? body.Alimentos.join(', ') : null)
                .input('Brindes', body.Brindes ? body.Brindes.join(', ') : null)
                .input('Combustiveis', body.Combustiveis ? body.Combustiveis.join(', ') : null)
                .input('EPIeEquipamentoSeguranca', body.EPIeEquipamentoSeguranca ? body.EPIeEquipamentoSeguranca.join(', ') : null)
                .input('EstocagemAcondicionamento', body.estocagemAcondicionamento ? body.estocagemAcondicionamento.join(', ') : null)
                .input('ETEeETA', body.ETEeETA ? body.ETEeETA.join(', ') : null)
                .input('MRO', body.MRO ? body.MRO.join(', ') : null)
                .input('Lubrificante', body.Lubrificante ? body.Lubrificante.join(', ') : null)
                .input('MateriaPrima', body.materiaPrima ? body.materiaPrima.join(', ') : null)
                .input('MaterialdeEmbalagens', body.materialdeEmbalagens ? body.materialdeEmbalagens.join(', ') : null)
                .input('MaterialdeExpediente', body.materialdeExpediente ? body.materialdeExpediente.join(', ') : null)
                .input('MaterialHigieneELimpeza', body.materialHigieneELimpeza ? body.materialHigieneELimpeza.join(', ') : null)
                .input('MaterialSecundario', body.materialSecundario ? body.materialSecundario.join(', ') : null)
                .input('Servicos', body.Servicos ? body.Servicos.join(', ') : null)
                .input('TelasSerigraficas', body.telasSerigraficas ? body.telasSerigraficas.join(', ') : null)
                .input('Uniformes', body.Uniformes ? body.Uniformes.join(', ') : null)


             // Executa a consulta SQL e retorna o resultado
            return request.query(consulta).then((response) => {
                if (response.rowsAffected > 0) {
                    return true
                } else {
                    throw {
                        status: 500,
                        message: `Nenhum item foi inserido.`
                    }
                }
            })
        })
        return result
    }

    catch (err) {

        if (!err.status) {

            throw {
                status: 500,
                message: err.message
            }
        }
        throw err
    }
}
// Exporta a função Inserirdados para utilização em outros módulos
export default { Inserirdados }
