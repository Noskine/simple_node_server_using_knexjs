import { cryptHash } from '../../utils/bcrypt.js'
import { createUser } from '../entities/User.js'

class UserUseCase {
  async create (data) {
    const passwodHash = await cryptHash(data.password)
    createUser({
      username: data.username,
      email: data.email,
      passwordHash: passwodHash
    }).then((response) => {
      return response
    })
  }
}

export default new UserUseCase()
