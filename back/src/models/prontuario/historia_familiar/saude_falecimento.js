const mongoose = require('mongoose');

const saude_falecimento = {
        nome: String,
        idade: Number,
        condicoes_de_saude: String,
        falecimento: Boolean
    }
;
module.exports = saude_falecimento;