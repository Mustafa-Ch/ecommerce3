import React from 'react'
import { Contexts } from '../../contextapi/Context';
import { useContext } from 'react';
import './Cart.css'
function Cart() {
  const {all_product,cartItems,removeCart,totals}=useContext(Contexts);
  return (
    <div className='cart-items-main'>
    <div className='cart-items-format'>
      <p>Products</p>
      <p>Title</p>
      <p> Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <hr/>
   {
all_product.map((item)=>{
  if(cartItems[item.id]>0){
    return    <div>
      <div className='cartitems-format cart-items-format'>
<img src={item.image} className='cartIcon'/>
<p>{item.name}</p>
<p>${item.new_price}</p>
<button className='cartQuantity'>{cartItems[item.id]}</button>
<p>${item.new_price*cartItems[item.id]}</p>
<img src={removeIcon} alt='error'  className='cart-items-reove' onClick={()=>{removeCart(item.id)}}/>
      </div>
    </div>
  }
  return null
})}
<div className='cartItems-down'>
  <div className='cartItemsTotal'>
    <h1>Cart Total</h1>

    <div>
      <div className='cart-item-totalItem'>
        <p>Subtotal</p>
        <p>${totals()}</p>
      </div>
      <hr/>
      <div className='cart-item-totalItem'>
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>
      <hr/>
      <div className='cart-item-totalItem'>
        <h3>Total</h3>
        <h3>${totals()}</h3>
      </div>
    </div>
    <button>Proceed To Checkout</button>
  </div>
  <div className='cart-items-promocode'>
    <p> If you have a promo code, enter it here</p>
    <div className='cart-promobox'>
      <input placeholder='Promo code'/>
      <button>Submit</button>
    </div>
  </div>
</div>
   </div> 
  )
}

export default Cart
