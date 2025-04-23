import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-price">
            {props.item_price} dollars
        </div>
        <button className="itembuyer">Buy Now</button>
    </div>
  )
}

export default Item;