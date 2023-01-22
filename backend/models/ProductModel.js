const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    // user: {type: mongoose.Schema.Types.ObjectId,
    //   ref:'user'}
    userId: {
      type: String,
    },
  },
  { timestamps: true },
)

const productModel = mongoose.model('Product', ProductSchema)
module.exports = productModel
