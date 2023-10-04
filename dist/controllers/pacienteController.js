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
const pacienteServices_1 = __importDefault(require("../services/pacienteServices"));
class pacienteController {
    constructor() { }
    criarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = yield pacienteServices_1.default.criarPaciente(req.body);
                res.status(200).json({ status: "ok", paciente: paciente });
            }
            catch (error) {
                res.status(500).json({ status: "error", message: error.message });
            }
        });
    }
    listarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield pacienteServices_1.default.listarPaciente();
                res.status(200).json({ status: "ok", pacientes: pacientes });
            }
            catch (error) {
                res.status(500).json({ status: "ok", message: error.message });
            }
        });
    }
    updatePaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const pacientes = yield pacienteServices_1.default.updatePaciente(id, req.body);
                res.status(200).json({ status: "ok", pacientes: pacientes });
            }
            catch (error) {
                res.status(500).json({ status: "Error", message: error.message });
            }
        });
    }
    deletarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const pacientes = yield pacienteServices_1.default.deletarPaciente(id);
                res.status(200).json({ status: "ok", pacientes: pacientes });
            }
            catch (error) {
                res.status(500).json({ status: "ok", message: error.message });
            }
        });
    }
}
exports.default = new pacienteController;
