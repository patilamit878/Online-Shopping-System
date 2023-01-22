import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProfile = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        number:'',
        avatar:'',
    })

    const handleChange = (name) => (e) => {
        const value = name === 'avatar' ? e.target.files[0] : e.target.value
        setData({...data, [name]: value})
    }

    const handleSubmit = async() => {
        try {
            let formData = new FormData()
            formData.append('firstName',data.firstName)
            formData.append('lastName', data.lastName)
            formData.append('email', data.email)
            formData.append('number', data.number)
            formData.append('avatar', data.avatar)

            const res = await fetch(
                `http://localhost:5000/users/updateUserProfile/${params.id}`,
                {
                   headers:{
                    authorization: JSON.parse(localStorage.getItem('token'))
                },
                method: 'PUT',
                body: formData,
            },
            )
            if(res.ok){
                setData({name: '', avatar: ''})
            }
        } catch (error) {
            console.log(error)
        }
    }

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Box
          width={500}
          height={700}
          boxShadow={2}
          p={2}
          color="blue"
          margin="100px 500px "
          textAlign="center"
        >
          {/* <Fab onClick={back} size="small" color="secondary" sx={{ float: 'left' }}>
            <ArrowBackIcon />
          </Fab> */}
    
          <Typography variant="h4" marginBottom={1}>
            Update Profile
          </Typography>
          <p className="update-title">First Name</p>
          <TextField
            fullWidth
            id="outlined-required"
            // label=""
            name="name"
            value={user.firstName}
            onChange={handleChange('firstName')}
          />
          <br />
          <br />
          <p className="update-title">Last Name</p>
          <TextField
            fullWidth
            id="outline-required"
            label=""
            name="name"
            value={user.lastName}
            onChange={handleChange('lastName')}
          />
          <br />
          <br />
          <p className="update-title">Email</p>
          <TextField
            fullWidth
            id="outline-required"
            name="name"
            value={user.email}
            onChange={handleChange('email')}
          />
          <br />
          <br />
          <p className="update-title">Number</p>
          <TextField
            fullWidth
            id="outlined-number"
            type="number"
            name="name"
            value={user.number}
            onChange={handleChange('number')}
          />
          <br />
          <br />
          <TextField
            fullWidth
            type="file"
            name="image"
            onChange={handleChange('avatar')}
          />
          <br />
          <br />
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Update Profile
          </Button>
        </Box>
      )
}

export default UpdateProfile;