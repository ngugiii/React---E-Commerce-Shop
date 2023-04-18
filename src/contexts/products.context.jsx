import React,{createContext, useState} from 'react'

import {myProducts} from "../../src/myProducts"

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({children}) => {
  const [products,setProducts] = useState(myProducts);
  const value = {products};
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}