const bcrypt = require('bcryptjs');

class UsersController {
  constructor(User) {
    this.User = User;
  }

  async get() {
    try {
      // consulta usuário no banco de dados
      return await this.User.find({}, '_id name email');
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      // consulta usuário no banco de dados
      return await this.User.findById(id);
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(userDTO) {
    try {
      // salva userDTO no banco de dados
      const user = await new this.User(userDTO);
      user.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async login(emails, password) {
    try {
      const user = await this.User.findOne({ email: emails });
      if (!user || !(bcrypt.compareSync(password, user.password))) {
        throw new Error('Senha ou email invalido!');
      }
      return {
        id: user._id,
        name: user.name,
        email: user.email,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, userDTO) {
    try {
      // alterar usuario com dados do userDTO no banco de dados
      await this.User.findOneAndUpdate({ _id: id }, userDTO);
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id) {
    try {
      // remove usuario do id
      await this.User.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UsersController;
