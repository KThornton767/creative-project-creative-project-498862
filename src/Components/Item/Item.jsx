import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-price">
            {props.item_price} dollars
        </div>
        <Link to='/item' style={{textDecoration: 'none'}}><button className="itembuyer">Buy Now</button></Link>
    </div>
  )
}

export default Item;