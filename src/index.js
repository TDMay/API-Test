const express = require("express");
const app = express();
app.use(express.json());

require('dotenv').config()

const port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    res.send("Hello world")
})

app.listen(port, () =>{
    console.log(`Escultando porta ${port}`)
})