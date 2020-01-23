const express = require('express');
const usuariosRoute = require('./users');
const tarefas = require('./tarefa');
const router = express.Router();

router.use('/users', usuariosRoute);
router.use('/tarefas', tarefas);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
