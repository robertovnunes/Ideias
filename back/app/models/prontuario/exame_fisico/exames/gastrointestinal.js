const aparelho_gastro_intestinal = {
    inspecao: {
        forma_do_abdomen: String,
            cicatriz_umbilical: String,
            peristaltismo: Boolean,
            distensao: Boolean,
            tumoracoes: Boolean,
            anus: {
            escoriacoes: Boolean,
                fissuras: Boolean,
                prolapso: Boolean
        }
    },
    percussao: {
        ondas_fluidas: String,
            timpanismo: String
    },
    palpacao: {
        superficial: {
            estado_das_paredes_musculares: String,
                espasmos: Boolean,
                rigidez: Boolean,
                dor: Boolean
        },
        profunda: {
            estomago: String,
                figado: String,
                baco: String,
                rins: String,
                presenca_de_massas_tumorais: {
                dimensoes_em_centimetros: String,
                    consistencia: String,
                    superficie: String,
                    bordos: String,
                    se_ha_dor: Boolean
            },
            hernias: {
                redutibilidade: String
            }
        }
    },
    ausculta: {
        ruidos_hidro_aereos: String
    }
}
module.exports = aparelho_gastro_intestinal;