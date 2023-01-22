import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import axios from "axios";
import { useState } from "react";

const NavBar = (props) => {
  const [user, setUser] = useState("");

  const params = useParams();

  const auth = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const productList = () => {
    navigate("/homeScreen");
  };

  const contact = () => {
    navigate("/contactUs");
  };

  const about = () => {
    navigate("/aboutUs");
  };

  const login = () => {
    navigate("/");
  };

  const cart = () => {
    navigate("/cartList");
  };

  const profile = () => {
    navigate("/userProfile");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    if (token) {
      const { data } = await axios.get(
        `http://localhost:5000/users/userDetails/${params.id}`
      );
      setUser(data);
    }
  };
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
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => props.handleShow(false)}
        >
          Shopping App
        </Typography>

        {auth ? (
          <Stack direction={"row"} spacing={2}>
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
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={profile}>Profile</MenuItem>
              <MenuItem>
              <Link to={`/updataProfile/${auth._id}`}>
              My account</Link></MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Stack>
        ) : (
          <Button color="inherit" onClick={login}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
