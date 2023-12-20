import React from 'react'
import Card from '../card/Card'
import p1_img from '../../../public/product_1.png'
import p2_img from '../../../public/product_2.png'
import p3_img from '../../../public/product_3.png'
import p4_img from '../../../public/product_4.png'

import './List.css';
import all_product from '../../assets/all_product'
function List({category}) {
    
  return (
    <div className='list'>
   {
   all_product.map((item)=>{
     
     if(item.category==category){
return(
  <Card item={item} key={item.id}/>
)
     }
  
    })
   }
    </div>
  )
}

export default List
