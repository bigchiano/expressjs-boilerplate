const UserRepository = require('../repositories/sequelize/UserRepository')
const response = require('../utils/response')
const User = require('../models').user

class UserContoller {
  async create(req, res) {
    try {
      const result = await UserRepository.create(req.body)
      return res.status(200).send(response('User created successfully', result))
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }

  async findAll(req, res) {
    try {
      const userModel = new BaseRepository(User)
      const result = await userModel.findAll({})
      res.status(200).send(response('Fechted users successfully', result))
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }

  async findOne(req, res) {
    try {
      const userModel = new BaseRepository(User)
      const result = await userModel.findOne(req.query)
      res.status(200).send(response('Fechted users successfully', result))
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }

  async update(req, res) {
    const result = await UserRepository.update(req.query.userId, req.body)
    res.status(200).send(response('User updated', result))
  }

  async delete(req, res) {
    const result = await UserRepository.delete(req.params.userId)
    res.status(200).send(response('User deleted', result))
  }
}

export default new UserContoller()
