"use strict";
// Nessa pasta é possivel verificar e Definir os caminhos das URL
// e definir as funções que serão feitas baseados nele
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const secretariaController_1 = __importDefault(require("../controllers/secretariaController"));
const secretariaRouter = (0, express_1.Router)();
secretariaRouter.post("/criar", secretariaController_1.default.criarSecretaria);
secretariaRouter.get("/listar", secretariaController_1.default.listarSecretaria);
secretariaRouter.patch("/:id", secretariaController_1.default.updateSecretaria);
secretariaRouter.delete("/:id", secretariaController_1.default.deletarSecretaria);
exports.default = secretariaRouter;
