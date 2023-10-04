"use strict";
// Aqui são feitos os Metodos e funções do projeto.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Paciente {
    constructor() { }
    criarPaciente(dado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma.paciente.create({
                    data: {
                        nomePcnte: dado.nomePcnte,
                        senha: dado.senha,
                        usuario: dado.usuario
                    }
                });
                return paciente;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error ao criar pacientes");
            }
        });
    }
    listarPaciente() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma.paciente.findMany();
                return paciente;
            }
            catch (error) {
                throw new Error("Error ao listar pacientes");
            }
        });
    }
    updatePaciente(id, dado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma.paciente.update({
                    where: { id: id },
                    data: dado
                });
                return paciente;
            }
            catch (error) {
                throw new Error("Error ao Atualizar");
            }
        });
    }
    deletarPaciente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield prisma.paciente.delete({
                    where: { id: id }
                });
                return paciente;
            }
            catch (error) {
                throw new Error("Error ao Deletar a lsita");
            }
        });
    }
}
exports.default = new Paciente;
