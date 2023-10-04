"use strict";
// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultaController_1 = __importDefault(require("../controllers/consultaController"));
const consultaRouter = (0, express_1.Router)();
consultaRouter.post("/criar", consultaController_1.default.criarConsulta);
consultaRouter.get("/listar", consultaController_1.default.listarConsultas);
consultaRouter.patch("/:id", consultaController_1.default.upedateConsultas);
consultaRouter.delete("/:id", consultaController_1.default.deletarConsultas);
exports.default = consultaRouter;
