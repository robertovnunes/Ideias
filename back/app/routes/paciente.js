const router = require('express').Router();

const Paciente = require('../models/paciente');

router.get('/', async (req, res) => {
  try {
    const prontuarios = Paciente.find;
    res.json(prontuarios);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const prontuario = await Paciente.findById(req.params.id);
    res.json(prontuario);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post('/', async (req, res) => {
    const {nome, nascimento, sexo, cns, endereco, prontuario } = req.body;
    const paciente = {
        nome,
        nascimento,
        sexo,
        cns,
        endereco,
        prontuario
    };
    try {
        await Paciente.create(paciente);
        res.status(201).json({ message: 'Paciente criado com sucesso', paciente });
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

router.patch('/:id', async (req, res) => {
    const { paciente, data, medico, exames, prescricao, observacoes } = req.body;
    const prontuario = {
        paciente,
        data,
        medico,
        exames,
        prescricao,
        observacoes
    };
    try {
        await Paciente.findByIdAndUpdate(req.params.id, prontuario);
        res.status(200).json({ message: 'Paciente atualizado com sucesso', prontuario });
    } catch (error) {
        res.status(400).json({ message: error });
    }

});

router.delete('/:id', async (req, res) => {
    try {
        await Paciente.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Paciente deletado com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
});
module.exports = router;