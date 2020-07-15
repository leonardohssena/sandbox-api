import { model, Schema } from 'mongoose'

import MODEL from './model'

const name = 'enterprises'

const schema = new Schema(MODEL, {
  timestamps: true
})

schema.pre('save', async function (next) {
  this.users = [ {
    user: this.adminUser,
    functions: [ 'owner', 'admin', 'employee' ]
  } ]

  next()
})

const SCHEMA = model(name, schema, name)

export default SCHEMA
