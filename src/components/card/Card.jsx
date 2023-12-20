import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
function Card({item}) {
  return (
   <Link to={`/product/${item.id}`} className='a'>
    <div className='card'>
    <div className='image'>
    {item.isNew&&<span>New Season</span>}
        <img src={item.image}className='mainImg'></img>
        <img src={item.image2} className='secondImg'></img>
    </div>
    <p>{item.name}</p>
    <div className='pricess'>
   <div className='new'> <h4>${item.new_price}</h4></div>
    <div className='old'><h4>${item.new_price}</h4></div>
    </div>
    </div>
   </Link>
  )
}

export default Card
