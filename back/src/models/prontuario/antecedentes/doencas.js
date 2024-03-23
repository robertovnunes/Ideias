const doencas = {
    infectocontagiosas: {
        coqueluche: Boolean,
        sarampo: Boolean,
        varicela: Boolean,
        parotidite: Boolean,
        difteria: Boolean,
        tetano: Boolean
    },
    diarreia: Boolean,
    pneumonia: Boolean,
    meningite: Boolean,
    febre_reumatica: Boolean,
    nefropatia: Boolean,
    tuberculose: Boolean,
    alergia: {
        Asma: Boolean,
        eczema: Boolean,
        alimentar: Boolean
    },
    cirurgias_e_acidentes: {
        natureza: String,
        resultado: String
    },
    historia_de_transfusoes: Boolean,
    hospitalizacoes: Number,
    tratamentos_realizados: []

};
module.exports = doencas;