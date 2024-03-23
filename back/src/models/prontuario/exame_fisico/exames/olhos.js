const olhos = {
    ptose: Boolean,
    edema_palpebral: Boolean,
    escleroticas_conjuntivas: {
        cor: String,
        hemorragias: Boolean,
        secrecao: Boolean,
        inflamacao: Boolean,
        secura: Boolean
    },
    cilios: String,
    movimentos_oculares_anormais: {
        estrabismo: Boolean,
        nistagmo: Boolean
    },
    pupilas: {
        tamanho: String,
        reacao_a_luz: String,
        opacidade: String
    },
    acuidade_visual: String
}
module.exports = olhos;