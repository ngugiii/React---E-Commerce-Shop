import React,{useContext} from 'react'
import { CartContext } from '../../contexts/cart.context';

import "./ProductCard.scss"

const ProductCard = ({product}) => {
  const {name,imageURL,price}=product;
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart =()=>addItemToCart(product)
  return (
    <div className='product-card-container'>
      <img src={`${imageURL}`} alt="" />
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <button className="addBtn" onClick={addProductToCart}>ADD TO CART</button>
    </div>
  )
}

export default ProductCard