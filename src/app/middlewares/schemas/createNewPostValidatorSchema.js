export const NewPostValidatorSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3 },
    text: { type: 'string' }
  },
  required: ['title', 'text']
}
