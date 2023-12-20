// Update with your config settings.

import { config } from 'dotenv'
config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'pg',
    connection: {
      database: 'server-blog-api',
      user: 'root',
      password: 'root'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/migrations'
    },
    seeds: {
      directory: 'src/database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/migrations'
    },
    seeds: {
      directory: 'src/database/seeds'
    }
  }

}
