"use strict";
// Aqui são feitos os Metodos e funções do projeto.
// Dica dita pelo prfessor (Otavio), sempre criar uma classe com todos os metodos e exportar
// a classe direto.
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
class agendaServices {
    constructor() { }
    criarAgenda(dado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.create({
                    data: {
                        data: dado.data,
                        nomePcnt: dado.nomePcnt
                    }
                });
                return agenda;
            }
            catch (error) {
                throw new Error("Error ao criar uma nova Agenda"); // Esse comando faz sinaliza que algo inesperado aconteceu e que o fluxo normal do programa deve ser interrompido.
            }
        });
    }
    listarAgendas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.findMany();
                return agenda;
            }
            catch (error) {
                throw new Error("Error ao listar as agendas");
            }
        });
    }
    updateAgenda(id, dado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.update({
                    where: { id: id },
                    data: dado
                });
                return agenda;
            }
            catch (error) {
                throw new Error("Error ao Atualizar a lista");
            }
        });
    }
    deletarAgenda(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agenda = yield prisma.agenda.delete({
                    where: { id: id }
                });
                return agenda;
            }
            catch (error) {
                throw new Error("Error ao Deletar a lista");
            }
        });
    }
}
exports.default = new agendaServices;
