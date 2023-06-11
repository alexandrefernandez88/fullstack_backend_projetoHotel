CREATE TABLE `fullstack`.`vendaproduto` (
  `codVenda` INT NOT NULL,
  `codProduto` VARCHAR(45) NULL,
  `qtd` VARCHAR(45) NULL,
  `preco` VARCHAR(45) NULL,
  PRIMARY KEY (`codVenda`));

  CREATE TABLE `vendaproduto` (
  `codVenda` int(11) NOT NULL AUTO_INCREMENT,
  `codProduto` int(11) DEFAULT NULL,
  `qtd` varchar(60) DEFAULT NULL,
  `preco` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`codVenda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
