CREATE TABLE venda (
  id INT PRIMARY KEY,
  dataVenda DATE,
  desconto DECIMAL(10, 2),
  valorTotalTributos DECIMAL(10, 2),
  cpfCliente VARCHAR(11),
  FOREIGN KEY (cpfCliente) REFERENCES cliente(cpf)
);


CREATE TABLE `venda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dataVenda` varchar(10) NOT NULL,
  `desconto` decimal(10,2) NOT NULL,
  `valorTotalTributos` decimal(10,2) NOT NULL,
  `cpfCliente` varchar(14) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cpfCliente` (`cpfCliente`),
  CONSTRAINT `venda_ibfk_1` FOREIGN KEY (`cpfCliente`) REFERENCES `cliente` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci


-- Script para inserção inicial de venda
INSERT INTO venda (dataVenda, desconto, valorTotalTributos, cpfCliente)
VALUES ('23/05/2023', 10.5, 50.25, '98765432101'), ('20/05/2023', 5.0, 30.0, '54321678901'), ('24/05/2023', 5.0, 30.0, '54321678901');
