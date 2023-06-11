// import VendaDB from "../Persistencia/VendaBD.js";

export default class ItemVenda {
    #codVenda
    #codProduto
    #qtd
    #preco
    constructor(codVenda = 0, codProduto = "", qtd = "", preco = 0.00) {
        this.#codVenda = codVenda;
        this.#codProduto = codProduto;;
        this.#qtd = qtd;
        this.#preco = preco;
    }


    get codVenda() {
        return this.#codVenda;
    }

    set codVenda(novoCodVenda) {
        this.#codVenda = novoCodVenda;
    }

    get codProduto() {
        return this.#codProduto;
    }
    set codProduto(novoCodProduto) {
        this.#codProduto = novoCodProduto;
    }

    get qtd() {
        return this.#qtd;
    }
    set qtd(novoQtd) {
        this.#qtd = novoQtd;
    }


    get preco() {
        return this.#preco;
    }
    set preco(novoPreco) {
        this.#preco = novoPreco;
    }


        toJSON() {
            return {
                "codVenda": this.#codVenda,
                "codProduto": this.#codProduto,
                "qtd": this.#qtd,
                "preco": this.#preco
            }
        }


        async salvar() {
            const vendaDB = new VendaDB();
            await vendaDB.salvar(this);
        }

    //     async editar() {
    //         const vendaDB = new VendaDB();
    //         await vendaDB.editar(this);
    //     }

    //     async excluir() {
    //         const vendaDB = new VendaDB();
    //         await vendaDB.excluir(this);
    //     }

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