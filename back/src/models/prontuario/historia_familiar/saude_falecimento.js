const mongoose = require('mongoose');

const saude_falecimento = mongoose.model("saudefalecimento", [
    {
        nome: String,
        idade: Number,
        condicoes_de_saude: String,
        falecimento: Boolean
    }
]);
module.exports = saude_falecimento;