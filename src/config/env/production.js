class Config {
  constructor() {
    this.env = 'production';
    this.PORT = process.env.PORT || 3000;
    this.API_BASE = '/api';
    // eslint-disable-next-line max-len
    this.MONGODB_URL = 'mongodb://ufvbhhoydxoqosl5ln2a:6o7NGlDDdqLTOF458Ifj@b6gfpjix1jnhshe-mongodb.services.clever-cloud.com:27017/b6gfpjix1jnhshe';
  }
}

module.exports = new Config();
