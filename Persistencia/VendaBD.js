import Venda from "../Modelos/Venda.js";
import conectar from "./Conexao.js";
import Cliente from "../Modelos/Cliente.js";
import ItemVenda from "../Modelos/ItemVenda.js";

export default class VendaDB {
//novo
    async salvar(venda) {
        if (venda instanceof Venda) {
            const conexao = await conectar();
            conexao.beginTransaction();//transação atômica
            // const sql = "INSERT INTO venda (dataVenda, desconto, valorTotalTributos, cpfCliente) VALUES (?,?,?,?)";
            const sql = "INSERT INTO venda (dataVenda, cpfCliente) VALUES (?,?)";
            // const sql = "begin transaction; INSERT INTO venda (dataVenda, desconto, valorTotalTributos, cpfCliente) VALUES (?,?,?,?) insert into vendaproduto(codigo) commit";
            const valores = [
                venda.dataVenda,
                // venda.desconto,
                // venda.valorTotalTributos,
                venda.cliente.cpf];//nesse caso colocar que o cpf vai ser o direcionar a qual ciente é a venda, pois já temos cadastrados na tabela cliente o cpf do cliente
            const [result] = await conexao.query(sql, valores); //o "[result]" desestrutura a lista
            venda.id = result.insertId; //persiste com o id gerado no banco de dados
            //estrutura de repetição
            for (const item of venda.listaProdutos) {
                const sqlItensVenda = "INSERT INTO vendaproduto(codVenda, codProduto, qtd, preco) VALUES (?,?,?,?)";
                const parametrosItensVendas = [
                    venda.id, 
                    item.codigo, 
                    item.qtd, 
                    item.preco];    
                await conexao.execute(sqlItensVenda, parametrosItensVendas);
            }
            conexao.commit();//feito para comitar direto da aplicação
        }
    }

    async consultar() {
        const conexao = await conectar();
        const sql = "SELECT * FROM venda INNER JOIN cliente ON venda.cpfCliente = cliente.cpf INNER JOIN vendaproduto ON venda.id = vendaproduto.codVenda INNER JOIN produto ON vendaproduto.codProduto = produto.idp";
        const valores = [];
        const [rows] = await conexao.query(sql, valores);
        const listaVendas = [];
        const listaProdutos = [];
        // let cliente = {}
        // let venda = {}
        for (const registro of rows) {
            const cliente = new Cliente(
                registro['cpf'],
                registro['nome'],
                registro['sobrenome'],
                registro['usuario'],
                registro['cidade'],
                registro['uf'],
                registro['cep'],
                registro['endereco'],
                registro['bairro'],
                registro['telefone'],
                registro['email']);

            const venda = new Venda(
                registro["id"],
                registro["dataVenda"],
                // registro["desconto"],
                // registro["valorTotalTributos"],
                cliente,);
//novo
            const itemVenda = new ItemVenda(
                registro["codVenda"],
                registro["codProduto"],
                registro["qtd"],
                registro["preco"]);
//fim
            listaVendas.push(venda);
        }
        return listaVendas;
    }

    async excluir(venda) {
        if (venda instanceof Venda) {
            const conexao = await conectar();
            let sql = "DELETE FROM vendaproduto WHERE codVenda=?";
            const valores = [venda.id];
            await conexao.query(sql, valores);
            sql = "DELETE FROM venda WHERE id=?";
            await conexao.query(sql, valores);
        }
    }
}