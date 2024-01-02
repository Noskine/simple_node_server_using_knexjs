import knex from '../../../utils/knex.js'

class Post {
  create ({ title, text, userId }) {
    return knex('posts')
      .insert({ title, text, user_id: userId })
      .returning('*')
  }

  findAll () {
    return knex('posts')
      .select()
      .innerJoin('users', 'user.id', 'posts.user_id')
  }
}

export default new Post()
