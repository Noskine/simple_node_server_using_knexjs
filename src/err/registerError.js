export class RegisterErro extends Error {
  constructor (message, statusCode) {
    super()
    this.message = message
    this.code = statusCode
  }
}
