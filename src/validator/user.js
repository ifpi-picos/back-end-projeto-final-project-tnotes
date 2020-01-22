const { check } = require('express-validator');

class User {
  // eslint-disable-next-line class-methods-use-this
  validacao() {
    return [
      check('name').notEmpty().withMessage('Campo obrigatório'),
      check('email').notEmpty().withMessage('Campo obrigatorio'),
      check('password').notEmpty().withMessage('Campo obrigatório'),
    ];
  }
}

// eslint-disable-next-line eol-last
module.exports = User;