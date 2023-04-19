import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// import CartItem from '../../components/cart-item/CartItem'
import "./Cart.scss";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai"

const Cart = () => {
  const { cartItems, hasProducts } = useContext(CartContext);
  return (
    <div className="cart-container">
      <p className="cartHeader">Shopping Cart</p>
      <div className="cart-item-container">
        <div className="items">
          {hasProducts && (
            <table>
              <thead>
                <tr>
                  {/* <th>s/n</th> */}
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ name, price, quantity, imageURL, index }) => (
                  <tr>
                    {/* <td>{index + 1}</td> */}
                    <td className="cart-product-description">
                      <img
                        src={`${imageURL}`}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                      <p>
                        <b>{name}</b>
                      </p>
                    </td>
                    <td>{price}</td>
                    <td>
                      <div className="cart-addRemove-btns">
                        <button
                          className="--btn cart-addRemove-btn"
                          // onClick={() => decreaseCart(cart)}
                        >
                          -
                        </button>
                        <p>
                          <b>{quantity}</b>
                        </p>
                        <button
                          className="--btn cart-addRemove-btn"
                          // onClick={() => increaseCart(cart)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{(price * quantity).toFixed(2)}</td>
                    <td>
                      <FaTrashAlt size={19} color="red" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!hasProducts && <p className="cart-warning">Your shopping Cart is Empty. Please Click on the link below to continue shopping</p>}
        </div>
      </div>
      <Link to="/shop" className="continueToShop">
          <AiOutlineArrowLeft size={23} color="red"/>
          Continue Shopping</Link>
        
    </div>
  );
};

export default Cart;
