const express = require("express");
const app = express();
const noteRoutes = require("./routers/noteRoutes")

app.use(express.json());

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use("/note", noteRoutes);

app.listen(port, () =>{
    console.log("API Iniciada!!");
    console.log(`Iniciado na porta ${port}`);
})