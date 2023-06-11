import Produto from "../Modelos/Produto.js";
import conectar from "./Conexao.js";

export default class ProdutoDB {
    async salvar(produto) {
        if (produto instanceof Produto) {
            const conexao = await conectar();
            const sql = "INSERT INTO produto (titulo, preco, descricao, categoria) VALUES (?,?,?,?)";
            const valores = [
                            produto.id,
                            produto.titulo,
                            produto.preco,
                            produto.descricao,
                            produto.categoria];
            const resultado = await conexao.query(sql,valores);
            return await resultado[0].insertId;
            // await conexao.query(sql, valores);
        }
    }



    // async editar(produto) {
    //     if (produto instanceof Produto) {
    //         const conexao = await conectar();
    //         const sql = "UPDATE produto SET titulo=?, preco=?, descricao=?, categoria=? WHERE id=?";
    //         const valores = [produto.titulo,
    //                         produto.preco,
    //                         produto.descricao,
    //                         produto.categoria,
    //                         produto.id];

    //         await conexao.query(sql, valores);
    //     }
    // }

    // async excluir(produto) {
    //     if (produto instanceof Produto) {
    //         const conexao = await conectar();
    //         const sql = "DELETE FROM produto WHERE id=?";
    //         const valores = [produto.id];

    //         await conexao.query(sql, valores);
    //     }
    // }

    async consultar(termo) {
        const conexao = await conectar();
        const sql = "SELECT * FROM produto WHERE descricao LIKE ?";
        const valores = ['%' + termo + '%'];
        const [rows] = await conexao.query(sql, valores);
        const listaProdutos = [];

        for (const row of rows) {
            const produto = new Produto(row["id"],
                                        row["titulo"],
                                        row["preco"],    
                                        row["descricao"],
                                        row["categoria"]);

            listaProdutos.push(produto);
        }

        return listaProdutos;
    }

    // async consultarID(id) {
    //     const conexao = await conectar();
    //     const sql = "SELECT * FROM produto WHERE id=?";
    //     const valores = [id];
    //     const [rows] = await conexao.query(sql, valores);
    //     const listaProdutos = [];

    //     for (const row of rows) {
    //         const produto = new Produto(row["id"],
    //                                     row["titulo"],
    //                                     row["preco"],    
    //                                     row["descricao"],
    //                                     row["categoria"]);

    //         listaProdutos.push(produto);
    //     }

    //     return listaProdutos;
    // }
}