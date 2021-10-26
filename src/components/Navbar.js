import "./Navbar.css";

import { Link } from "react-router-dom";

import logo from "./image/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="" />
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/image">IMAGES</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
