import { useState } from "react";

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <h1 className="topbar-title">Sahni Realtors</h1>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile menu */}
      <ul className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/rent">Buy / Rent</a></li>
        <li><a href="/homevalue">Your Home's Value</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </>
  );
}

export default TopBar;