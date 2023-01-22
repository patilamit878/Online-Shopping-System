import { Box, Button, Menu, MenuItem } from '@mui/material'
import React from 'react'
import ProductList from './ProductList'
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ReviewsIcon from '@mui/icons-material/Reviews'
import SellIcon from '@mui/icons-material/Sell'
import StorefrontIcon from '@mui/icons-material/Storefront'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddCardIcon from '@mui/icons-material/AddCard'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import AdminHome from './AdminHome'
import AddProduct from './AddProduct'

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const navigate = useNavigate()

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const dashbord = () => {
    navigate('/adminHome')
  }

  const allProducts = () => {
    navigate('/productList')
  }

  const addProduct = () => {
    navigate('/addProduct')
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate('/')
  }
  return (
    <>
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar --> */}
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-user-secret me-2"></i>Admin
        </div>
        <div className="list-group list-group-flush my-3">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text active"
          >
            <i className="fas fa-tachometer-alt me-2"></i>Dashboard
          </a>
          <a
            href="/adminHome"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-project-diagram me-2">
              <DashboardIcon />
            </i>
            Home
          </a>
          <a
            href="/userList"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-chart-line me-2">
              <RecentActorsIcon />
            </i>
            User List
          </a>
          <a
            href="addUser"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-paperclip me-2">
              <PersonAddIcon />
            </i>
            Add User
          </a>
          <a
            href="/productList"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-shopping-cart me-2">
              <FormatListBulletedIcon />
            </i>
            Product List
          </a>
          <a
            href="/productList"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-circle-plus">
              <FormatListBulletedIcon />
            </i>
            Add Product
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-comment-dots me-2">
              <ReviewsIcon />
            </i>
            Review
          </a>
          <a
            href="/addProduct"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-gift me-2">
              <AddCardIcon />
            </i>
            Add Seller
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i className="fas fa-map-marker-alt me-2">
              <SellIcon />
            </i>
            Seller List
          </a>
          <a
            onClick={logout}
            className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
          >
            <i className="fas fa-power-off me-2">
              <LogoutIcon />
            </i>
            Logout
          </a>
        </div>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}
    </div>
    </>
  )
}

export default Sidebar
