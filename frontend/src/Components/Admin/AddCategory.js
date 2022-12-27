import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryList from './CategoryList'

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCategory({
      ...category,
      [name]: value,
    })
  }

  const addCategory = () => {
    if (category) {
      alert('Category Added')
      axios
        .post('http://localhost:5000/category/createCategory', category)
        .then((res) => console.log(res))
        navigate('/addCategory')
    } else {
      alert('Invalid input')
    }
  }

  return (
    <>
      <Box
        width={500}
        height={200}
        boxShadow={2}
        p={2}
        color="blue"
        margin="100px 500px "
        textAlign="center"
      >
        <div>
          <Typography variant="h4" marginBottom={1}>
            Add Category
          </Typography>
          <TextField
            fullWidth
            id="outlined-required"
            label="Category"
            name="name"
            value={category.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" fullWidth onClick={addCategory}>
            Add Category
          </Button>
        </div>
      </Box>
      <CategoryList />
    </>
  )
}

export default AddCategory
