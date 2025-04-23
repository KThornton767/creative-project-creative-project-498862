import React from 'react';
import Item from '../Components/Item/Item.jsx';
const db = require("../../backend/db.js");


const ShopPage = () => {
  let itemsJson = db.getAllItems();

  return (
    <div className="all-items">
      {itemsJson.map((items,i)=>{
        return <Item key={i} id={items.id} name={items.name} image={items.image} price={items.price}></Item>
      })}
    </div>
  )
}

export default ShopPage;