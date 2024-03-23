const mongoose = require("mongoose");
const QPDHDA = {
    queixa_principal: String,
    historia_da_doenca_atual: String,
    adendo1: String,
    adendo2: String,
    adendo3: String
}
module.exports = mongoose.model("QPDHDA", QPDHDA);