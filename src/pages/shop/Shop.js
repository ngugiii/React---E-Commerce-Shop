import React ,{useContext}from 'react'
import { CategoriesContext } from '../../contexts/products.context'
import ProductCard from '../../components/product-card/ProductCard';
import "./Shop.scss"


const Shop = () => {
  const {categoriesMap} = useContext(CategoriesContext);

  return(
    <>
    {
      Object.keys(categoriesMap).map(title=> 
        <div className='shopMain' key={title}>
        <h2>{title}</h2>
        <div className="products-container">
          {categoriesMap[title].map((product)=> (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>

        </div>
      )
    }
   

    </>
    
  )

}

export default Shop