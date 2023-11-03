const outras_informacoes = {
    lugares_habitados_pelo_paciente: [],
    banhos_de_rio_acude: Boolean,
    foi_picado_pelo_barbeiro: Boolean,
    exposicao_a_agentes_toxicos: [],
    reacoes_a_soro_medicamento: {
        sim: [
            Boolean,
            {
                quais: String,
                quando: String,
                tipo_duracao: String
            }
        ],
        contato_com_tuberculose: Boolean
    }
}
module.exports = outras_informacoes;