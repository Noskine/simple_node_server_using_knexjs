import { log } from './utils/pino.js'
import { app } from './utils/app.js'
import { cryptHash } from './utils/bcrypt.js'

console.log(cryptHash('125527'))

app.listen(
  3031,
  '0.0.0.0',
  () => {
    log.info('Server is running!')
  }
)
