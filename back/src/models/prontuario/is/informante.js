const mongoose = require("mongoose");
const informante = {
        nome: String,
        sexo: String,
        endereco: String,
        complemento: String,
        bairro: String,
        cidade: String,
        estado: String,
        cep: String,
        escolaridade: String,
        parentesco: String,
        obs: String
}

module.exports = mongoose.model("informante", informante);