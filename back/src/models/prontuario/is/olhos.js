const mongoose = require("mongoose");
const olhos =  {
      fotofobia: {
        sim: Boolean,
        nao_avaliado: Boolean
      },
      lacrimejando: {
        sim: Boolean,
        nao_avaliado: Boolean
      },
      edema_palpebral: {
        sim: Boolean,
        nao_avaliado: Boolean
      },
      secrecao: {
        sim: Boolean,
        nao_avaliado: Boolean
      },
      dor: String,
      acuidade_visual: {
        teste_do_olhinho_normal: Boolean,
        teste_do_olhinho_anormal: Boolean,
        sim: Boolean,
        cegueira: Boolean,
        nao_avaliado: Boolean
      }
    }
module.exports = mongoose.model("olhos", olhos);
