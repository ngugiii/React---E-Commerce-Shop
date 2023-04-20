import { createContext , useEffect, useState} from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem){
        return cartItems.map((cartItem)=> 
        cartItem.id===productToAdd.id
         ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
          );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem =(cartItems, cartItemToRemove)=>{

    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.id === cartItemToRemove.id
    );
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem)=> 
        cartItem.id===cartItemToRemove.id
         ? {...cartItem, quantity: cartItem.quantity - 1}
          : cartItem
          );
   

}
const clearCartItem =(cartItems, cartItemToClear)=>{
    
        return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);


}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    hasProducts: false,
    cartCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: ()=>{},
    cartTotal: 0

});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [hasProducts, setHasProducts] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    console.log(cartItems.length);
    useEffect(() => {
        if (cartItems.length == 0){
            setHasProducts(false)
        }
      
    }, [cartItems])

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd));
        setHasProducts(true);
        toast.success("Item added to cart Successfully")
    }

    const removeItemFromCart =(cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
        toast.success("Item removed from cart Successfully")        

    }
    const clearItemFromCart =(cartItemToClear) =>{
        setCartItems(clearCartItem(cartItems, cartItemToClear));
        toast.success("Item removed from cart Successfully");
        
    }

    

    const value = {addItemToCart, cartItems, hasProducts, cartCount,removeItemFromCart, clearItemFromCart, cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

};