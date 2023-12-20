import React, { useContext, useState } from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import './Product.css'
import { Contexts } from '../../contextapi/Context';
import { useParams } from 'react-router-dom';
function Product() {
  const {id}=useParams();
  const {all_product}=useContext(Contexts);
  console.log(all_product)
  const userProduct=all_product.filter((item)=>{
    return item.id===Number(id)
  });
  console.log(userProduct[0]);
  const [image,setImage]=useState(0);
  const arrImg=[
    "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  return (
    <>
      



      <div className='productDisplay'>
        <div className='display-left'>
           <div className='product-img-list'>
            <img src={userProduct[0].image}/>
            <img src={userProduct[0].image}/>
            <img src={userProduct[0].image}/>
            <img src={userProduct[0].image}/>
           </div>
           <div className='productDisplay-image'>
            <img src={userProduct[0].image} alt='error'/>
           </div>
        </div>
        <div className='display-right'>
        <h1>{userProduct[0].name}</h1>
        <div className='display-right-star'>
           <img src={star_icon}/>
           <img src={star_icon}/>
           <img src={star_icon}/>
           <img src={star_icon}/>
           <img src={star_dull_icon}/>
           <p>{122}</p>
        </div>
         <div className='product-display-right-prices'>
            <div className='product-display-right-old'>{userProduct[0].old_price}</div>
            <div className='product-display-right-new'>{userProduct[0].new_price}</div>
         </div>
            <div className='productDisplay-right-description'>
            Introducing our classic Plain Blue Shirt - a timeless wardrobe essential. Made from high-quality cotton, it boasts a comfortable fit and button-up front. Whether for a casual day out or a semi-formal event, this versatile piece is a perfect choice. Elevate your style with this crisp and stylish blue shirt.
            </div>
            <div className='productDisplay-right-size'>
                <h1>Select Size</h1>
                 <div className='productDisplay-right-sizes'>
                    <div>S</div>
                    <div>XS</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                 </div>
            </div>
            <div className='productDisplay-right-buttons'>
               <button  onClick={()=>{addToCart(userProduct[0].id)}}>Add To Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Product
