const express = require('express')
const router = express.Router()
const Category = require('../models/CategoryModel')

//Admin-- create category
router.post('/createCategory', async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
    })
    await category.save()
    res.json(category)
  } catch (err) {
    console.log(err)
  }
})

//get all category
router.get('/allCategories', (req, res) => {
  Category.find()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(`Error:${err}`))
})

//delete category
router.delete('/deleteCategory/:id', async (req, res) => {
  const result = await Category.deleteOne({ _id: req.params.id })
  res.send(result)
})


module.exports = router
