"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
//Importar as rotas
const pacienteRoute_1 = __importDefault(require("./routes/pacienteRoute"));
const secretariaRoute_1 = __importDefault(require("./routes/secretariaRoute"));
const consultaRoute_1 = __importDefault(require("./routes/consultaRoute"));
const agendaRoute_1 = __importDefault(require("./routes/agendaRoute"));
const PORT = process.env.PORT || 3000;
dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/agenda", agendaRoute_1.default);
app.use("/api/consultas", consultaRoute_1.default);
app.use("/api/pacietne", pacienteRoute_1.default);
app.use("/api/secretaria", secretariaRoute_1.default);
app.get('/', (req, res) => {
    res.send('Seu servidor está funcionando!');
});
app.listen(PORT, () => {
    console.log("Servidor rodando na porta ${PORT}");
});
