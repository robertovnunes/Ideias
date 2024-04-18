const router = require('express').Router();

const Prontuario = require('../models/prontuarios');

router.get('/', async (req, res) => {
  try {
    const prontuarios = await Prontuario.find();
    res.json(prontuarios);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const prontuario = await Prontuario.findById(req.params.id);
    res.json(prontuario);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post('/', async (req, res) => {
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
        await Prontuario.create(prontuario);
        res.status(201).json({ message: 'Prontuario criado com sucesso', prontuario });
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
        await Prontuario.findByIdAndUpdate(req.params.id, prontuario);
        res.status(200).json({ message: 'Prontuario atualizado com sucesso', prontuario });
    } catch (error) {
        res.status(400).json({ message: error });
    }

});

router.delete('/:id', async (req, res) => {
    try {
        await Prontuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Prontuario deletado com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
});
module.exports = router;