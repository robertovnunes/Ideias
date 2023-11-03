const pele = require("./exames/pele");
const ganglios = require("./exames/ganglios_linfaticos");
const cranio = require("./exames/cranio");
const olhos = require("./exames/olhos");
const otorrino =  require("./exames/otorrino");
const cervical = require("./exames/cervical");
const respiratorio = require("./exames/respiratorio");
const gastrointestinal = require("./exames/gastrointestinal");
const cardiovascular = require("./exames/cardiovascular");
const genitourinario = require("./exames/genitourinario");
const musculoesqueletico = require("./exames/musculoesqueletico");
const sistema_nervoso = require("./exames/sistemanervoso");


const inspecao = "";

let exame_fisico = {
    inspecao,
    pele,
    ganglios,
    cranio,
    olhos,
    otorrino,
    cervical,
    respiratorio,
    gastrointestinal,
    cardiovascular,
    genitourinario,
    musculoesqueletico,
    sistema_nervoso
};
module.exports = exame_fisico;