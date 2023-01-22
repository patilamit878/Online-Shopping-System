import {
  Box,
  Button,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import { Password } from '@mui/icons-material'
import axios from 'axios'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [role, setRole] = useState('')

  const navigate = useNavigate()

  const userlist = () => {
    navigate('/userList')
  }
  const changeFile = (e) => {
    setAvatar(e.target.files[0])
  }

  const adduser = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('number', number)
    formData.append('password', password)
    formData.append('avatar', avatar)
    formData.append('role', role)

    axios
      .post('http://localhost:5000/users/admin/addUser', formData)
      .then((res) => console.log(res))
    alert('User Added Successfully')
    navigate('/userList')
  }
  return (
    <>
    <div class="d-flex" id="wrapper">
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
          onClick={userlist}
          sx={{ float: 'right' }}
          color="primary"
          aria-label="add"
        >
          <FormatListBulletedIcon />
        </Fab>
        <div>
          <Typography variant="h4" marginBottom={1}>
            Add User
          </Typography>
          <TextField
            fullWidth
            id="outlined-required"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="outlined-required"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            type="email"
            id="outline-required"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="outlined-number"
            label="Mob No."
            type="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="outlined-required"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <TextField fullWidth type="file" onChange={changeFile} />
          <br />
          <br />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="CUSTOMER"
                control={<Radio />}
                label="Customer"
                onChange={(e) => setRole(e.target.value)}
              />
              <FormControlLabel
                value="ADMIN"
                control={<Radio />}
                label="Admin"
                onChange={(e) => setRole(e.target.value)}
              />
              <FormControlLabel
                value="STOREMGR"
                control={<Radio />}
                label="StoreMgr"
                onChange={(e) => setRole(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <br />
          <br />
          <Button variant="contained" fullWidth onClick={adduser}>
            Add User
          </Button>
        </div>
      </Box>
      </div>
    </>
  )
}

export default AddUser
