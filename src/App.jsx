import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

const App = () => {


  return (
    <div>
      <Header />
      <NavBar />
      <ItemListContainer />
     
      </div>
      
  );
};

export default App;
