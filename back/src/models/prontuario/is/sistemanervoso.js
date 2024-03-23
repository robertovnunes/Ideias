const mongoose = require("mongoose");
const sistema_nervoso = {
    cefaleia: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    convulsoes: {
        febril: {
            tonica: Boolean,
            tonicacronica: Boolean,
            nao_avaliado: Boolean
        },
        afebril: {
            localizada: Boolean,
            generalizada: Boolean,
            nao_avaliada: Boolean
        },
        ausente: Boolean,
        nao_avaliado: Boolean
    },
    traumas_cranianos: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    sincopes: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    paresias: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    paralisias: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    retardo_neuropsicomotor: {
        sim: Boolean,
        nao_avaliado: Boolean
    }
}
module.exports = mongoose.model("sistema_nervoso", sistema_nervoso);