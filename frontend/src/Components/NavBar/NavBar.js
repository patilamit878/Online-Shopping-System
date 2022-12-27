import { CatchingPokemon } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import axios from 'axios'

const NavBar = (props) => {
  const auth = localStorage.getItem('user')

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigate = useNavigate()
  const productList = () => {
    navigate('/homeScreen')
  }

  const contact = () => {
    navigate('/contactUs')
  }

  const about = () => {
    navigate('/aboutUs')
  }

  const login = () => {
    navigate('/')
  }

  const cart = () => {
    navigate('/cartList')
  }

  const profile = () => {
    navigate('/userProfile')
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
    // axios.post("http://localhost:5000/users/logout")
    // .then((res)=> alert("User Logout Successfully"))
  }
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          edge="start"
          aria-label="logo"
          href="/"
        >
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => props.handleShow(false)}>
          Shopping App
        </Typography>
        
        {
          auth ? <Stack direction={'row'} spacing={2}>
          <Button color="inherit" onClick={productList}>
            Products
          </Button>
          <Button color="inherit" onClick={contact}>
            Contact Us
          </Button>
          <Button color="inherit" onClick={about}>
            About
          </Button>
          {/* <IconButton color="inherit" onClick={() => props.handleShow(true)}> */}
          <IconButton color="inherit" onClick={cart}>
            <ShoppingCartIcon />
            <sup>{props.count}</sup>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt="Travis Howard" src={JSON.parse(auth).avatar} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={profile}>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Stack>
        :
        <Button color="inherit" onClick={login}>
        Login
      </Button>
        }
      
      </Toolbar>
      
    </AppBar>
  )
}

export default NavBar
