import { hashSync, genSaltSync } from 'bcrypt'
import { config } from 'dotenv'

config()

export function cryptHash (pass) {
  const salt = genSaltSync(10)

  return hashSync(pass, salt)
}
