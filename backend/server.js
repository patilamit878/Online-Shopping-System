const express = require('express')
const connectDB = require('./config/config')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

//config
dotenv.config()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//call database
connectDB()



app.use('/users', require('./routes/UserRouter'))
app.use('/products', require('./routes/ProductRouter'))
app.use('/category', require('./routes/CategoryRouter'))

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
