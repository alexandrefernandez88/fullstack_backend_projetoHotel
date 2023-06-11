import { Router } from "express";
import ClienteCtrl from "../Controle/ClienteCTRL.js";


const rotaCliente = new Router();
const clienteCtrl = new ClienteCtrl();

rotaCliente.post("/", clienteCtrl.salvar)
.put("/", clienteCtrl.editar)
.delete("/", clienteCtrl.excluir)
.get("/", clienteCtrl.consultar)
.get("/:cpf", clienteCtrl.consultarCPF)

export default rotaCliente;