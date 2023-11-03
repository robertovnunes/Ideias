const aparelho_musculo_esqueletico = {
    membros: {
        anomalias: String,
            deformidades: String,
            edemas: String,
            tumoracoes: String,
            forca_muscular: String,
            dor_ossea_e_articular: String,
            movimentacao_ativa_e_passiva: String
    },
    coluna: {
        anomalias: String,
            deformidades: String,
            edemas: String,
            tumoracoes: String,
            forca_muscular: String,
            dor_ossea_e_articular: String,
            movimentacao_ativa_e_passiva: String
    },
    postura_em_pe: {
        lordose: String,
            escoliose: String,
            cifose: String,
            curvatura_para_frente: {
            simetria_de_omoplatas: String,
                espasmos_musculares: Boolean,
                dor_local: Boolean,
                dor_reflexa: Boolean
        }
    }
};
module.exports = aparelho_musculo_esqueletico;