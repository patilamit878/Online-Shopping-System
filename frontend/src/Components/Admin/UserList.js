import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Sidebar from './Sidebar'

const UserList = () => {
  const [users, setUsers] = useState([])

  const navigate = useNavigate()
  const back = () => {
    navigate('/addUser')
  }

  //get user api
  const getUserData = async () => {
    const { data } = await axios.get(
      'http://localhost:5000/users/admin/getAllUsers',
    )
    console.log(data)
    setUsers(data)
  }

  //detete user api
  const deleteUser = async (id) => {
    let result = await fetch(
      `http://localhost:5000/users/admin/deleteUser/${id}`,
      {
        method: 'Delete',
      },
    )
    result = await result.json()
    if (result) {
      alert('User Deleted.')
      getUserData()
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  return (
    <>
      <div >
        <Box
          p={2}
          color="blue"
          textAlign="center"
        >
          <Typography variant="h5" textAlign="center">
            User List
          </Typography>
          <Button onClick={back}>
            <ArrowBackIcon />
            Go Back
          </Button>

          <Grid container spacing={4} marginTop={5} marginLeft={1}>
            {users.map((item, key) => (
              <Grid item xs={3} key={key}>
                <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                    component="img"
                    alt="user"
                    height="200"
                    image={item.avatar}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.firstName} {item.lastName}
                    </Typography>
                    <Typography
                      className="productDesc"
                      variant="body2"
                      color="text.secondary"
                    >
                      Email : {item.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mobile No. : {item.number}
                    </Typography>
                    <Typography variant="body1" color="Highlight">
                      Role : {item.role}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Fab
                      onClick={() => deleteUser(item._id)}
                      size="small"
                      color="error"
                      aria-label="delete"
                    >
                      <DeleteForeverIcon />
                    </Fab>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default UserList
