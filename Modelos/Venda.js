import VendaDB from "../Persistencia/VendaBD.js";

export default class Venda {
    #id;
    #dataVenda;
    // #desconto;
    // #valorTotalTributos;
    #cliente
    #listaProdutos

    // constructor(id=0, dataVenda="", desconto=0.00, valorTotalTributos=0.00, cpfCliente="") {
    // constructor(id, dataVenda, desconto, valorTotalTributos, cliente, listaProdutos) {
    constructor(id, dataVenda, cliente, listaProdutos) {
        this.#id = id;
        this.#dataVenda = dataVenda;
        // this.#desconto = desconto;
        // this.#valorTotalTributos = valorTotalTributos;
        this.#cliente = cliente;
        this.#listaProdutos = listaProdutos;
    }


    get id() {
        return this.#id;
    }
    set id(novoID) {
        this.#id = novoID;
    }


    get dataVenda() {
        return this.#dataVenda;
    }
    set dataVenda(novaDataVenda) {
        this.#dataVenda = novaDataVenda;
    }


    // get desconto() {
    //     return this.#desconto;
    // }
    // set desconto(novoDesconto) {
    //     this.#desconto = novoDesconto;
    // }


    // get valorTotalTributos() {
    //     return this.#valorTotalTributos;
    // }
    // set valorTotalTributos(novoValorTotalTributos) {
    //     this.#valorTotalTributos = novoValorTotalTributos;
    // }

    
    get cliente() {
        return this.#cliente;
    }
    set cliente(novoCliente) {
        this.#cliente = novoCliente;
    }


    get listaProdutos() {
        return this.#listaProdutos;
    }
    set listaProdutos(novaListaProdutos) {
        this.#listaProdutos = novaListaProdutos;
    }


    toJSON() {
        return {
            "id": this.#id,
            "dataVenda": this.#dataVenda,
            // "desconto": this.#desconto,
            // "valorTotalTributos": this.#valorTotalTributos,
            "cliente": this.#cliente,
            "listaProdutos": this.#listaProdutos
        }
    }


    async salvar() {
        const vendaDB = new VendaDB();
        await vendaDB.salvar(this);
    }

    async editar() {
        const vendaDB = new VendaDB();
        await vendaDB.editar(this);
    }

    async excluir() {
        const vendaDB = new VendaDB();
        await vendaDB.excluir(this);
    }

    async consultar() {
        const vendaDB = new VendaDB();
        const vendas = await vendaDB.consultar();
        return vendas;
    }

    async consultarID(id) {
        const vendaDB = new VendaDB();
        const vendas = await vendaDB.consultarID(id);
        return vendas;
    }

}