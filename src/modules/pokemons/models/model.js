export default {
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  externalId: Number,
  image: String,
  types: [ String ],
  baseExperience: Number,
  height: Number,
  weight: Number
}
