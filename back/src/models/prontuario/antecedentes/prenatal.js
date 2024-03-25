const prenatal = {
    acompanhamento_medico: {
        medico: {
            nome: String,
            CRM: String,
            especialidade: String
        }
    },
    anormalidades: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    medicacoes: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    radiacoes: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    doencas_cirurgicas: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    grupo_sanguineo: {
        a: Boolean,
        b: Boolean,
        o: Boolean,
        ab: Boolean,
        rh: {
            positivo: Boolean,
            negativo: Boolean
        }
    },
    testes_lueticos: {
        sim: Boolean,
        nao_avaliado: Boolean
    },
    vacina_antitetanica: {
        sim: Boolean,
        quantas: Number
    },
    estado_nutricional_durante_a_gravidez: {
        alimentacao: {
            adequada: Boolean,
            inadequada: Boolean,
            nao_avaliado: Boolean
        },
        peso: Number,
        anemia: {
            sim: Boolean
        }
    }
}