import userUsecase from '../usecases/user.usecase.js'

export const CreateUserController = (req, res) => {
  const { username, email, password } = req.body

  const response = userUsecase.create({
    username, email, password
  })

  res.json(response)
}
