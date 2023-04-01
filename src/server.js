import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import routes from "./routes/index.js";
import db from "./db.js";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use("/", routes());

db.sync(() => console.log("Banco de dados preparado"));

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
