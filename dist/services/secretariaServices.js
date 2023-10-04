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
class secretariaServices {
    constructor() { }
    criarSecretaria(dado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretaria = yield prisma.secretaria.create({
                    data: {
                        nome: dado.nome,
                        RG: dado.RG,
                    }
                });
                return secretaria;
            }
            catch (error) {
                throw new Error("Error ao criar secretarias");
            }
        });
    }
    listarSecretarias() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretarias = yield prisma.secretaria.findMany();
                return secretarias;
            }
            catch (error) {
                console.log(error);
                throw new Error("Erro ao listar secretarias");
            }
        });
    }
    updateSecretarias(id, dado) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretaria = yield prisma.secretaria.update({
                    where: { id: id },
                    data: dado
                });
                return secretaria;
            }
            catch (error) {
                throw new Error("Error ao Atualizar");
            }
        });
    }
    deletarSecretarias(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secretaria = yield prisma.secretaria.delete({
                    where: { id: id }
                });
                return secretaria;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error ao Deletar a lista");
            }
        });
    }
}
exports.default = new secretariaServices;
