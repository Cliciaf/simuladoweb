// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele

import { Router } from "express";
import agendaController from "../controllers/agendaController";

const agendaRouter = Router();

agendaRouter.post("/criar", agendaController.criarAgenda);
agendaRouter.get("/listar", agendaController.listarAgenda);
agendaRouter.patch("/:id", agendaController.updateAgenda);
agendaRouter.delete("/:id", agendaController.deletarAgenda);

export default agendaRouter;