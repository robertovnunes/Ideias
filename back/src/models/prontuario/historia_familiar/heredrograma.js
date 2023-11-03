const pai = require('./pai');
const mae = require('./mae');
const filho = require('./filho');
const mongoose = require("mongoose");

const heredrograma = mongoose.model("heredograma", {
    pai: pai,
    mae: mae,
    filhos: [filho]
});
module.exports = heredrograma;