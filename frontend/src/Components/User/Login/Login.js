import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/users/login", user);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/adminHome");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            fullWidth
            type="password"
            id="outlined-password-required"
            label="Enter password"
            name="password"
            value={user.password}
            onChange={handleChange}
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
  );
};

export default Login;
