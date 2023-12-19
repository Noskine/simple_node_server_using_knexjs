import { db } from '../utils/knex'
import { log } from '../utils/pino'

export async function createUser ({ username, email, passwordHash }) {
  try {
    return await db('users').insert({
      username, email, passwordHash
    })
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}

export async function userFindByPk ({ id }) {
  try {
    return await db('users').select().where(id)
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}

export async function userUpdate ({ id, username, email, passwordHash }) {
  try {
    return await db('users').select().where(id)
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}

export async function userDelete ({ id }) {
  try {
    return await db('users').delete().where(id)
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}
