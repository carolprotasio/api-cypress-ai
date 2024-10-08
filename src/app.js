const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes");

const app = express();
app.use(express.json());

// Conexão ao MongoDB
mongoose
  .connect(
    "mongodb+srv://bookApi:bookApi@book-api.cutod.mongodb.net/?retryWrites=true&w=majority&appName=book-api"
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB", error);
  });

//permite json nas requisições
app.use(express.json());
// Rotas
app.use("/api", bookRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
