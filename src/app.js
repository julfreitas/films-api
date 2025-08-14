import express from "express";
import filmRoutes from "./routes/filmRoutes.js";

const app = express();
app.use(express.json());

app.use("/films", filmRoutes);

app.use((err, req, res, next) => {
  console.error("Erro:", err.message);
  res
    .status(500)
    .send({ error: "Algo deu errado no servidor", detalhes: err.message });
});

export default app;
