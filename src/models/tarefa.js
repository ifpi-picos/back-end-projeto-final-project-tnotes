const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tarefa: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});

const Tarefa = mongoose.model('Tarefa', schema);

// eslint-disable-next-line eol-last
module.exports = Tarefa;