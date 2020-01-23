class Tarefa {
  constructor(tarefa) {
    this.Ta = tarefa;
  }

  async create(tarefa) {
    try {
      const user = await new this.Ta(tarefa);
      user.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async get() {
    try {
      // consulta usuário no banco de dados
      return await this.Ta.find({});
    } catch (err) {
      throw new Error(err);
    }
  }
}

// eslint-disable-next-line eol-last
module.exports = Tarefa;