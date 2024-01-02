import postService from '../services/postService.js'

class PostController {
  createPosts (req, res) {
    const { title, text } = req.body
    const userId = req.params.id

    postService.createService({ userId, title, text })
      .then(response => {
        res.status(201).json({
          return: response
        })
      })
      .catch(err => {
        res.status(400).json({ Erro: err.message })
      })
  }

  getPosts (req, res) {
    postService.getAll()
      .then(response => {
        res.status(200).json({
          return: response
        })
      })
      .catch(err => {
        res.status(err.code).json({ Erro: err.message })
      })
  }

  delete (req, res) {
    const id = req.params.id

    postService.delete({ id })
      .catch(err => {
        res.status(err.code).json({ Erro: err.message })
      })
  }
}

export default new PostController()
