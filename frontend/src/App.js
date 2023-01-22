import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Signup from "./Components/User/Signup/Signup";
import AddBank from "./Components/Customer/AddBank";
import Login from "./Components/User/Login/Login";
import HomeScreen from "./Components/Customer/HomeScreen";
import ContactUs from "./Components/Admin/ContactUs";
import AboutUs from "./Components/Admin/AboutUs";
import Sidebar from "./Components/Admin/Sidebar";
import AdminHome from "./Components/Admin/AdminHome";
import ProductList from "./Components/Admin/ProductList";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import Footer from "./Components/NavBar/Footer";
import AddCategory from "./Components/Admin/AddCategory";
import CategoryList from "./Components/Admin/CategoryList";
import ProductDetails from "./Components/Customer/ProductDetails";
import AddUser from "./Components/Admin/AddUser";
import UserList from "./Components/Admin/UserList";
import UserProfile from "./Components/User/Profile/UserProfile";
import CartList from "./Components/Customer/CartList";
import AddProduct from "./Components/Admin/AddProduct";
import UpdateProfile from "./Components/User/Profile/UpdateProfile";
import ProtectedRoute from "./Components/ProtectedRoutes";

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
            <Route
              path="/userProfile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/updateProfile/:id" element={<UpdateProfile />} />
            {/* Store Manager */}
            <Route
              path="/addProduct"
              element={
                <ProtectedRoute>
                  <AddProduct/>
                </ProtectedRoute>
              }
            />
            {/* Customer */}
            <Route path="/addBank" element={<AddBank />} />
            <Route
              path="/homeScreen"
              element={
                <ProtectedRoute>
                  <HomeScreen />
                </ProtectedRoute>
              }
            />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route
              path="/cartList"
              element={
                <ProtectedRoute>
                  <CartList />
                </ProtectedRoute>
              }
            />
            {/* Admin */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route
              path="/adminHome"
              element={
                <ProtectedRoute>
                  <AdminHome />
                </ProtectedRoute>
              }
            />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route
              path="/productList"
              element={
                <ProtectedRoute>
                  <ProductList />
                </ProtectedRoute>
              }
            />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route
              path="/update/:id"
              element={
                <ProtectedRoute>
                  <UpdateProduct />
                </ProtectedRoute>
              }
            />
            <Route path="/addCategory" element={<ProtectedRoute><AddCategory/></ProtectedRoute>} />
            <Route path="/categoryList" element={<ProtectedRoute><CategoryList/></ProtectedRoute>} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/userList" element={<UserList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
