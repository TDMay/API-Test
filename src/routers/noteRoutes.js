const express = require("express");
const notaController = require("../controllers/noteController")
const router = express.Router();

router.get("/", notaController.listarTodasNotas);
router.get("/:id", notaController.listarNotaPorId);
router.post("/", notaController.criarNota);
router.put("/:id", notaController.atualizarNotaPorId);
router.delete("/:id", notaController.deletarNotaPorId);

module.exports = router;