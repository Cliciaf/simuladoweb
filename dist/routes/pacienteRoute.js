"use strict";
// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = __importDefault(require("../controllers/pacienteController"));
const pacienteRouter = (0, express_1.Router)();
pacienteRouter.post("/criar", pacienteController_1.default.criarPaciente);
pacienteRouter.get("/listar", pacienteController_1.default.listarPaciente);
pacienteRouter.patch("/:id", pacienteController_1.default.updatePaciente);
pacienteRouter.delete("/:id", pacienteController_1.default.deletarPaciente);
exports.default = pacienteRouter;
