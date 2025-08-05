const mongoose = require("mongoose");

const Note = new mongoose.model("Note",{
    title: String,
    content: String
})

module.exports = { Note };