const mongoose = require("mongoose");
const pai = {
    idade: Number,
    condicoes_de_saude: String,
    ocupacao_e_salario: {
        ocupacao: String,
        salario: Number
    }
}
module.exports = mongoose.model("pai", pai);