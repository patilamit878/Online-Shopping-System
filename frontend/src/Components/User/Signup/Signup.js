import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')

  const onChangeFile = (e) => {
    setAvatar(e.target.files[0])
  }

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/homeScreen')
    }
  })

  const register = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('number', number)
    formData.append('password', password)
    formData.append('avatar', avatar)

    let data = await axios
      .post('http://localhost:5000/users/register', formData)
      .then((res) => console.log(res))
    
    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('token', JSON.stringify(data.token))
    alert('User Register Successfully')
    navigate('/homeScreen')
  

    // let result = await fetch('http://localhost:5000/users/register', {
    //   method: 'post',
    //   body: JSON.stringify({ firstName,lastName,email,number,password }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // result = await result.json()
    // console.warn(result)
    // if (result) {
    //   localStorage.setItem('user', JSON.stringify(result.user))
    //   localStorage.setItem('token', JSON.stringify(result.auth))
    //   // Cookies.set('user',user)
    //   // Cookies.set('token',result.token)
    //   navigate('/homeScreen')
    // } else {
    //   alert('Please enter correct details')
    // }
  }

  return (
    <Box
      width={500}
      height={700}
      boxShadow={5}
      p={2}
      color="blue"
      margin="100px 800px "
      textAlign="center"
    >
      <div>
        <Typography variant="h4" marginBottom={1}>
          Signup
        </Typography>
        <TextField
          fullWidth
          // id="outlined-required"
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          // id="outlined-required"
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          type="email"
          // id="outlined-required"
          label="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          // id="outlined-number"
          label="Number"
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          type="password"
          // id="outlined-required"
          label="Enter password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          type="file"
          filename="avatar"
          onChange={onChangeFile}
        />
        <br />
        <br />

        <Button variant="contained" fullWidth onClick={register}>
          Signup
        </Button>
        <br />
        <br />
        <Button variant="contained" fullWidth href="/">
          Already Account? Login here
        </Button>
      </div>
    </Box>
  )
}

export default Signup
