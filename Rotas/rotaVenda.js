import { Router } from "express";
import VendaCtrl from "../Controle/vendaCTRL.js";


const rotaVenda = new Router();
const vendaCtrl = new VendaCtrl();

rotaVenda.post("/", vendaCtrl.salvar)
// .put("/", vendaCtrl.editar)
.delete("/", vendaCtrl.excluir)
.get("/", vendaCtrl.consultar)
.get("/:id", vendaCtrl.consultarID)

export default rotaVenda;