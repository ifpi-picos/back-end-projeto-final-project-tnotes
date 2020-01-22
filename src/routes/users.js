const express = require('express');
const UsersController = require('../controllers/users');
const User = require('../models/user');
const message = require('../utils/message.json');
const UserValidacao = require('../validator/user');
const { validationResult } = require('express-validator');
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
  const {
    params: {
      id
    },
  } = req;
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
    res.status(400).send({
      erro: erro.array()
    });
  } else {

    try {
      await usersController.create(req.body);
      res.status(201).send(message.success.createUser);
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
