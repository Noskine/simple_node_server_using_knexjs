import { ProfileDoesNotExistError } from '../../err/profileDoesNotExistError.js'
import { RegisterErro } from '../../err/registerError.js'

import User from '../database/models/User.js'
import { cryptHash } from '../../utils/bcrypt.js'

class UserService {
  async registerService ({ username, email, password }) {
    const passwordHash = await cryptHash(password)

    const response = await User.create({
      username, email, passwordHash
    })

    if (response instanceof Error) {
      throw new RegisterErro('Error in registration', 500)
    }

    return response
  }

  async getProfileService ({ id }) {
    const res = await User.findUnique(id)

    if (res.length === 0) {
      throw new ProfileDoesNotExistError('There is no user with this id')
    }

    return res
  }

  async updateProfile ({ id, username, email }) {
    const response = await User.update({
      id,
      username,
      email
    })

    if (response instanceof Error) {
      throw new RegisterErro('Internal server error', 500)
    }

    return response
  }
}

export default new UserService()
