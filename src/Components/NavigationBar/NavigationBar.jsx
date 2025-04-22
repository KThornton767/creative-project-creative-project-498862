import React, {useState} from 'react';
import './NavigationBar.css';

import logo from '../Assests/logo.png'
import cartIcon  from'../Assests/Cart_Icon.png'
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='logoicon'>
            <img src={logo} alt="" />
            <p>SKATE SHOP</p>
        </div>
        
        <ul className='navmenu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("About Us")}}><Link to='/about-us' style={{textDecoration: 'none'}}>About Us</Link> {menu==="About Us"?<hr/>:<></>}</li>
        </ul>
        <div className="navlogincart">
            <Link to='/login' style={{textDecoration: 'none'}}><button>Login</button></Link>
            <Link to='/cart' style={{textDecoration: 'none'}}><img src={cartIcon} alt="" /></Link>
            <div className="navcartnumb">
                0
            </div>
        </div>
    </div>
  )
}
