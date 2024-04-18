const sistema_otorrinolaringologico = {
    ouvidos: {
        inspecao: {
            configuracao_e_posicao_das_orelhas: String,
                alteracao_da_coloracao: String
        },
        palpacao: {
            dor_e_edema_sobre_a_mastoide: Boolean,
                canal_auditivo_externo: String,
                secrecao: String
        },
        otoscopia: {
            aparencia_do_conduto_auditivo_e_da_membrana_timpanica: String
        }
    },
    nariz: {
        inspecao: {
            batimentos_de_asas_do_nariz: String,
                secrecoes: String
        },
        palpacao: {
            tumoracoes: Boolean
        },
        rinoscopia_anterior: {
            permeabilidade: String,
                cornetos: String
        }
    },
    labios: {
        inspecao: {
            cor: String,
                umidade: String,
                erupcoes: Boolean,
                fissuras: Boolean
        },
        palpacao: {
            massas: Boolean
        }
    },
    gengivas: {
        inspecao: {
            cor: String,
                hemorragias: Boolean
        }
    },
    lingua: {
        inspecao: {
            mucosa_oral:{
                cor: String,
                aspecto: String
            },
                grau_de_umidade: String,
                estado_das_papilas: String,
                tremor: String,
                exsudatos: String
        },
        palpacao: {
            tumoracoes: String
        }
    },
    dentes: {
        inspecao: {
            numero: String,
                implantacao: String,
                conservacao: String
        }
    },
    faringe: {
        inspecao: {
            cor: String,
                exsudato: String
        }
    },
    laringe: {
        ausculta: {
            estridor: String
        }
    }
}

module.exports = sistema_otorrinolaringologico;