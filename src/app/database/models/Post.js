import knex from '../../../utils/knex.js'

class Post {
  create () {
    knex('posts')
      .insert({})
      .into()
  }
}

export default new Post()
