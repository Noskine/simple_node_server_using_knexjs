import path from 'node:path'

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export const knexFile = {
  development: {
    client: 'postgresql',
    connection: {
      database: '',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, 'src', 'database', 'migrations')
    }
  }

}
