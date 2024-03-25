const express = require('express');
const router = express.Router();
const consign = require('consign');
const fs = require('fs');
const path = require('path');

function getModels (caminho) {

    // Caminho para a pasta de modelos
    const modelsDirectory = path.join(__dirname, caminho);

    // Objeto para armazenar todos os modelos
    let models = {};

    // Ler todos os arquivos na pasta de modelos
    fs.readdirSync(modelsDirectory).forEach(file => {
    // Ignorar arquivos que não são .js
    if (path.extname(file) !== '.js') return;

    // Obter o nome do modelo (nome do arquivo sem .js)
    let modelName = path.basename(file, '.js');

    // Carregar o modelo e armazená-lo no objeto models
    models[modelName] = require(path.join(modelsDirectory, file));
    });

    // Agora, models contém todos os seus modelos
    return models;


}

//interrogatório sintomatológico
let interrogatorio = getModels('../models/prontuario/is');
for (model in interrogatorio) {
    for (item in interrogatorio[model]){
        
    }
}

//antecedentes
let antecedentes = getModels('../models/prontuario/antecedentes');

