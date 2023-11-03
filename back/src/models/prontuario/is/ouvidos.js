const mongoose = require("mongoose");
const ouvidos = {
    dor: {
        ouvido_esquerdo: Boolean,
            ouvido_direito: Boolean,
            ambos: Boolean,
            nao_avaliado: Boolean
    },
    secrecao: {
        presente: Boolean,
            ausente: Boolean,
            nao_avaliado: Boolean
    },
    infeccoes_frequentes: {
        sim: Boolean,
            nao_avaliado: Boolean
    },
    acuidade_auditiva: {
        teste_da_orelhinha_normal: Boolean,
            teste_da_orelhinha_anormal: Boolean,
            sim: Boolean,
            nao_avaliado: Boolean
    }
}

module.exports = mongoose.model("ouvidos", ouvidos);