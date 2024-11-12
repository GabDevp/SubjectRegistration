const express = require("express");
const router = express.Router();
const personaController = require("../js/Controller/personaController");

router.post('/registro', personaController.registrarPersona);

module.exports = router;