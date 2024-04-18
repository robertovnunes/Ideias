const mongoose = require('mongoose');
const antecedentes = require('./prontuario/antecedentes');
const exame_fisico = require('./prontuario/exame_fisico.js');
const hipotese_diagnostica = require('./prontuario/hipotesediagnostica.js');
const historia_familiar = require('./prontuario/historia_familiar.js');
const is = require('./prontuario/is.js');
const qpdhda = require('./prontuario/qpdhda.js');

const prontuario = new mongoose.Schema( {
    is,
    antecedentes,
    exame_fisico,
    hipotese_diagnostica,
    historia_familiar,
    qpdhda
});

//consign().include("models/prontuario").into(prontuario);


module.exports = mongoose.model('prontuario', prontuario);