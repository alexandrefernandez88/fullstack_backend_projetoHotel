import express from 'express';
import cors from 'cors';
// import rotaCamareiro from './Rotas/rotaCamareiro.js';
// import rotaTipoQuarto from './Rotas/rotaTipoQuarto.js';
// import rotaAtividadeCamareiro from './Rotas/rotaAtividadeCamareiro.js';
// import rotaFuncionario from './Rotas/rotaFuncionario.js';
import rotaCliente from './Rotas/rotaCliente.js';
import rotaProduto from './Rotas/rotaProduto.js';
import rotaVenda from './Rotas/rotaVenda.js';

const app = express();
const porta = 4000;

app.use(cors({origin:"*"}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use("/cliente", rotaCliente);
app.use("/produto", rotaProduto);
app.use("/venda", rotaVenda);
// app.use("/camareiro", rotaCamareiro);
// app.use("/atividadecamareiro", rotaAtividadeCamareiro);
// app.use("/tipodequarto", rotaTipoQuarto);
// app.use("/funcionario", rotaFuncionario);

app.listen(porta, () => {
    console.log('Backend respondendo em http://localhost:' + porta);
});