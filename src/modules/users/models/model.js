export default {
  name: {
    type: String,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    index: true
  },
  forgotPassword: {
    code: String,
    expiresIn: Date
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  }
}
