import { Types } from 'mongoose'

import { unFormat } from '../../../support/utils'

export default {
  name: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true,
    set: unFormat
  },
  adminUser: {
    type: Types.ObjectId,
    ref: 'Users',
    required: true
  },
  users: [ {
    user: {
      type: Types.ObjectId,
      ref: 'Users'
    },
    functions: [ {
      type: String,
      enum: [ 'owner', 'admin', 'employee' ]
    } ]
  } ]
}
