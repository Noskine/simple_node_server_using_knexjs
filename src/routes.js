import { Router } from 'express'

import { CreateUserController } from './app/controllers/user.controller.js'

const routes = Router()

routes.post('/user', CreateUserController)

export { routes }
