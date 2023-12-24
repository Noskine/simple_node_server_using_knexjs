import { RegisterErro } from '../../err/registerError.js'
import userService from '../services/userService.js'

class UserController {
  async registerUser (req, res) {
    try {
      const json = req.body

      const dataRegister = await userService.registerService(json)

      res.status(201).json(dataRegister)
    } catch (error) {
      if (error instanceof RegisterErro) {
        res.status(error.code).json(error.message)
      }
    }
  }
}

export default new UserController()