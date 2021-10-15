import "./Navbar.css";
import img from "./img/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-leftSide">
        <div className="logo">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="nav-rightSide">
        <div className="nav-items">
          <div className="nav-links">
            <a href="/Home">Home</a>
            <a href="/Image">Image</a>
            <a href="/About">About</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
