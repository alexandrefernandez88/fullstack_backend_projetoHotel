itens vendidos
SELECT * FROM fullstack.itensvendidos;


minhas vendas
SELECT * FROM fullstack.minhasvendas;


vendas_clientes
SELECT * FROM fullstack.vendas_clientes;


view agrupamento pór venda
SELECT cliente.nome, SUM(vendaproduto.qtd * vendaproduto.preco) AS total_vendas
FROM venda
INNER JOIN cliente ON venda.cpfCliente = cliente.cpf
INNER JOIN vendaproduto ON venda.id = vendaproduto.codVenda
GROUP BY venda.id;




view agrupamento por nome
SELECT cliente.nome, SUM(produto.preco) AS total_vendas
FROM venda
INNER JOIN cliente ON venda.cpfCliente = cliente.cpf
INNER JOIN vendaproduto ON venda.id = vendaproduto.codVenda
INNER JOIN produto ON vendaproduto.codProduto = produto.idp
GROUP BY cliente.nome;


view agrupamento vendas
SELECT * FROM venda
INNER JOIN cliente ON venda.cpfCliente = cliente.cpf
INNER JOIN vendaproduto ON venda.id = vendaproduto.codVenda
INNER JOIN produto ON vendaproduto.codProduto = produto.idp;

