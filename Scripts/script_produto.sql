CREATE TABLE produto (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  descricao TEXT NOT NULL,
  categoria VARCHAR(100) NOT NULL
);

CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `descricao` varchar(45) DEFAULT NULL,
  `categoria` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

INSERT INTO produto (titulo, preco, descricao, categoria)
VALUES ('Camiseta Branca', 29.99, 'Camiseta branca de algodão', 'Vestuário');

INSERT INTO produto (titulo, preco, descricao, categoria)
VALUES ('Mouse Sem Fio', 49.99, 'Mouse óptico sem fio para computador', 'Eletrônicos');

INSERT INTO produto (titulo, preco, descricao, categoria)
VALUES ('Livro de Romance', 39.99, 'Romance clássico de amor e aventura', 'Livros');

INSERT INTO produto (titulo, preco, descricao, categoria)
VALUES ('Headphone Bluetooth', 89.99, 'Fones de ouvido sem fio com cancelamento de ruído', 'Eletrônicos');

INSERT INTO produto (titulo, preco, descricao, categoria)
VALUES ('Tênis Esportivo', 79.99, 'Tênis para corrida com amortecimento de impacto', 'Calçados');
