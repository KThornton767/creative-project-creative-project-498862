import React from 'react';
import Item from '../Components/Item/Item.jsx';
const db = require("../../backend/db.js");


const ShopPage = () => {

  db.getAllItems(10)
    .then(data => res.json(data)) // if successful
    .catch(err => res.status(500).json(err)); // if error

  return (
    <div className="all-items">
      
    </div>
  )
}

export default ShopPage;