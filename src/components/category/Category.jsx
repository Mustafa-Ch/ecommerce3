import React from 'react'
import './Category.css'
import img1 from '../../../public/product_8.png'
import img2 from '../../../public/product_9.png'
import img3 from '../../../public/product_20.png'
import img4 from '../../../public/product_23.png'
import img5 from '../../../public/product_32.png'
import img6 from '../../../public/product_36.png'

import { Link } from 'react-router-dom'
function Category() {
  
  return (
   <div className='category'>
    <div className='cols'>
      <div className='rows'>
        <img src='https://images.pexels.com/photos/3641193/pexels-photo-3641193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <button className='btns'><Link to='/women'>Women</Link></button>

      </div>
      <div className='rows'>
        <img src='https://images.pexels.com/photos/6550704/pexels-photo-6550704.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <button className='btns'><Link to='/women'>Women</Link></button>

      </div>
    </div>
    <div className='cols'>
      <div className='rows'>
      <img src='https://images.pexels.com/photos/7290718/pexels-photo-7290718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <button className='btns'><Link to='/men'>Men</Link></button>
      
      </div>
    </div>
    <div className='cols cols-lg'>
      <div className='rows'>
        <div className='cols'>
          <div className='rows'>
          <img src='https://images.pexels.com/photos/4412446/pexels-photo-4412446.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <button className='btns'><Link to='/kid'>Kids</Link></button>
          
          </div>
        </div>
        <div className='cols'>
          <div className='rows'>
          <img src='https://images.pexels.com/photos/5622954/pexels-photo-5622954.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <button className='btns'><Link to='/men'>Kids</Link></button>
          </div>
        </div>
      </div>
      <div className='rows'>
      
      <img src='https://images.pexels.com/photos/4987521/pexels-photo-4987521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <button className='btns'><Link to='/men'>Men</Link></button>
      </div>
    </div>
   </div>
  )
}

export default Category
