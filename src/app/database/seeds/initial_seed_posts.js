/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  await knex('posts').del()
  await knex('posts').insert([
    {
      title: 'como eu aprendi a programar em golang',
      text: 'aiojhsdufbdi eh9f0qg8e978dyivswbdqefh[u0ey9q08f97cyuwqdsvbihp9wg879fyivxuoihpy9-w0q8tg97fiyvusbaihp9y0q8wgf79yiwvduasbDEQ79WSuw0uqwygd8qhdihasduq90dfiuwqfhu-yq079giuebdiqw80gd9vyiqwbid9u8gqw9vidbsaidugasdjwqasd89viasbjda0s8dg9ivyhwabsd8as9vdi',
      // Aqui deve ser colocado um usuario já existente para testar
      user_id: '1f16b8e4-b50d-4644-b293-7aaace86bf59'
    }
  ])
}
