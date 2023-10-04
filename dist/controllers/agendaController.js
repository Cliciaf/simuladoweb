"use strict";
// Controllers vão servir para controlar quando serão usadas as funções e metodos criados 
// no \services, de forma que utilizamos formas de verificação para analisar e ter certeza
// se uma requisição deu ou não certo.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agendaServices_1 = __importDefault(require("../services/agendaServices"));
class agendaController {
    constructor() { }
    criarAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agendas = yield agendaServices_1.default.criarAgenda(req.body);
                res.status(200).json({ status: "ok", agenda: agendas });
            }
            catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        });
    }
    listarAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agendas = yield agendaServices_1.default.listarAgendas();
                res.status(200).json({ status: "ok", agenda: agendas });
            }
            catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        });
    }
    updateAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id); // Json é corno e trabalha com String, tem que transfromar o Id em inteiro antes
                const agendas = yield agendaServices_1.default.updateAgenda(id, req.body);
                res.status(200).json({ status: "ok", agenda: agendas });
            }
            catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        });
    }
    deletarAgenda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const agendas = yield agendaServices_1.default.deletarAgenda(id);
                res.status(200).json({ status: "ok", agenda: agendas });
            }
            catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        });
    }
}
exports.default = new agendaController;
