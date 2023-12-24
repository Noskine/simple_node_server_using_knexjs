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
}

export default new UserService()
