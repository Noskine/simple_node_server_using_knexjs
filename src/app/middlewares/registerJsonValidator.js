import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { RegisterSchemaValidator } from './schemas/registerValidatorSchema.js'
import { ValidatorErro } from '../../err/validatiorError.js'

const ajv = new Ajv()
addFormats(ajv)

const validate = ajv.compile(RegisterSchemaValidator)

export function RegisterJSONValidator (req, res, next) {
  const json = req.body
  const valid = validate(json)

  if (!valid) {
    const err = new ValidatorErro('Validation Error: Check if there is an email, a username with at least 3 characters and a password with at least 10 characters')

    res.status(401).json({ Error: err.message })
  }

  next()
}
