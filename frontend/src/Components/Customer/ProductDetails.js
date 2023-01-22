import { Button, Fab, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { addToCart } from '../../redux/features/cartSlice'
import { useDispatch } from 'react-redux'


const ProductDetails = () => {
  const dispatch = useDispatch();

  const [item,setItem] = useState('');
  const [count, setCount] = useState(1);


  const params = useParams()
  const navigate = useNavigate()

  const back = () => {
    navigate('/homeScreen')
  }
  useEffect(() => {
    getProductData()
  }, [])
  const getProductData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/products/productDetails/${params.id}`,
    )
    setItem(data);
  }
  return (
    <>
      <Button onClick={back} className="backbtn">
        <ArrowBackIcon />
        Go Back
      </Button>
      <div className="details">
        <div className="big-img">
          <img src={item.image} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{item.name}</h2>
            <span>M.R.P : ₹ {item.price}/-</span>
          </div>

          <p>{item.description}</p>
          <p>content</p>
          <div>
            <Fab color="secondary" size="small" onClick={()=>setCount(Math.max(count -1,0))}>
              -
            </Fab>
            <input className="cart-input" readOnly />
            <Fab color="secondary" size="small" onClick={()=>setCount(count+1)}>
              +
            </Fab>
          </div>

          <button className="cart" onClick={()=>dispatch(addToCart({item:{...item,count}}))}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}
export default ProductDetails
