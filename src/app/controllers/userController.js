import userService from '../services/userService.js'

class UserController {
  registerUser (req, res) {
    const json = req.body

    userService.registerService(json)
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        res.status(err.code).json({ err: err.message })
      })
  }

  getProfile (req, res) {
    const id = req.params.id

    userService.getProfileService({ id })
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(err.code).json({ err: err.message })
      })
  }
}

export default new UserController()
