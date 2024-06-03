const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    nome: { type: String, required: true },
    horario: { type: String, required: true },
    data: { type: String, required: true },

});

const Evento = mongoose.model('Evento', EventoSchema);

module.exports = {Evento, EventoSchema}
