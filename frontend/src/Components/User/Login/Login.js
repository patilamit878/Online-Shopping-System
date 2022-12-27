import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/productList')
    }
  }, [])

  const login = async () => {
    let result = await fetch('http://localhost:5000/users/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    console.warn(result)
    // axios
    //   .post('http://localhost:5000/users/login', user)
    //   .then((res) => alert(res.data.message))
    if (result) {
      localStorage.setItem('user', JSON.stringify(result.user))
      localStorage.setItem('token', JSON.stringify(result.token))
      if(result.user.role==="ADMIN"){
        navigate('/adminHome')
      }else if(result.user.role==="CUSTOMER"){
        navigate('/homeScreen')
      }else{
        alert("Please Enter Valid data");
      }
      
    } else {
      alert('Please enter correct details')
    }
  }

  return (
    <>
      <Box
        width={500}
        height={400}
        boxShadow={1}
        p={2}
        color="blue"
        margin="100px 800px "
        textAlign="center"
      >
        <div>
          <Typography variant="h4" marginBottom={1}>
            Login
          </Typography>
          <TextField
            fullWidth
            type="email"
            id="outline-required"
            label="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            type="password"
            id="outlined-password-required"
            label="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" fullWidth onClick={login}>
            Login
          </Button>
          <br />
          <br />
          <Button variant="contained" fullWidth href="/signup">
            Create New Account
          </Button>
        </div>
      </Box>
    </>
  )
}

export default Login
