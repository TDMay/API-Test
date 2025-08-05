const mongoose = require("mongoose");
const Note = require("../models/noteModel")
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL)

const listarTodasNotas = async (req, res) =>{
    const notes = await Note.find();
    return res.send(notes);
}

const listarNotaPorId = async (req, res) =>{
    const note = await Note.findById(req.params.id);
    return res.status(200).send(note);
}

const criarNota = async (req, res) =>{
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })
    newNote.save().then(() =>{
        return res.status(201).send("Nota Criada");
    })
}

const deletarNotaPorId = async (req, res) =>{
    const note = await Note.findByIdAndDelete(req.params.id);
    return res.status(200).send("Nota deletada");
}

const atualizarNotaPorId = async (req, res) =>{
    const note = await Note.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        content: req.body.content
    });
    return res.status(200).send("Nota atualizada")
}

module.exports = { listarNotaPorId, listarTodasNotas, criarNota, deletarNotaPorId, atualizarNotaPorId }