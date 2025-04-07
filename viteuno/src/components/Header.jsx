import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <h2>h2</h2>
      <div id="nav-links">
        <nav>
          <Link to="/page2">nav1</Link>
        </nav>
        <nav>
          <Link to="/page2">nav2</Link>
        </nav>
        <nav>
          <Link to="/page2">nav3</Link>
        </nav>
      </div>
      <div id="user-actions">
        <div className="dropdown">
          <span className="dropdown-toggle">nav4</span>
          <div className="dropdown-menu">
            <a href="#">a1</a>
            <a href="#">a2</a>
            <a href="#">a3</a>
          </div>
        </div>
        <button><Link to="/IniSesion">INISEC</Link></button>
        <button>button2</button>
      </div>
    </header>
  );
}

export default Header;