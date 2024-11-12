const personaModel = require("../Model/personaModel");

const registrarPersona = (req, res) => {
    const persona = req.body;
    personaModel.registrarPersona(persona.materia, persona.dia, persona.profesor, persona.cupos, persona.fecha, persona.creditos,
        (error, resultados) => {
            if(error) {
                return res.status(500).json({mensaje: "Error al insertar la persona"});
            }
            return res.status(201).json({mensaje: "Persona se registro correctamente"});
        }
    );
}

module.exports = {
    registrarPersona
}