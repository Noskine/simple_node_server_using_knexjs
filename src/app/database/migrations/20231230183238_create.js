/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.schema.alterTable('posts', (table) => {
    table.uuid('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')
  })
}

/**
       * @param { import("knex").Knex } knex
       * @returns { Promise<void> }
       */
export const down = async (knex) => {
  await knex.schema.alterTable('posts', (table) => {
    table.dropColumn('user_id')
  })
}
