import Venda from "../Modelos/Venda.js";

export default class VendaCtrl {
    salvar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const dataVenda = dados.dataVenda;
            // const desconto = dados.desconto;
            // const valorTotalTributos = dados.valorTotalTributos;
            const cliente = dados.cliente;//podendo enviar apenas o cpf do cliente, verificando se o cliente existe no banco e se precisa cadastrar
            //novo
            const listaProdutos = dados.produto; //produtos
            //fim
            if (
                dataVenda && 
                // desconto && 
                // valorTotalTributos && 
                cliente &&
                //novo
                listaProdutos) {
                //fim
                const venda = new Venda(
                    0,
                    dataVenda,
                    // desconto,
                    // valorTotalTributos,
                    cliente,
                    //novo
                    listaProdutos
                    //fim
                );
                venda.salvar().then(() => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Venda gravada com sucesso!",
                            id: venda.id
                        });
                    }).catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Não foi possível gravar a venda 1: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Faltam dados para concretizar esta venda, por favor, informe corretamente todos os dados de uma venda conforme documentação da API 1."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou venda no formato JSON não fornecida! Consulta a documentação da API 2." + erro.message
            });
        }
    }

    editar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "PUT" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const id = dados.id;
            const produto = dados.produto;
            const dataVenda = dados.dataVenda;
            const desconto = dados.desconto;
            const valorTotalTributos = dados.valorTotalTributos;
            const cpfCliente = dados.cpfCliente;
            if (
                id &&
                 produto && 
                 dataVenda && desconto && valorTotalTributos && cpfCliente) {
                const venda = new Venda(id, dataVenda, desconto, valorTotalTributos, cpfCliente);

                venda.editar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Venda atualizada com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe corretamente todos os dados de uma venda conforme documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou venda no formato JSON não fornecida! Consulta a documentação da API 2."
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "DELETE" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const id = dados.id;
            if (id) {
                const venda = new Venda(id);
                venda.excluir().then(() => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Venda excluída com sucesso!"
                        });
                    }).catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao excluir" + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe o Id da venda corretamente conforme a documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou venda no formato JSON não fornecida! Consulta a documentação da API 3."
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            const venda = new Venda();
            venda.consultar('').then((vendas) => {
                    resposta.status(200).json(vendas);
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Não foi possível consultar a venda: " + erro.message,
                    });
                });
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou venda no formato JSON não fornecida! Consulte a documentação da API 4."
            });
        }
    }


    consultarID(requisicao, resposta) {
        resposta.type("application/json");
        const id = (requisicao.params['id']);

        if (requisicao.method === "GET") {
            const venda = new Venda();

            venda.consultarID(id).then((venda) => {
                    resposta.status(200).json(venda);
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                });
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou venda no formato JSON não fornecida! Consulte a documentação da API 5."
            });
        }
    }


}