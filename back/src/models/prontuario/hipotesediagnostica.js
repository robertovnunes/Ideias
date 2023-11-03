const mongoose = require("mongoose");
const hipotese_diagnostica = [
    {
        problema: String,
        diagnostico: String,
        conduta: String,
        prevencao: String
    }
];
module.exports = mongoose.model('hipotesediagnostica', hipotese_diagnostica);