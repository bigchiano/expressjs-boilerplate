const bcrypt = require('bcryptjs')
const BaseRepository = require('./BaseRepository')
const User = require('../../Models/UserModel')
// const { sendWelcomeEmail } = require('../emails/mailer');

class UserRepository {
  async create(data) {
    const userModel = new BaseRepository(User)
    const exists = await userModel.find({ email: data.email })
    if (exists) {
      return res
        .status(400)
        .send({ success: false, message: 'User with email already exits!!' })
    }

    const user = await userModel.save(data)
    const token = await user.generateAuthToken()

    // send verification email
    // sendWelcomeEmail(user.email, user.name).catch(error => {
    //   res.status(500).send(error.message);
    // });

    return { user, token }
  }

  async login(data) {
    const userModel = new BaseRepository(User)
    const user = await userModel.find({ email: data.email })

    if (!user) {
      throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(data.password, user.password)
    if (!isMatch) {
      throw new Error('Unable to login')
    }

    const token = await user.generateAuthToken()
    return { user, token }
  }
}

module.exports = UserRepository