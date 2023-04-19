import React ,{useContext}from 'react'
import { ProductContext } from '../../contexts/products.context'
import ProductCard from '../../components/product-card/ProductCard';
import "./Shop.scss"


const Shop = () => {
  const {products} = useContext(ProductContext);
  const PRODUCT = products.map((product)=>{
    return (
   <ProductCard key={product.id} product={product}/>
    )
})
  return (
    <div className='products-container'>
      {PRODUCT}
    </div>
  )
}

export default Shop