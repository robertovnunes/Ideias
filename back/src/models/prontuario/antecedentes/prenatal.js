const prenatal = {
    acompanhamento_medico: {
        medico: {
            nome: string,
            CRM: string,
            especialidade: string
        }
    },
    anormalidades: {
        sim: boolean,
        nao_avaliado: boolean
    },
    medicacoes: {
        sim: boolean,
        nao_avaliado: boolean
    },
    radiacoes: {
        sim: boolean,
        nao_avaliado: boolean
    },
    doencas_cirurgicas: {
        sim: boolean,
        nao_avaliado: boolean
    },
    grupo_sanguineo: {
        a: boolean,
        b: boolean,
        o: boolean,
        ab: boolean,
        rh: {
            positivo: boolean,
            negativo: boolean
        }
    },
    testes_lueticos: {
        sim: boolean,
        nao_avaliado: boolean
    },
    vacina_antitetanica: {
        sim: boolean,
        quantas: number
    },
    estado_nutricional_durante_a_gravidez: {
        alimentacao: {
            adequada: boolean,
            inadequada: boolean,
            nao_avaliado: boolean
        },
        peso: string,
        anemia: {
            sim: boolean
        }
    }
}