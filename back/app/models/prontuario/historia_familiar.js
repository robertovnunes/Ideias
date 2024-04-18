const condicoesdomesticas = require("./historia_familiar/condicoesdomesticas");
const doencasfamiliares = require("./historia_familiar/doencasfamiliares");
const filho = require("./historia_familiar/filho");
const heredrograma = require("./historia_familiar/heredrograma");
const mae = require("./historia_familiar/mae");
const pai = require("./historia_familiar/pai");
const saude_falecimento = require("./historia_familiar/saude_falecimento");


const historia_familiar = {
    condicoesdomesticas,
    doencasfamiliares,
    filho,
    heredrograma,
    mae,
    pai,
    saude_falecimento
};


module.exports = historia_familiar;