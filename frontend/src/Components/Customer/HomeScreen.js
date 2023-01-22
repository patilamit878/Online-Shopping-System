import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Carousel from 'react-bootstrap/Carousel'
import { Link, useNavigate } from 'react-router-dom'
import CartList from './CartList'
import NavBar from '../NavBar/NavBar'

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState("ASC")

  const sorting = (col)=> {
    if(order === "ASC"){
      const sorted = [...products].sort((a,b) => 
      a[col] > b[col] ? 1 : -1
      );
      setProducts(sorted)
      setOrder("DEC")
    }
    if(order === "DEC"){
      const sorted = [...products].sort((a,b) => 
      a[col] < b[col] ? 1 : -1
      );
      setProducts(sorted)
      setOrder("ASC")
    }
  }

  const getProductsData = async () => {
    const { data } = await axios.get(
      'http://localhost:5000/products/allProducts',
      {
        headers:{
          authorization:JSON.parse(localStorage.getItem('token'))
        }
      }
    )
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    getProductsData()
  }, [])

  function filterContent(products, key) {
    const result = products.filter(
      (post) =>
        post.name.toLowerCase().includes(key) ||
        post.category.toLowerCase().includes(key) ||
        post.price.toLowerCase().includes(key),
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
      getProductsData()
    }
  }


  return (
    <>
      <Box
        width={600}
        height={5}
        boxShadow={0.1}
        p={1}
        margin="5px 400px"
        color="rebeccapurple"
        // margin="100px 500px "
      >
        <TextField
          fullWidth
          id="outlined-required"
          label="Search for Product....."
          onChange={searchHandle}
        />
      </Box>
      <Box
       width="100%"
        height={2}>
          Sort By 
          <Button onClick={() => sorting(products.name)}>Name</Button>
          <Button onClick={() => sorting(products.price)}>Price</Button>
        </Box>
      <div>
        
        <Grid container spacing={4} marginTop={5} marginLeft={1}>
          {products.map((product, key) => (
            <Grid item xs={3} key={product._id}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  alt="product"
                  height="200"
                  image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography
                    className="productDesc"
                    variant="body2"
                    color="text.secondary"
                  >
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    M.R.P : ₹ {product.price}/-
                  </Typography>
                </CardContent>
                <CardActions>
                 

                  <Link
                    className="details"
                    to={`/productDetails/${product._id}`}
                  >
                    <VisibilityIcon />
                    View Details
                  </Link>
                  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      
      </div>
    
    </>
  )
}

export default HomeScreen
