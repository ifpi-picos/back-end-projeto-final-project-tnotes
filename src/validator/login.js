/* eslint-disable class-methods-use-this */
const { check } = require('express-validator');

class login {
  validacao() {
    return [
      check('email').notEmpty().withMessage('Campo obrigatorio'),
      check('email').isEmail().withMessage('Tem que email valido'),
      check('password').notEmpty().withMessage('Campo obrigatório'),
    ];
  }
}

module.exports = login;
