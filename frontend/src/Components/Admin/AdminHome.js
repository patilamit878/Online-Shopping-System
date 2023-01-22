import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import axios from "axios";

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  //get user api
  const getUser = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/users/admin/getAllUsers"
    );
    console.log(data);
    setUsers(data);
  };
  const getProductData = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/products/allProducts",
      {
        headers: {
          "Content-Type": "application/json",
         Authorization: 'Bearer' +localStorage.getItem('token'),
        },
      }
    );
    console.log(data);
    setProducts(data);
  };

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/users/getUserData",
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getProductData();
    getUserData();
  }, []);

  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        {/* <!-- Page Content --> */}
        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div class="d-flex align-items-center">
              <i
                class="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
              ></i>
              <h2 class="fs-2 m-0">Dashboard</h2>
            </div>
          </nav>

          <div class="container-fluid px-4">
            <div class="row g-3 my-2">
              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">{products.length}</h3>
                    <p class="fs-5">Products</p>
                  </div>
                  <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3">
                    <FormatListBulletedIcon
                      fontSize="large"
                      className="adminicon"
                      color="secondary"
                    />
                  </i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">{users.length}</h3>
                    <p class="fs-5">Users</p>
                  </div>
                  <i class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3">
                    <PersonIcon
                      fontSize="large"
                      className="adminicon"
                      color="secondary"
                    />
                  </i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">3899</h3>
                    <p class="fs-5">Delivery</p>
                  </div>
                  <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">%25</h3>
                    <p class="fs-5">Increase</p>
                  </div>
                  <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div>

            <div class="row my-5">
              <h3 class="fs-4 mb-3">Recent Orders</h3>
              <div class="col">
                <table class="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="50">
                        #
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Television</td>
                      <td>Jonny</td>
                      <td>$1200</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Laptop</td>
                      <td>Kenny</td>
                      <td>$750</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell Phone</td>
                      <td>Jenny</td>
                      <td>$600</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Fridge</td>
                      <td>Killy</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Books</td>
                      <td>Filly</td>
                      <td>$120</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Gold</td>
                      <td>Bumbo</td>
                      <td>$1800</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Pen</td>
                      <td>Bilbo</td>
                      <td>$75</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Notebook</td>
                      <td>Frodo</td>
                      <td>$36</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Dress</td>
                      <td>Kimo</td>
                      <td>$255</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Paint</td>
                      <td>Zico</td>
                      <td>$434</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Carpet</td>
                      <td>Jeco</td>
                      <td>$1236</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Food</td>
                      <td>Haso</td>
                      <td>$422</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /#page-content-wrapper --> */}
      {/* </div> */}
    </>
  );
};

export default AdminHome;
