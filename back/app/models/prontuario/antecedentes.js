const alimentacao = require('./antecedentes/alimentacao');
const desenvolvimento = require('./antecedentes/desenvolvimento');
const doencas = require('./antecedentes/doencas');
const habitos = require('./antecedentes/habitos');
const imunizacoes = require('./antecedentes/imunizacoes');
const natal = require('./antecedentes/natal');
const neonatal = require('./antecedentes/neonatal');
const outras = require('./antecedentes/outras');
const prenatal = require('./antecedentes/prenatal');

const antecedentes = {
    alimentacao,
    desenvolvimento,
    doencas,
    habitos,
    imunizacoes,
    natal,
    neonatal,
    outras,
    prenatal
};

module.exports = antecedentes;