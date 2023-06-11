import Cliente from "../Modelos/Cliente.js";

export default class ClienteCtrl {
    salvar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const sobrenome = dados.sobrenome;
            const usuario = dados.usuario;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const cep = dados.cep;
            const endereco = dados.endereco;
            const numero = dados.numero;
            const bairro = dados.bairro;
            const telefone = dados.telefone;
            const email = dados.email;

            if (cpf && nome && sobrenome && usuario && cidade && uf && cep && endereco && numero && bairro && telefone && email) {
                const cliente = new Cliente(cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, numero, bairro, telefone, email);

                cliente.salvar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Cliente gravado com sucesso!"
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
                    mensagem: "Informe corretamente todos os dados do cliente conforme documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulta a documentação da API."
            });
        }
    }

    editar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "PUT" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const sobrenome = dados.sobrenome;
            const usuario = dados.usuario;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const cep = dados.cep;
            const endereco = dados.endereco;
            const numero = dados.numero;
            const bairro = dados.bairro;
            const telefone = dados.telefone;
            const email = dados.email;

            if (cpf && nome && sobrenome && usuario && cidade && uf && cep && endereco && numero && bairro && telefone && email) {
                const cliente = new Cliente(cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, numero, bairro, telefone, email);

                cliente.editar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Cliente atualizado com sucesso!"
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
                    mensagem: "Informe corretamente todos os dados do cliente conforme documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulta a documentação da API."
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "DELETE" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            const cpf = dados.cpf;

            if (cpf) {
                const cliente = new Cliente(cpf);

                cliente.excluir().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Cliente excluído com sucesso!"
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
                    mensagem: "Informe o CPF do cliente corretamente conforme a documentação da API."
                });
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulta a documentação da API."
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "GET") {
            const cliente = new Cliente();

            cliente.consultar("").then((clientes) => {
                resposta.status(200).json(clientes);
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
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulte a documentação da API."
            });
        }
    }

    consultarCPF(requisicao, resposta) {
        resposta.type("application/json");
        const cpf = (requisicao.params["cpf"]);

        if (requisicao.method === "GET") {
            const cliente = new Cliente();

            cliente.consultarCPF(cpf).then((cliente) => {
                resposta.status(200).json(cliente);
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
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulta a documentação da API."
            });
        }
    }
}