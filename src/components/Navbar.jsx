import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/rent" onClick={() => setMenuOpen(false)}>Buy / Rent</Link></li>
          <li><Link to="/homevalue" onClick={() => setMenuOpen(false)}>Your Home's Value</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;