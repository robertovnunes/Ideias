const aparelho_genito_urinario = {
    coloracao: String,
        coalescencia_de_pequenos_labios: String,
        perfuracao_do_himen: Boolean,
        fimose: Boolean,
        circuncisao: Boolean,
        hidrocele: Boolean,
        testiculos: {
        localizacao: String,
            tamanho: String,
            consistencia: String
    },
    secrecao_uretral_ou_vaginal: Boolean,
        presenca_de_pelos: Boolean,
        palpacao_das_lojas_renais_e_bexiga: String
};
module.exports = aparelho_genito_urinario;