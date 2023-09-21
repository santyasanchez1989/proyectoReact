import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Sobre Nosotros</li>
        <li>Contacto</li>
        <li id="carrito" >
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
