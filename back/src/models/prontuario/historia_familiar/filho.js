const mongoose = require("mongoose");
const filho = {
    nome: String,
    idade: Number,
    paciente: Boolean
}
module.exports = mongoose.model("filho", filho);