import { RegisterErro } from '../../err/registerError.js'
import { cryptHash } from '../../utils/bcrypt.js'
import { User } from '../database/models/User.js'

const user = new User()

class UserService {
  async registerService ({ username, email, password }) {
    try {
      const passwordHash = await cryptHash(password)

      console.log(passwordHash)

      return await user.create({
        username, email, passwordHash
      })
    } catch (error) {
      throw new RegisterErro('Error in registration', 500)
    }
  }
}

export default new UserService()
