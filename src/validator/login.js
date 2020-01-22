const { check } = require('express-validator');

class login {
  // eslint-disable-next-line class-methods-use-this
  validacao() {
    return [
      check('email').notEmpty().withMessage('Campo obrigatorio'),
      check('password').notEmpty().withMessage('Campo obrigatório'),
    ];
  }
}

// eslint-disable-next-line eol-last
module.exports = login;