import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
<nav className="navbar">
<ul className="nav-links">
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/rent">Buy / Rent</Link></li>
  <li><Link to="/homevalue">Your Home's Value</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
</nav>
</header>
);
}

export default Navbar;