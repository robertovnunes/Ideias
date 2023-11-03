const mongoose = require("mongoose");
const mae = {
    idade: Number,
    condicoes_de_saude: String,
    ocupacao_e_salario: {
        ocupacao: String,
        salario: Number
    },
    trabalha_fora: Boolean,
    na_sua_ausencia_quem_cuida_da_crianca: String
}
module.exports = mongoose.model("mae", mae);