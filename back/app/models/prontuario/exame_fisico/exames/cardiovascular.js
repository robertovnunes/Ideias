const aparelho_cardio_vascular = {
    inspecao: {
        abaulamento_ou_retracao_do_precordio: String,
            ictus: {
            sede: String,
                carater: String
        },
        local_e_forca_dos_batimentos_do_ictus: String,
            localizacao_de_fremidos: String
    },
    palpacao: {
        arterias_perifericas: {
            pulso: String,
                forca: String,
                volume: String,
                ritmo: String,
                tensao: String
        }
    },
    ausculta: {
        carater_das_bulhas: String,
            sopros: {
            sede: String,
                tempo_maximo_de_intensidade: String,
                propagacao: String,
                efeito_da_mudanca_de_posicao_e_de_exercicios: String
        },
        frequencia_cardiaca: String,
            tensao_arterial: String
    }
}
module.exports = aparelho_cardio_vascular;