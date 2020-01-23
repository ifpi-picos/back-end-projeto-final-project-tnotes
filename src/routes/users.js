const express = require('express');
const { validationResult } = require('express-validator');
// eslint-disable-next-line import/newline-after-import
const Login = require('../validator/login');
const login = new Login();
const UsersController = require('../controllers/users');
const UserValidacao = require('../validator/user');
const message = require('../utils/message.json');
const User = require('../models/user');
// eslint-disable-next-line import/newline-after-import
// eslint-disable-next-line import/order
const userValidacao = new UserValidacao();

const router = express.Router();

const usersController = new UsersController(User);

router.get('/', async (req, res) => {
  try {
    const users = await usersController.get();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  const { params: { id } } = req;
  try {
    const user = await usersController.getById(id);
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/', userValidacao.validacao(), async (req, res) => {
  const erro = validationResult(req);
  if (!erro.isEmpty()) {
    res.status(400).send({ erro: erro.array() });
  } else {
    try {
      await usersController.create(req.body);
      res.status(201).send(message.success.createUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

router.post('/login', login.validacao(), async (req, res) => {
  const erro = validationResult(req);
  if (!erro.isEmpty()) {
    res.status(400).send({ erro: erro.array() });
  } else {
    const { email, password } = req.body;
    try {
      const user = await usersController.login(email, password);
      const response = {
        msg: 'Usuario logado',
        usuario: user,
      };
      res.send(response).status(200);
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

router.put('/:id', async (req, res) => {
  try {
    await usersController.update(req.params.id, req.body);
    res.send(message.success.editUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await usersController.remove(req.params.id);
    res.send(message.success.removeUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
