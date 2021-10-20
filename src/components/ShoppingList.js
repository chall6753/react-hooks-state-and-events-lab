import React from "react";
import Item from "./Item";
import { useState} from "react";



function ShoppingList({ items }) {
  const [selectedCategory, setCategory]=useState('All')
  
  function handleChange(event){
    setCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          
          if (selectedCategory === 'All'){
            return <Item key={item.id} name={item.name} category={item.category} />
          }
          else if (item.category === selectedCategory){
            return (<Item key={item.id} name={item.name} category={item.category} />)
          }
          else{}
})}
      </ul>
    </div>
  );
}

export default ShoppingList;
