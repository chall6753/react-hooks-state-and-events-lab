import React from "react";
import { useState } from "react";



function Item({ name, category }) {
  const [inCart, setCart]=useState('')
  const [addRemoveText, setCartText]=useState('Add To Cart')

  function addToCart(){
    if (inCart == ''){
      setCart('in-cart')
      setCartText('Remove From Cart')
    }else{ 
      setCart('')
      setCartText('Add To Cart')  
    }
  }
  return (
  <li className={inCart}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button default='Add To Cart' onClick={addToCart}className="add">{addRemoveText}</button>
  </li>
  );
}

export default Item;
