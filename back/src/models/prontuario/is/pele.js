const mongoose = require("mongoose");
const pele = {
    rash: {
        escarlatiforme: Boolean,
            mobiliforme: Boolean,
            ausente: Boolean,
            nao_avaliado: Boolean
    },
    ictericia: {
        zona_1_de_kramer: Boolean,
            zona_2_de_kramer: Boolean,
            zona_3_de_kramer: Boolean,
            zona_4_de_kramer: Boolean,
            zona_5_de_kramer: Boolean,
            ausente: Boolean,
            nao_avaliado: Boolean
    },
    infeccoes_de_repeticao: {
        sim: Boolean,
            nao_avaliado: Boolean
    },
    obs: String
}
module.exports = mongoose.model("pele", pele);