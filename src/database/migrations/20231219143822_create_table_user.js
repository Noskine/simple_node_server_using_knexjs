/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').notNullable().primary().defaultTo(knex.fn.uuid())
    table.string('username', 80).notNullable()
    table.string('email', 80).notNullable().unique()
    table.string('password_hash').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.schema.dropTable('users')
}
