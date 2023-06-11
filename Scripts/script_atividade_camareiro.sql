CREATE TABLE atividade_camareiro (
	id int primary key not null,
    descricao varchar(30) not null,
    prioridade int not null,
    tempoMedioDuracaoMin int not null
);

INSERT INTO atividade_camareiro (descricao, prioridade, tempoMedioDuracaoMin)
VALUES ('Limpeza do quarto', 'alta', 30);

INSERT INTO atividade_camareiro (descricao, prioridade, tempoMedioDuracaoMin)
VALUES ('Reposição de suprimentos', 'média', 15);

INSERT INTO atividade_camareiro (descricao, prioridade, tempoMedioDuracaoMin)
VALUES ('Arrumação do quarto', 'baixa', 20);

INSERT INTO atividade_camareiro (descricao, prioridade, tempoMedioDuracaoMin)
VALUES ('Limpeza profunda do quarto', 'alta', 45);

INSERT INTO atividade_camareiro (descricao, prioridade, tempoMedioDuracaoMin)
VALUES ('Troca de roupas de cama', 'média', 10);
