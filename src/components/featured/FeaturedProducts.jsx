import React from 'react'
import p1_img from '../../../public/product_1.png'
import p2_img from '../../../public/product_2.png'
import p3_img from '../../../public/product_3.png'
import p4_img from '../../../public/product_4.png'
import Card from '../card/Card'
import './Featured.css'
 let data_product = [
    {
      id:1,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:p1_img,
      image2:p2_img,
      new_price:50.00,
      old_price:80.50,
        isNew:true
    },
    {id:2,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:p2_img,
      new_price:85.00,
      old_price:120.50,
      isNew:true
    },
    {id:3,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:p3_img,
      new_price:60.00,
      old_price:100.50,
    },
    {id:4,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:p4_img,
      new_price:100.00,
      old_price:150.00,
    },
  ];
function FeaturedProducts({type}) {
  return (
    <div className='featured'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .</p>
      </div>
      <div className='bottom'>
        {
            data_product.map((item)=>{
                return(
                    <Card key={item.id} item={item}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default FeaturedProducts
