import { Router } from 'express'
import { RegisterJSONValidator } from './app/middlewares/Validators.js'
import userController from './app/controllers/userController.js'

const routes = Router()

routes.post('/user', RegisterJSONValidator)
routes.post('/user', userController.registerUser)

routes.get('/profile/:id', userController.getProfile)

routes.put('/profile/:id', userController.updateProfile)

routes.delete('/profile/:id', userController.delete)

export { routes }
