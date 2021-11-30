import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "./logo.jpeg"
const Header = () => {
  const [click, setClick] = useState(false);
  const [navShrink, setnavShrink] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  const shrinkNavbar = () => {
    if(window.scrollY > 100) {
      setnavShrink(true)
    } else if(window.scrollY < 20) {
      setnavShrink(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', shrinkNavbar)

  }, [])
  return (
    <header className="header">
      <nav className={navShrink ? 'navbar navbar-shrink': 'navbar'}>
      <Link className="nav-logo" to="/"><img src={logo} className="logo" alt="Logo" /></Link>
        <ul className={click ? 'nav-menu active': "nav-menu"}>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="">Home</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="">About</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="">Product</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="">Contact</Link>
          </li>
        </ul>
          <div className={click ? 'hamburger active' : 'hamburger'} onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
      </nav>
    </header>
  );
};

export default Header;