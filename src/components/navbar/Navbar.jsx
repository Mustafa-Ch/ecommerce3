import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {BsCart} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import './Navbar.css';
import { Contexts } from '../../contextapi/Context'
function Navbar() {
    const {totalItems}=useContext(Contexts);
  return (
   <>
    
<div id="menu">
    <div className="wrappper">
        <div className="menues_drawer">
            <span className="material-symbols-outlined">FAISHIONLY</span>
        </div>
        <div className="menues_links">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/men'>Men</Link> </li>
                <li><Link to='/women'>Women</Link> </li>
                <li><Link to='/kid'>Kids</Link> </li>
            </ul>
        </div>
 <div className='ico'>
  <Link to='/contact'><BsPerson/></Link>  
   <Link to='/cart'><BsCart/></Link> 
    <span className='count'>{totalItems()}</span>
 </div>
    </div>
</div>
   </>
  )
}

export default Navbar
