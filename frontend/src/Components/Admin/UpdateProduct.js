import {
  Box,
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateProduct = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
    image: '',
  })
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/products/productDetails/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      let formData = new FormData()
      formData.append('image', data.image)
      formData.append('name', data.name)
      formData.append('description', data.description)
      formData.append('category', data.category)
      formData.append('quantity', data.quantity)
      formData.append('price', data.price)

      const res = await fetch(
        `http://localhost:5000/products/updateProduct/${params.id}`,
        {
          headers:{
            authorization: JSON.parse(localStorage.getItem('token'))
          },
          method: 'PUT',
          body: formData,
        },
      )
      if (res.ok) {
        setData({ name: '', image: '' })
        // navigate.replace('/')
        navigate('/productList')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const back = () => {
    navigate('/productList')
  }

  return (
    <Box
      width={500}
      height={600}
      boxShadow={2}
      p={2}
      color="blue"
      margin="100px 500px "
      textAlign="center"
    >
      <Fab onClick={back} size="small" color="secondary" sx={{ float: 'left' }}>
        <ArrowBackIcon />
      </Fab>

      <Typography variant="h4" marginBottom={1}>
        Update Product
      </Typography>
      <TextField
        fullWidth
        id="outlined-required"
        label="Product Name"
        name="name"
        value={data.name}
        onChange={handleChange('name')}
      />
      <br />
      <br />
      <TextField
        fullWidth
        id="outline-required"
        label="Description"
        name="name"
        value={data.description}
        onChange={handleChange('description')}
      />
      <br />
      <br />
      <TextField
        fullWidth
        id="outline-required"
        label="Category"
        name="name"
        value={data.category}
        onChange={handleChange('category')}
      />
      <br />
      <br />
      <TextField
        fullWidth
        id="outlined-number"
        label="Quantity"
        type="number"
        name="name"
        value={data.quantity}
        onChange={handleChange('quantity')}
      />
      <br />
      <br />
      <TextField
        fullWidth
        id="outlined-number"
        label="Price"
        type="number"
        name="name"
        value={data.price}
        onChange={handleChange('price')}
      />
      <br />
      <br />
      <TextField
        fullWidth
        type="file"
        name="image"
        onChange={handleChange('image')}
      />
      <br />
      <br />
      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Update Product
      </Button>
    </Box>
  )
}

export default UpdateProduct
