const mongoose = require('mongoose');
const Config = require('./config');


mongoose.Promise = Promise;

const mongodbUrl = Config.MONGODB_URL;
const configuracoes = {
  useNewUrlParser: true,
  useFindAndModify: false,
};

const connect = () => mongoose.connect(mongodbUrl, configuracoes);


module.exports = connect;
