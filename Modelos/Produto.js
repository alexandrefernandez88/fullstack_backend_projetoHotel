import ProdutoDB from "../Persistencia/ProdutoBD.js";

export default class Produto {
    #id;
    #titulo;
    #preco;
    #descricao;
    #categoria;
    
    constructor(id=0, titulo="", preco=0.00, descricao="", categoria="") {
        this.#id = id;
        this.#titulo = titulo;
        this.#preco = preco;
        this.#descricao = descricao;
        this.#categoria = categoria;
    }

    get id() {
        return this.#id;
    }
    set id(novoID) {
        this.#id = novoID;
    }


    get titulo() {
        return this.#titulo;
    }
    set titulo(novoTitulo) {
        this.#titulo = novoTitulo;
    }


    get preco() {
        return this.#preco;
    }
    set preco(novoPreco) {
        this.#preco = novoPreco;
    }


    get descricao() {
        return this.#descricao;
    }
    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }


    get categoria() {
        return this.#categoria;
    }
    set categoria(novaCategoria) {
        this.#categoria = novaCategoria;
    }
    

    toJSON() {
        return {
            "id"                   : this.#id,
            "titulo"               : this.#titulo,
            "preco"                : this.#preco,
            "descricao"            : this.#descricao,
            "categoria"            : this.#categoria,
        }
    }

    async salvar() {
        const produtoBD = new ProdutoDB();
        this.#id = await produtoBD.salvar(this);
    }

    // async editar() {
    //     const produtoBD = new ProdutoDB();
    //     await produtoBD.editar(this);
    // }

    // async excluir() {
    //     const produtoBD = new ProdutoDB();
    //     await produtoBD.excluir(this);
    // }

    async consultar(termo) {
        const produtoBD = new ProdutoDB();
        const produtos = await produtoBD.consultar(termo);
        return produtos;
    }

    // async consultarID(id) {
    //     const produtoBD = new ProdutoDB();
    //     const produto = await produtoBD.consultarID(id);
    //     return produto;
    // }
}