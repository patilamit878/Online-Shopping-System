const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const url = 'mongodb://localhost:27017/OnlineShoppingSystem'
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`Database connected to the server`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
