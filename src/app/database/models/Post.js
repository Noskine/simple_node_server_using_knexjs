import knex from '../../../utils/knex.js'

class Post {
  create ({ title, text, userId }) {
    return knex('posts')
      .insert({ title, text, user_id: userId })
      .returning('*')
  }

  findAll () {
    return knex('posts')
      .select(['posts.id', 'posts.title', 'posts.text', 'users.username', 'users.email'])
      .innerJoin('users', 'posts.user_id', 'users.id')
  }
}

export default new Post()
