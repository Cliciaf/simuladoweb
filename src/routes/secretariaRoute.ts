// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele

import { Router } from "express";
import secretariaController from "../controllers/secretariaController";

const secretariaRouter = Router();

secretariaRouter.post("/criar", secretariaController.criarSecretaria);
secretariaRouter.get("/listar", secretariaController.listarSecretaria);
secretariaRouter.patch("/:id",  secretariaController.updateSecretaria);
secretariaRouter.delete("/:id", secretariaController.deletarSecretaria);

export default secretariaRouter