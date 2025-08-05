const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL)

const Note = new mongoose.model("Note",{
    title: String,
    content: String
});

app.get('/', async (req, res) => {
    const notes = await Note.find(); 
    res.send(notes)
})

app.post("/", async (req, res) =>{
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save().then(() => {
        return res.send("Nota Adicionada ao Banco com sucesso")
    });
})

app.get("/:id", async (req, res) =>{
    const note = await Note.findById(req.params.id);
    return res.send(note);
})

app.delete("/:id", async (req, res) =>{
    const note = await Note.findByIdAndDelete(req.params.id);
    return res.send("Nota deletada");
})

app.put("/:id", async (req,res) =>{
    const note = await Note.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        content: req.body.content
    });
    return res.send("Nota atualizada")
})

app.listen(port, () =>{
    console.log(`Escultando porta ${port}`)
})