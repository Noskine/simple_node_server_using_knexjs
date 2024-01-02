import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { NewPostValidatorSchema } from './schemas/createNewPostValidatorSchema.js'
import { ValidatorErro } from '../../erros/validatiorError.js'

const ajv = new Ajv()
addFormats(ajv)

const validate = ajv.compile(NewPostValidatorSchema)

export function NewPostJSONValidator (req, res, next) {
  const json = req.body
  const valid = validate(json)

  if (!valid) {
    const err = new ValidatorErro('Validation Error: check the title and text fields')

    res.status(401).json({ Error: err.message })
  }

  next()
}
