const genitourinario = {
    urina: {
        quantidade: {
            normal: Boolean,
            abundante: Boolean,
            escassa: Boolean,
            nao_avaliado: Boolean
        },
        jato: {
            continuo: Boolean,
            partido: Boolean,
            nao_avaliado: Boolean
        },
        cor: {
            clara: Boolean,
            escura: Boolean,
            nao_avaliado: Boolean
        },
        odor: {
            inodoro: Boolean,
            fetido: Boolean,
            nao_avaliado: Boolean
        },
        atividade_sexual: {
            sim: Boolean,
            nao_avaliado: Boolean
        },
        frequencia: {
            normal: Boolean,
            mais_que_o_habitual: Boolean,
            nao_avaliado: Boolean
        },
        urgencia: {
            sim: Boolean,
            nao_avaliado: Boolean
        },
        disuria: {
            sim: Boolean,
            nao_avaliado: Boolean
        },
        corrimento_uretral: {
            sim: Boolean,
            cor: {
                claro: Boolean,
                leitoso: Boolean,
                nao_avaliado: Boolean
            },
            odor: {
                inodoro: Boolean,
                fetido: Boolean,
                nao_avaliado: Boolean
            },
            nao_avaliado: Boolean
        }
    },
    genital_feminino: {
        corrimento_vaginal: {
            presente: Boolean,
            ausente: Boolean,
            nao_avaliado: Boolean
        },
        telarca: {
            ausente: Boolean,
            nao_avaliado: Boolean
        },
        pubarca: {
            ausente: Boolean,
            nao_avaliado: Boolean
        },
        historico_menstrual: {
            menstruacao: {
                presente: Boolean,
                nao_avaliado: Boolean
            }
        }
    },
    genital_masculino: {
        pubarca: {
            ausente: Boolean,
            nao_avaliado: Boolean
        },
        volume_testicular: {
            normal_para_a_idade: Boolean,
            menor_que_o_normal: Boolean,
            maior_que_o_normal: Boolean,
            nao_avaliado: Boolean
        },
        tamanho_do_penis: {
            normal_para_a_idade: Boolean,
            menor_que_o_normal: Boolean,
            maior_que_o_normal: Boolean,
            nao_avaliado: Boolean
        },
        erecoes: {
            presente: Boolean,
            ausente: Boolean,
            nao_avaliado: Boolean
        },
        polucoes: {
            presente: Boolean,
            ausente: Boolean,
            nao_avaliado: Boolean
        }
    }
}

module.exports = genitourinario;