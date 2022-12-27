import { Box, Button, Fab, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

import { useTheme } from '@mui/material/styles'
import Sidebar from './Sidebar'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [userId, setUserId] = useState('')

  const navigate = useNavigate()

  const onChangeFile = (e) => {
    setImage(e.target.files[0])
  }
  // const userId = JSON.parse(localStorage.getItem("user"))._id;
  const auth = localStorage.getItem('user')

  const addProduct = async () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('quantity', quantity)
    formData.append('price', price)
    formData.append('image', image)
    formData.append('userId', userId)

    axios
      .post('http://localhost:5000/products/addProduct', formData, {
        headers: {
          'Content-Type': 'application/json',
          authorization: JSON.parse(localStorage.getItem('token')),
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    alert('product Added Successfully')
    navigate('/productList')
  }

  const productlist = () => {
    navigate('/productList')
  }

  return (
    <>
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <Box
          width={500}
          height={700}
          boxShadow={2}
          p={2}
          color="blue"
          margin="100px 300px "
          textAlign="center"
        >
          <Fab
            size="small"
            onClick={productlist}
            sx={{ float: 'right' }}
            color="primary"
            aria-label="add"
          >
            <FormatListBulletedIcon />
          </Fab>
          <div>
            <Typography variant="h4" marginBottom={1}>
              Add Product
            </Typography>
            <TextField
              fullWidth
              id="outlined-required"
              label="Product Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="outline-required"
              label="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <br />
            <TextField
              fullWidth
              id="outline-required"
              label="Category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />

            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-number"
              label="Quantity"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-number"
              label="Price"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
            <TextField
              fullWidth
              type="file"
              filename="image"
              onChange={onChangeFile}
            />
            <br />
            {JSON.parse(auth)._id}
            <br />
            <TextField
              fullWidth
              id="outlined-number"
              label={JSON.parse(auth)._id}
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <br />
            <br />
            <Button variant="contained" fullWidth onClick={addProduct}>
              Add Product
            </Button>
          </div>
        </Box>
      </div>
    </>
  )
}

export default AddProduct
