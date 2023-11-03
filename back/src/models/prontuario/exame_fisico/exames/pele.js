const pele = {
    cor: String,
    textura: String,
    humidade: String,
    temperatura: String,
    escamacao: Boolean,
    cicatrizes: Boolean,
    distribuicao_de_pelos: String,
    hemorragias: Boolean,
    rash: Boolean,
    circulacao_colateral: Boolean,
    edema: Boolean,
    tecido_celular_subcutaneo: Boolean,
    turgor: Boolean,
    unhas: {
        consistencia: String,
        deformidades: Boolean,
        manchas: Boolean,
        inflamacoes: Boolean
    }
}

module.exports = pele;