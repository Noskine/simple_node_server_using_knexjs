import { Router } from 'express'
import { RegisterJSONValidator } from './app/middlewares/registerJsonValidator.js'
import UserController from './app/controllers/userController.js'

const routes = Router()

routes.post('/user', RegisterJSONValidator)
routes.post('/user', UserController.registerUser)

export { routes }
