const cervical = {
    inspecao: {
        retracoes: String,
            torcicolo: String
    },
    palpacao: {
        claviculas: String,
            tireoide: {
            aumento: Boolean,
                massas: Boolean,
                consistencia: String
        },
        outras_massas_tumorais: String,
            fistulas: Boolean,
            rigidez: Boolean,
            fossa_supraclavicular: String
    }
}
module.exports = cervical;