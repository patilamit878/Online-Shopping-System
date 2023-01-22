const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
//   user: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'User',
//     required: true,
//   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const categoryModel = mongoose.model('categories', CategorySchema)
module.exports = categoryModel
