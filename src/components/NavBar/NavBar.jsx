
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">Home</Link>
        <Link className="li"to="/SobreNosotros">Sobre Nosotros</Link>
        <Link className="li"to="/Productos">Productos</Link>
        <Link className="li"to= "/Contacto">Contacto</Link>
        
      </ul>
    </nav>
  );
};

export default NavBar;