import { RegisterErro } from '../../erros/registerError.js'

import Post from '../database/models/Post.js'

class PostService {
  async createService ({ userId, title, text }) {
    const response = await Post.create({ title, text, userId })

    if (response instanceof Error) {
      throw new RegisterErro('Error when registering a post', 400)
    }

    return response
  }

  async getAll () {
    const response = await Post.findAll()
    if (response instanceof Error) {
      throw new RegisterErro('internal server err', 500)
    }

    return response
  }

  async delete ({ id }) {
    const response = await Post.delete({ id })
    if (response instanceof Error) {
      throw new RegisterErro('internal server err', 500)
    }
  }
}

export default new PostService()
