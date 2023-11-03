const mongoose = require("mongoose");
const prontuario_geral = {
    febre: {
        presente: Boolean,
        nao_avaliado: Boolean
    },
    peso: {
        ganho_de_peso: Boolean,
        perda_de_peso: Boolean,
        nenhuma_alteracao: Boolean,
        nao_avaliado: Boolean
    },
    atividade: {
        ativo: Boolean,
        quieto: Boolean,
        nao_avaliado: Boolean
    },
    apetite: {
        falta: Boolean,
        em_excesso: Boolean,
        normal: Boolean,
        nao_avaliado: Boolean
    },
    altura: String,
    obs_geral: String
}

module.exports = mongoose.model("prontuario_geral", prontuario_geral);