import express from "express";
import * as dotenv from "dotenv";

//Importar as rotas
import pacienteRouter from "./routes/pacienteRoute";
import secretariaRoute from "./routes/secretariaRoute";
import consultaRoute from "./routes/consultaRoute";
import agendaRoute from "./routes/agendaRoute";

const PORT = process.env.PORT || 3000;
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/agenda", agendaRoute);
app.use("/api/consultas", consultaRoute)
app.use("/api/pacietne", pacienteRouter);
app.use("/api/secretaria", secretariaRoute)

app.get('/', (req, res) => {
    res.send('Seu servidor está funcionando!');
  });
  
  app.listen(PORT, () => {
    console.log("Servidor rodando na porta ${PORT}");
  });