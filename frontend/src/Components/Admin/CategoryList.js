import { Box, Fab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'

const CategoryList = () => {
  const [category, setCategory] = useState([])

  const getCategoryData = async () => {
    let { data } = await axios.get(
      'http://localhost:5000/category/allCategories',
      {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    console.log(data)
    setCategory(data)
  }

  const deleteCategory = async (id) => {
    let result = await fetch(
      `http://localhost:5000/category/deleteCategory/${id}`,
      {
        method: 'Delete',
      },
    )
    result = await result.json()
    if (result) {
      alert('Category Deleted')
      getCategoryData()
    }
  }
  useEffect(() => {
    getCategoryData()
  }, [])

  return (
    <Box width={600} marginLeft={55}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category, index) => (
            <tr key={category._id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <Fab
                  //   onClick={() => deleteProduct(product._id)}
                  size="small"
                  color="error"
                  aria-label="delete"
                  onClick={() => deleteCategory(category._id)}
                >
                  <DeleteForeverIcon />
                </Fab>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default CategoryList
