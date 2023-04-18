import React from 'react'
import "./ProductCard.scss"

const ProductCard = ({product}) => {
  const {name,imageURL,price}=product;
  return (
    <div className='product-card-container'>
      <img src={`${imageURL}`} alt="" />
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <button className="addBtn">ADD TO CART</button>
    </div>
  )
}

export default ProductCard