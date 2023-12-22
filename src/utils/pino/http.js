import pino from 'pino-http'

export const http = pino({
  transport: {
    target: 'pino-http-print',
    options: {
      colorize: true,
      all: true,
      translateTime: true
    }
  }
})
