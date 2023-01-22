import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { decreaseCount, increaseCount, removeFromCart } from '../../redux/features/cartSlice'


const CartList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price
  }, 0)

  return (
    <div className="wrapper next-row">
      <div className="wid-75 arrange-left">
        <div className="cart-details">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr>
                    <td className="text-with-img">
                      <img src={item.image} alt="" />
                      <span>Colorful Shirt</span>
                    </td>
                    <td>
                      <span>{item.price}</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          -
                        </button>
                        <input type="text" value={item.count} />
                        <button
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>Rs. {item.price * item.count}</td>
                    <td>
                      <i
                        className="fa fa-remove icon custom-delete-button"
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        X
                      </i>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="total-wrapper">
        <div className="total-head">
          <h4>Total</h4>
          <h4>
            {
              // cart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
              totalPrice
            }
          </h4>
        </div>
        <div className="proceed-input">
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartList
