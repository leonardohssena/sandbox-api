import { model, Schema } from 'mongoose'
import { compareSync, genSalt, hash } from 'bcryptjs'

import MODEL from './model'

const name = 'users'

const schema = new Schema(MODEL, {
  timestamps: true
})

schema.pre('save', async function (next) {
  const passwordHasModified = this.isModified('password')
  if (!passwordHasModified) {
    next()
    return
  }
  const salt = await genSalt(10)
  const hashPassword = await hash(this.password, salt)

  this.password = hashPassword
  next()
})

schema.methods.comparePassword = function (candidatePassword) {
  return compareSync(candidatePassword, this.password)
}

const SCHEMA = model(name, schema, name)

export default SCHEMA
