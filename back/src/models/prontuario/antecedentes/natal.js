const natal = {
    duracao_do_trabalho_de_parto: String,
        complicacoes: String,
        tipo_de_parto: [
        "espontaneo",
        "instrumentado",
        "cirurgico"
    ],
        tipo_de_apresentacao: [
        "Cefalica",
        "pelvica",
        "outra"
    ],
        anestesia: Boolean,
        analgesia: {
        tipo: String,
            tempo_de_duracao: String
    }
}
module.exports = natal;