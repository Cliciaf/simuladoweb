// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele

import { Router } from "express";
import pacieteController from "../controllers/pacienteController";

const pacienteRouter = Router();

pacienteRouter.post("/criar", pacieteController.criarPaciente);
pacienteRouter.get("/listar", pacieteController.listarPaciente);
pacienteRouter.patch("/:id", pacieteController.updatePaciente);
pacienteRouter.delete("/:id", pacieteController.deletarPaciente);

export default pacienteRouter