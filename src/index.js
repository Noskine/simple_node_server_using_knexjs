import { log } from './utils/pino/pino.js'
import { http } from './utils/pino/http.js'
import { app } from './utils/app.js'
import { config } from 'dotenv'
import { routes } from './routes.js'

config()

app.use(http)
app.use('/api', routes)

app.listen(
  process.env.PORT || 3031,
  () => {
    log.info('Server is running! ' + process.env.PORT || 3031)
  }
)
