import React from 'react';
import Item from '../Components/Item/Item.jsx';
import logo from '../Components/Assests/logo.png'
//const db = require("../../backend/db.js");


const ShopPage = () => {
  //let itemsJson = db.getAllItems();
  //let itemsJson;
  return (
    <div className="all-items">
      <Item key={0} name="A purchasable thing" item_price={12.99} image={logo} />
    </div>
  )
}

export default ShopPage;