import { ProfileDoesNotExistError } from '../../err/profileDoesNotExistError.js'
import { RegisterErro } from '../../err/registerError.js'
import { cryptHash } from '../../utils/bcrypt.js'
import User from '../database/models/User.js'

class UserService {
  async registerService ({ username, email, password }) {
    try {
      const passwordHash = await cryptHash(password)

      return await User.create({
        username, email, passwordHash
      })
    } catch (error) {
      throw new RegisterErro('Error in registration', 500)
    }
  }

  async getProfileService ({ id }) {
    try {
      const res = await User.findUnique(id)

      if (res == null || undefined) {
        throw new Error()
      }

      return res
    } catch (error) {
      return new ProfileDoesNotExistError('profile data not found')
    }
  }
}

export default new UserService()
