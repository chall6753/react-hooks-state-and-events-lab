import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";
function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const [mode,setMode] = useState('App light')

  

  function darkMode(){
    if(mode === 'App dark'){
      setMode('App light')
    }else{
      setMode('App dark')
    }
  }
    
  
  

  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkMode} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
