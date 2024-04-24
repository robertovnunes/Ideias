const prontuario = require('./prontuarios');
const mongoose = require('mongoose');

const paciente =  {
    nome: {
        type: String,
        required: true
    },
    data_nascimento: {
        type: Date,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    cns: {
        type: String,
        required: true
    },
    mae: {
        type: String,
        required: true
    },
    pai: {
        type: String,
        required: true
    },
    endereco: {
       logradouro: {
           type: String,
           required: true
       },
         numero: {
              type: Number,
              required: true
         },
        complemento: {
                type: String,
                required: false
            },
        bairro: {
                type: String,
                required: true
            },
        cidade: {
                type: String,
                required: true
            },
        estado: {
                type: String,
                required: true
            },
        cep: {
                type: String,
                required: true
            }
    },
    prontuario
}

module.exports = mongoose.model('Paciente', paciente);