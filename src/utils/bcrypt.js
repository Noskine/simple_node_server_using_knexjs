import { hash } from 'bcrypt'
import { config } from 'dotenv'

config()

export async function cryptHash (pass) {
  return await hash(pass, 10)
}
