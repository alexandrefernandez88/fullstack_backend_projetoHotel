import ClienteDB from "../Persistencia/ClienteBD.js";

export default class Cliente {
    #cpf;
    #nome;
    #sobrenome;
    #usuario;
    #cidade;
    #uf;
    #cep;
    #endereco;
    #numero;
    #bairro;
    #telefone;
    #email;

    constructor(cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, numero, bairro, telefone, email) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#usuario = usuario;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#cep = cep;
        this.#endereco = endereco;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#telefone = telefone;
        this.#email = email;
    }

    get cpf() {
        return this.#cpf;
    }
    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    get nome() {
        return this.#nome;
    }
    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }
    set sobrenome(novoSobrenome) {
        this.#sobrenome = novoSobrenome;
    }

    get usuario() {
        return this.#usuario;
    }
    set usuario(novoUsuario) {
        this.#usuario = novoUsuario;
    }

    get cidade() {
        return this.#cidade;
    }
    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    get uf() {
        return this.#uf;
    }
    set uf(novaUf) {
        this.#uf = novaUf;
    }

    get cep() {
        return this.#cep;
    }
    set cep(novoCep) {
        this.#cep = novoCep;
    }

    get endereco() {
        return this.#endereco;
    }
    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    get numero() {
        return this.#numero;
    }
    set numero(novoNumero) {
        this.#numero = novoNumero;
    }

    get bairro() {
        return this.#bairro;
    }
    set bairro(novoBairro) {
        this.#bairro = novoBairro;
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }

    get email() {
        return this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    toJSON() {
        return {
            "cpf"         : this.#cpf,
            "nome"        : this.#nome,
            "sobrenome"   : this.#sobrenome,
            "usuario"     : this.usuario,
            "cidade"      : this.#cidade,
            "uf"          : this.#uf,
            "cep"         : this.cep,
            "endereco"    : this.#endereco,
            "numero"      : this.#numero,
            "bairro"      : this.#bairro,
            "telefone"    : this.#telefone,
            "email"       : this.#email
        }
    }

    async salvar() {
        const clienteDB = new ClienteDB();
        await clienteDB.salvar(this);
    }

    async editar() {
        const clienteDB = new ClienteDB();
        await clienteDB.editar(this);
    }

    async excluir() {
        const clienteDB = new ClienteDB();
        await clienteDB.excluir(this);
    }

    async consultar(termo) {
        const clienteDB = new ClienteDB();
        const clientes = await clienteDB.consultar(termo);
        return clientes;
    }

    async consultarCPF(cpf) {
        const clienteDB = new ClienteDB();
        const cliente = await clienteDB.consultarCPF(cpf);
        return cliente;
    }
}