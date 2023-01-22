const express = require('express')
const router = express.Router()
const Product = require('../models/ProductModel')
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')
const authenticate = require('../middleware/authenticate')
const User = require('../models/UserModel')

//create Product
router.post(
  '/addProduct',
  upload.single('image'),
  authenticate,
  async (req, res) => {
    try {
      //upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path)

      //create new user
      let product = new Product({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price,
        image: result.secure_url,
        cloudinary_id: result.public_id,
      })
      await product.save()
      res.json(product)
    } catch (err) {
      console.log(err)
    }
  },
)


//get all products
router.get('/allProducts', authenticate, (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error:${err}`))
})

//search product
router.get('/searchProduct/:key', async (req, res) => {
  Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error:${err}`))
})

//delete product
router.delete('/deleteProduct/:id', authenticate, async (req, res) => {
  try {
    // Find product by id
    let product = await Product.findById(req.params.id)
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id)
    // Delete product from db
    await product.remove()
    res.json(product)
  } catch (err) {
    console.log(err)
  }
})

//update product
router.put('/updateProduct/:id', upload.single('image'), authenticate, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id)
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id)
    // Upload image to cloudinary
    let result
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path)
    }
    const data = {
      name: req.body.name || product.name,
      description: req.body.description || product.description,
      category: req.body.category || product.category,
      quantity: req.body.quantity || product.quantity,
      price: req.body.price || product.price,
      image: result?.secure_url || product.image,
      cloudinary_id: result?.public_id || product.cloudinary_id,
    }
    product = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
    })
    res.json(product)
  } catch (err) {
    console.log(err)
  }
})

//get single product details
router.get('/productDetails/:id', async (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error:${err}`))
})

module.exports = router
