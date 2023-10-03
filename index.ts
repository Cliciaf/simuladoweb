import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pacienteRoutes from "./routes";
import prisma from "./schema.prisma";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Registrar as rotas
app.use("/pacientes", pacienteRoutes);
app.use("/secretarias", secretariaRoutes);
app.use("/consultas", consultaRoutes);
app.use("/agendas", agendaRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
