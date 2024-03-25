const mongoose = require("mongoose");
const ouvidos = {
    dor: String,
    secrecao: String,
    infeccoes_frequentes: String,
    acuidade_auditiva: String
};

module.exports = mongoose.model("ouvidos", ouvidos);