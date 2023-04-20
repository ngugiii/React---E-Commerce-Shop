import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// import CartItem from '../../components/cart-item/CartItem'
import "./Cart.scss";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Cart = () => {
  const {
    cartItems,
    hasProducts,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);
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
                  <th>Total (KES)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => {
                  const { id, name, quantity, price, imageURL } = cartItem;
                  return (
                    <>
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
                              onClick={() => removeItemFromCart(cartItem)}
                            >
                              -
                            </button>
                            <p>
                              <b>{quantity}</b>
                            </p>
                            <button
                              className="--btn cart-addRemove-btn"
                              onClick={() => addItemToCart(cartItem)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>{(price * quantity).toFixed(2)}</td>
                        <td>
                          <div
                            className="trash"
                            onClick={() => clearItemFromCart(cartItem)}
                          >
                            <FaTrashAlt size={19} color="red" />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="total-p">TOTAL</td>
                  <td className="total-amount">{cartTotal.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          )}
          {!hasProducts && (
            <p className="cart-warning">
              Your shopping Cart is Empty. Please Click on the link below to
              continue shopping
            </p>
          )}
        </div>
      </div>
      <Link to="/shop" className="continueToShop">
        <AiOutlineArrowLeft size={23} color="red" />
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;
