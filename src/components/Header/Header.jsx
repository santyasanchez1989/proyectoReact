import "./Header.css";
import { Link } from "react-router-dom";

import img from "./logovete.png";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" >
        <img src={img} alt="logo-vete" />
      </Link>
      
    </div>
  );
};

export default Header;