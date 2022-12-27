const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: [validator.isEmail, 'Please Enter valid email'],
    },
    number: {
      type: Number,
      required: true,
      select: false,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },

    role: {
      type: String,
      default: 'CUSTOMER',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true },
)

//bcrypt password
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

//compare password
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)
