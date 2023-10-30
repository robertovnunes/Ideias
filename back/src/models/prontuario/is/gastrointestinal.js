const gastrointestinal = {
    nauseas: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    vomitos: {
        apos_alimentacao: Boolean,
        sem_causa_aparente: Boolean,
        nao: Boolean,
        nao_avaliado: Boolean
    },
    dor_abdominal: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    tenesmo: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    evacuacao: {
        normal: Boolean,
        constipado: Boolean,
        nao_avaliado: Boolean
    },
    aspecto_das_fezes: {
        normais: Boolean,
        brancas: Boolean,
        escuras: Boolean
    }
}
module.exports = gastrointestinal;