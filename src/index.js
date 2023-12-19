import { log } from './utils/pino.js'
import { app } from './utils/app.js'

app.listen(
  3031,
  '0.0.0.0',
  () => {
    log.info('Server is running!')
  }
)
