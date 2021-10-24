import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
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
