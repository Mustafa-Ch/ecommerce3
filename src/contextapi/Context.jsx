import React, { createContext, useState } from 'react'
import { Provider } from 'react';
import all_product from '../assets/all_product';
export const Contexts=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
   
    return cart;
  }
 
function Context(props) {

    const [cartItems,setCartItems]=useState(getDefaultCart());
    const addToCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const totalItems=()=>{
      let totalItem=0;
      for(let item in cartItems){
        if(cartItems[item]>0){
          totalItem+=cartItems[item]
        }
      }
  return totalItem;
    }
    const totals=()=>{
      let totalAmmount=0;
      for(let item in cartItems){
        if(cartItems[item]>0){
          let cartInfo=all_product.filter((product)=>{
            return product.id===Number(item);
          })
          totalAmmount+=cartInfo[0].new_price*cartItems[item];
        }
      }
      return totalAmmount;
    }
    const productsValue={all_product,cartItems,totals,addToCart,removeCart,totalItems};
  
  return (
    <>
   <Contexts.Provider value={productsValue}>
    {props.children}
   </Contexts.Provider>
    </>
  )
}

export default Context
