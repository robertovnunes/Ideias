const alimentacao = {
    aleitamento_materno: {
        exclusivo: String,
            quanto_tempo: String,
            causa_do_desmame: String
    },
    alimentacao_mista: {
        quando_iniciada: String
    },
    artificial: {
        quando_iniciada: String
    },
    inicio_da_alimentacao_solida: String,
        dieta_atual: {
        cereais: Boolean,
            vegetais: Boolean,
            carnes: Boolean,
            ovos: Boolean,
            frutas: Boolean
    },
    numero_de_refeicoes: Number,
        horarios: [],
        tipo_de_diluicao_dos_carboidratos: String,
        tecnica_utilizada: {
        uso_de_mamadeira: Boolean,
            colher: Boolean,
            copo: Boolean,
            alimentacao_pastosa: Boolean,
            liquidificada: Boolean,
            chantagem_afetiva: Boolean,
            brincadeiras_na_hora_das_refeicoes: Boolean
    }
}
module.exports = alimentacao;