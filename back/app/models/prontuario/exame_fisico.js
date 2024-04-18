const cardiovascular = require("./exame_fisico/exames/cardiovascular");
const cervical = require("./exame_fisico/exames/cervical");
const cranio = require("./exame_fisico/exames/cranio");
const ganglios_linfaticos = require("./exame_fisico/exames/ganglios_linfaticos");
const gastrointestinal = require("./exame_fisico/exames/gastrointestinal");
const genitourinario = require("./exame_fisico/exames/genitourinario");
const musculoesqueletico = require("./exame_fisico/exames/musculoesqueletico");
const pele = require("./exame_fisico/exames/pele");
const respiratorio = require("./exame_fisico/exames/respiratorio");
const olhos = require("./exame_fisico/exames/olhos");
const otorrino = require("./exame_fisico/exames/otorrino");
const sistemanervoso = require("./exame_fisico/exames/sistemanervoso");

const exame_fisico = {
    cardiovascular,
    cervical,
    cranio,
    ganglios_linfaticos,
    gastrointestinal,
    genitourinario,
    musculoesqueletico,
    pele,
    respiratorio,
    olhos,
    otorrino,
    sistemanervoso
};

module.exports = exame_fisico;