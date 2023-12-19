import { log } from '../../utils/pino'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  knex.schema.createTable('', (table) => {
    table.uuid('id').notNullable().primary()
    table.string('username', 80).notNullable()
    table.string('email', 80).notNullable().unique()
    table.string('password_hash').notNullable()
  }).then(
    log.info('Running migrations... Create Table "USER"!')
  ).catch(
    log.warn('Error when creating table USER.')
  )
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  knex.schema.dropTable('users').then(
    log.info('DropTable USER')
  )
}
