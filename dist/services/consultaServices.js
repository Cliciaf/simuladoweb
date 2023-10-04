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
class Consulta {
    constructor() { }
    criarConsulta(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.create({
                    data: {
                        data: data.data,
                        nomePcnte: data.nomePcnte,
                        nomeDents: data.nomeDents,
                        pacienteId: data.pacienteId,
                        secretariaId: data.secretariaId
                    }
                });
                return consulta;
            }
            catch (error) {
                console.log(error);
                throw new Error("Erro ao criar consulta");
            }
        });
    }
    listarConsulta() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.findMany();
                return consulta;
            }
            catch (error) {
                throw new Error("Error ao listar as Consultas");
            }
        });
    }
    updateConsulta(id, dado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.update({
                    where: { id: id },
                    data: dado
                });
                return consulta;
            }
            catch (error) {
                console.log(error);
                throw new Error("Erro ao atualizar consulta");
            }
        });
    }
    deletarConsulta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = yield prisma.consulta.delete({
                    where: { id: id }
                });
                return consulta;
            }
            catch (error) {
                throw new Error("Error ao Deletar as consultas");
            }
        });
    }
}
exports.default = new Consulta;
