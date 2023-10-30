const neonatal = {
    choro_espontaneo: Boolean,
    grau_de_atividade: String,
    cianose: Boolean,
    reanimacao: Boolean,
    apgar_1_minuto: Number,
    apgar_5_minutos: Number,
    ictericia: Boolean,
    rash: Boolean,
    sangramentos: Boolean,
    vomitos: Boolean,
    infeccoes: Boolean,
    anomalias_congenitas: Boolean,
    paralisias: Boolean,
    coriza: Boolean,
    permeabilidade_nasal: String,
    convulsoes: Boolean,
    dados_antropometricos_ao_nascer: {
        peso: Number,
        comprimento: Number,
        perimetro_cefalico: Number,
        perimetro_toracico: Number
    }
}

module.exports = neonatal;