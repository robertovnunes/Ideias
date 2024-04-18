const aparelho_respiratorio = {
    inspecao: {
        forma_do_torax: String,
        simetria: Boolean,
        contornos: String,
        proeminencias: String,
        massas_anormais: String,
        mamas: String
    },
    palpacao: {
        tipo_de_respiracao: String,
        tiragem: String,
        frequencia_respiratoria: String
    },
    percussao: {
        fremito_toracovocal: String,
        bronquico: String,
        pleural: String,
        comparando_os_lados: {
            macicez: String,
            submacicez: String,
            normal: String
        }
    },
    ausculta: {
        comparando_os_lados: {
            tipo_de_som: String,
            estertores_ruidos_adventicios: String,
            broncofonia: String
        }
    }
}
module.exports = aparelho_respiratorio;