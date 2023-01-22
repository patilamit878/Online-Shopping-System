import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Fab,
  Paper,
  // Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Sidebar from './Sidebar'

const ProductList = () => {
  const [products, setProducts] = useState([])

  const navigate = useNavigate()
  const back = () => {
    navigate('/adminHome')
  }

  const getProductData = async () => {
    // const { data } = await axios.get(
    //   'http://localhost:5000/products/allProducts',
    // )
    // console.log(data)
    // setProducts(data)

    let result = await fetch("http://localhost:5000/products/allProducts",{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
    result = await result.json();
    setProducts(result);
  }

  useEffect(() => {
    getProductData()
  }, [])
  //  search product start
  function filterContent(products, key) {
    const result = products.filter((post) =>
      post.name.toLowerCase().includes(key) ||
      post.category.toLowerCase().includes(key) ||
      post.price.toLowerCase().includes(key)
    )
    setProducts(result)
  }

  const searchHandle = async (event) => {
    let key = event.target.value
    if (key) {
      let result = await fetch(
        `http://localhost:5000/products/searchProduct/${key}`,
      )
      result = await result.json()

      if (result) {
        filterContent(products, key)
      }
    } else {
      getProductData()
    }
  }
  // search product end

  //delete product start
  const deleteProduct = async (id) => {
    let data = await fetch(
      `http://localhost:5000/products/deleteProduct/${id}`,
      {
        method: 'Delete',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    )
    data = await data.json()
    if (data) {
      alert('Product Deleted successfully')
      getProductData()
    }
  }
  const addproduct = () => {
    navigate('/addProduct')
  }

  return (
    <>
      <Button onClick={back}>
        <ArrowBackIcon />
        Go Back
      </Button>
      {/* <Box>
        <Sidebar />
      </Box> */}
      <Box
        width={600}
        height={5}
        boxShadow={0.1}
        p={1}
        color="rebeccapurple"
        margin="5px 400px"
      >
        <TextField
          fullWidth
          id="outlined-required"
          label="Search for Product....."
          onChange={searchHandle}
        />
      </Box>
      <Box marginRight={10}>
        <Fab
          size="medium"
          onClick={addproduct}
          sx={{ float: 'right' }}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Box>
      {/* <Container> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price(₹)</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>₹{product.price}</td>
              <td>
                <img src={product.image} width="100" height="100" />
              </td>
              <td>
                {/* <Button size='small' variant="outlined" color="success">
                      <EditIcon />
                    </Button> */}
                <Fab size="small" color="secondary" aria-label="edit">
                  <Link to={`/update/${product._id}`}>
                    <EditIcon />
                  </Link>
                </Fab>
              </td>
              <td>
                <Fab
                  onClick={() => deleteProduct(product._id)}
                  size="small"
                  color="error"
                  aria-label="delete"
                >
                  <DeleteForeverIcon />
                </Fab>

                {/* <Button size="small" variant="outlined" color="error">
                      <DeleteForeverIcon />
                    </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* </Container> */}
    </>
  )
}

export default ProductList
