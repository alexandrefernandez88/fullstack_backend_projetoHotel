import ProdutoDB from "../Persistencia/ProdutoBD.js";

export default class Produto {
    #idp;
    #titulo;
    #preco;
    #descricao;
    #categoria;
    
    constructor(idp=0, titulo="", preco=0.00, descricao="", categoria="") {
        this.#idp = idp;
        this.#titulo = titulo;
        this.#preco = preco;
        this.#descricao = descricao;
        this.#categoria = categoria;
    }

    get idp() {
        return this.#idp;
    }
    set idp(novoIDP) {
        this.#idp = novoIDP;
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
            "idp"                   : this.#idp,
            "titulo"               : this.#titulo,
            "preco"                : this.#preco,
            "descricao"            : this.#descricao,
            "categoria"            : this.#categoria,
        }
    }

    async salvar() {
        const produtoBD = new ProdutoDB();
        this.#idp = await produtoBD.salvar(this);
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