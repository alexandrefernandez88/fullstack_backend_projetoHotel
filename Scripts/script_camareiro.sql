CREATE TABLE camareiro (
	cpf varchar(11) primary key not null,
    nome varchar(50) not null,
    dataNasc varchar(10) not null,
    endereco varchar(100) not null,
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    uf char(2) not null,
    nis varchar(11) not null,
    genero varchar(9) not null
);


INSERT INTO camareiro (cpf, nome, dataNasc, endereco, bairro, cidade, uf, nis, genero)
VALUES ('12345678901', 'João', '1990-01-01', 'Rua das Flores, 123', 'Centro', 'São Paulo', 'SP', '123456789', 'M');

INSERT INTO camareiro (cpf, nome, dataNasc, endereco, bairro, cidade, uf, nis, genero)
VALUES ('23456789012', 'Maria', '1992-05-10', 'Avenida dos Sonhos, 456', 'Bairro Novo', 'Rio de Janeiro', 'RJ', '987654321', 'F');

INSERT INTO camareiro (cpf, nome, dataNasc, endereco, bairro, cidade, uf, nis, genero)
VALUES ('34567890123', 'Pedro', '1988-09-15', 'Rua das Palmeiras, 789', 'Jardim das Flores', 'Belo Horizonte', 'MG', '987654321', 'M');

INSERT INTO camareiro (cpf, nome, dataNasc, endereco, bairro, cidade, uf, nis, genero)
VALUES ('45678901234', 'Ana', '1995-07-20', 'Praça Central, 567', 'Centro', 'Porto Alegre', 'RS', '123456789', 'F');

INSERT INTO camareiro (cpf, nome, dataNasc, endereco, bairro, cidade, uf, nis, genero)
VALUES ('56789012345', 'Lucas', '1993-03-25', 'Avenida Principal, 890', 'Centro', 'Curitiba', 'PR', '987654321', 'M');
