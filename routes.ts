// routes.js

import express from "express";
import pacienteController from "./controllers/PacienteController";
import secretariaController from "./controllers/SecretariaController";
import consultaController from "./controllers/ConsultaController";
import agendaController from "./controllers/AgendaController";

const router = express.Router();

// Rotas para pacientes
router.get("/pacientes", pacienteController.getAllPacientes);
router.get("/pacientes/:id", pacienteController.getPacienteById);
router.post("/pacientes", pacienteController.createPaciente);
router.put("/pacientes/:id", pacienteController.updatePaciente);
router.delete("/pacientes/:id", pacienteController.deletePaciente);

// Rotas para secretarias
router.get("/secretarias", secretariaController.getAllSecretarias);
router.get("/secretarias/:id", secretariaController.getSecretariaById);
router.post("/secretarias", secretariaController.createSecretaria);
router.put("/secretarias/:id", secretariaController.updateSecretaria);
router.delete("/secretarias/:id", secretariaController.deleteSecretaria);

// Rotas para consultas
router.get("/consultas", consultaController.getAllConsultas);
router.get("/consultas/:id", consultaController.getConsultaById);
router.post("/consultas", consultaController.createConsulta);
router.put("/consultas/:id", consultaController.updateConsulta);
router.delete("/consultas/:id", consultaController.deleteConsulta);

// Rotas para agendas
router.get("/agendas", agendaController.getAllAgendas);
router.get("/agendas/:id", agendaController.getAgendaById);
router.post("/agendas", agendaController.createAgenda);
router.put("/agendas/:id", agendaController.updateAgenda);
router.delete("/agendas/:id", agendaController.deleteAgenda);

export default router;
