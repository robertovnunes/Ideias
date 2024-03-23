const mongoose = require("mongoose");
const respiratorio =  {
    corrimento_nasal: {
        claro: Boolean,
        esverdeado: Boolean,
        ausente: Boolean,
        nao_avaliado: Boolean
    },
    sufocacao_ou_tosse_durante_alimentacao: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    epistaxis: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    tosse: {
        duracao: {
            menor_que_30_dias: Boolean,
            maior_que_30_dias: Boolean
        },
        tipo: {
            produtiva: Boolean,
            seca: Boolean,
            nao_avaliado: Boolean
        },
        periodo: {
            noturna: Boolean,
            matutina: Boolean
        },
        nao_avaliado: Boolean
    },
    resfriados_frequentes: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    dor_toracica: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    dificuldade_respiratoria: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    hemoptise: {
        sim: Boolean,
        nao_avaliado: Boolean
    }
}

module.exports = mongoose.model("respiratorio", respiratorio);