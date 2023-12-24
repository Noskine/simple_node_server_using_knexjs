export const RegisterSchemaValidator = {
  type: 'object',
  properties: {
    username: { type: 'string', minLength: 3 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 8 }
  },
  required: ['username', 'email', 'password']
}
