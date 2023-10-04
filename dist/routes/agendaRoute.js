"use strict";
// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendaController_1 = __importDefault(require("../controllers/agendaController"));
const agendaRouter = (0, express_1.Router)();
agendaRouter.post("/criar", agendaController_1.default.criarAgenda);
agendaRouter.get("/listar", agendaController_1.default.listarAgenda);
agendaRouter.patch("/:id", agendaController_1.default.updateAgenda);
agendaRouter.delete("/:id", agendaController_1.default.deletarAgenda);
exports.default = agendaRouter;
