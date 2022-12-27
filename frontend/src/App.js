import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Signup from './Components/User/Signup/Signup'
import AddBank from './Components/Customer/AddBank'
import Login from './Components/User/Login/Login'
import HomeScreen from './Components/Customer/HomeScreen'
import ContactUs from './Components/Admin/ContactUs'
import AboutUs from './Components/Admin/AboutUs'
import Sidebar from './Components/Admin/Sidebar'
import AdminHome from './Components/Admin/AdminHome'
import ProductList from './Components/Admin/ProductList'
import UpdateProduct from './Components/Admin/UpdateProduct'
import Footer from './Components/NavBar/Footer'
import AddCategory from './Components/Admin/AddCategory'
import CategoryList from './Components/Admin/CategoryList'
import ProductDetails from './Components/Customer/ProductDetails'
import AddUser from './Components/Admin/AddUser'
import UserList from './Components/Admin/UserList'
import UserProfile from './Components/User/Profile/UserProfile'
import CartList from './Components/Customer/CartList'
import AddProduct from './Components/Admin/AddProduct'

function App() {
  return (
    <>
      <div className="App">
          <BrowserRouter>
            <NavBar />

            <Routes>
              {/* User */}
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/userProfile" element={<UserProfile />} />
              {/* Store Manager */}
              <Route path="/addProduct" element={<AddProduct />} />
              {/* Customer */}
              <Route path="/addBank" element={<AddBank />} />
              <Route path="/homeScreen" element={<HomeScreen />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />
              <Route path="/cartList" element={<CartList />} />
              {/* Admin */}
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/adminHome" element={<AdminHome />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/productList" element={<ProductList />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/update/:id" element={<UpdateProduct />} />
              <Route path="/addCategory" element={<AddCategory />} />
              <Route path="/categoryList" element={<CategoryList />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/userList" element={<UserList />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
