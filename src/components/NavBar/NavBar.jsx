import React from "react";
import "./NavBar.css";
import CardWidget from "../CartWidget/CardWidget";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Sobre Nosotros</li>
        <li>Contacto</li>
        <li>Tienda</li>
        <li>
          <CardWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
