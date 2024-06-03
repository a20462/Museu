const mongoose = require('mongoose');

const BilheteSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    preco: { type: String, required: true },
    evento: { type: String, required: false },
    horario: { type: String, required: true },
    data: { type: String, required: true },

});

const Bilhete = mongoose.model('Bilhete', BilheteSchema);

module.exports = {Bilhete, BilheteSchema}
