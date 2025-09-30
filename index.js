import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

dotenv.config();

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
  });
});

//deploy na nuvem
//refatorar o código
//metodo sort by name
//buscar por id - ok
