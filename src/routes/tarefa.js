const express = require('express');
const TarefaController = require('../controllers/tarefa');
const Tarefa = require('../models/tarefa');
const router = express.Router();
const tarefaController = new TarefaController(Tarefa);

router.post('/', async (req, res) => {
  try {
    await tarefaController.create(req.body);
    res.status(200).send('deu certo');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const tarefas = await tarefaController.get();
    res.status(200).send(tarefas);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;