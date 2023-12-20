import React, { useState } from 'react'
import List from '../../components/list/List';
import { useParams } from 'react-router-dom'
import './Products.css';
function Products({category,banner}) {
  const catId=parseInt(useParams().id);
  const [maxPrice,setMaxPrice]=useState(1000);
  const [sort,setSort]=useState(null)
  return (
    <div className='products'>
    <div className='lefts'>
      <div className='filterItem'>
        <h2>Product Categories</h2>
        <div className='inputItem'>
          <input type='checkbox' value={1} id='1'/>
          <label htmlFor='1'>Shoes</label>
        </div>
        <div className='inputItem'>
          <input type='checkbox' value={2} id='2'/>
          <label htmlFor='2'>Caps</label>
        </div>
        <div className='inputItem'>
          <input type='checkbox' value={3} id='3'/>
          <label htmlFor='3'>Jackets</label>
        </div>
      </div>
      <div className='filterItem'>
<h2>Filter By Price</h2>
<div className='inputItem'>
  <span>0</span>
  <input type='range' min={0} max={1000}  onChange={(e)=>setMaxPrice(e.target.value)}/>
  <span>{maxPrice}</span>

</div>
      </div>
      <div className='filterItem'>
        <h2>Sort By</h2>
        <div className='inputItem'>
          <input type='radio' id='acs' value="acs" name='price' onChange={()=>setSort("acs")}/>
          <label htmlFor='acs'>Price Lowest First</label>
        </div>
        <div className='inputItem'>
          <input type='radio' id='dsc' value="dsc" name='price' onChange={()=>setSort("dsc")}/>
          <label htmlFor='acs'>Price Highest First</label>
        </div>
      </div>
    </div>
    <div className='rights'>
      <img className='catImg' src={banner}/>
      <List catId={catId} maxPrice={maxPrice} sort={sort}
       category={category} />
    </div>
    </div>
  )
}

export default Products
