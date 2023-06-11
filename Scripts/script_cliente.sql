CREATE TABLE `cliente` (
  `cpf` varchar(14) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `cep` varchar(15) NOT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `bairro` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci



INSERT INTO cliente (cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, bairro, telefone, email)
VALUES ('78901234567', 'Gabriel', 'Fernandes', 'gabrielf', 'São Francisco', 'CA', '12345', 'Rua F', 'Centro', '+1 (123) 456-7890', 'gabriel@example.com');

INSERT INTO cliente (cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, bairro, telefone, email)
VALUES ('12345098765', 'Mariana', 'Rodrigues', 'marianar', 'Porto', 'PT', '1234-567', 'Avenida E', 'Centro', '+351 987654321', 'mariana@example.com');


INSERT INTO cliente (cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, bairro, telefone, email)
VALUES ('54321678901', 'Luisa', 'Santana', 'luisas', 'Madrid', 'ES', '54321', 'Calle G', 'Centro', '+34 123456789', 'luisa@example.com');

INSERT INTO cliente (cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, bairro, telefone, email)
VALUES ('12345678900', 'João', 'Silva', 'joaosilva', 'São Paulo', 'SP', '01234-567', 'Rua A', 'Centro', '(11) 98765-4321', 'joao@example.com');

INSERT INTO cliente (cpf, nome, sobrenome, usuario, cidade, uf, cep, endereco, bairro, telefone, email)
VALUES ('98765432101', 'Luiza', 'Pereira', 'luizap', 'Curitiba', 'PR', '12345-678', 'Rua D', 'Centro', '(41) 55555-5555', 'luiza@example.com');
