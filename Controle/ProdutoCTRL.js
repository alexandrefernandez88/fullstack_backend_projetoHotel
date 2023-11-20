import Produto from "../Modelos/Produto.js";

export default class ProdutoCTRL {
    salvar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const idp = dados.idp;
            const titulo = dados.titulo;
            const preco = dados.preco;
            const descricao = dados.descricao;
            const categoria = dados.categoria;

            if (idp && titulo && preco && descricao && categoria) {
                const produto = new Produto(titulo, preco, descricao, categoria);

                produto.salvar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Produto gravado com sucesso!"
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
                    mensagem: "Informe corretamente todos os dados do produto conforme documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou produto no formato JSON não fornecido! Consulta a documentação da API."
            });
        }
    }

    editar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "PUT" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const idp = dados.idp;
            const titulo = dados.titulo;
            const preco = dados.preco;
            const descricao = dados.descricao;
            const categoria = dados.categoria;

            if (idp && titulo && preco && descricao && categoria) {
                const produto = new Produto(idp, titulo, preco, descricao, categoria);

                produto.editar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Produto atualizado com sucesso!"
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
                    mensagem: "Informe corretamente todos os dados do produto conforme documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou produto no formato JSON não fornecida! Consulta a documentação da API."
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "DELETE" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const idp = dados.idp;

            if (idp) {
                const produto = new Produto(idp);

                produto.excluir().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Produto excluído com sucesso!"
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
                    mensagem: "Informe o produto corretamente conforme a documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou produto no formato JSON não fornecida! Consulta a documentação da API."
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            const produto = new Produto();
            produto.consultar("").then((produtos) => {
                resposta.status(200).json(produtos);
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
                mensagem: "Método não permitido ou produto no formato JSON não fornecida! Consulte a documentação da API."
            });
        }
    }

    consultarID(requisicao, resposta) {
        resposta.type("application/json");
        const idp = (requisicao.params["idp"]);

        if (requisicao.method === "GET") {
            const produto = new Produto();

            produto.consultarID(idp).then((produto) => {
                resposta.status(200).json(produto);
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
                mensagem: "Método não permitido ou produto no formato JSON não fornecida! Consulta a documentação da API."
            });
        }
    }
}