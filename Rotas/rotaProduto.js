import { Router } from "express";
import ProdutoCTRL from "../Controle/ProdutoCTRL.js";

const rotaProduto = new Router();
const produtoCtrl = new ProdutoCTRL();

rotaProduto.post("/", produtoCtrl.salvar)
.put("/", produtoCtrl.editar)
.delete("/", produtoCtrl.excluir)
.get("/", produtoCtrl.consultar)
// .get("/:id", produtoCtrl.consultarID)


export default rotaProduto;