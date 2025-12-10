import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null); // container for links + toggle button

  const toggleMobileMenu = () => setMobileOpen(prev => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__logo">
        <NavLink onClick={handleLinkClick} className="nav__logo" to="/">Camarun</NavLink>
      </div>

      <div className={`nav__links ${mobileOpen ? "nav__links--open" : ""}`}>
        <NavLink to="/services" onClick={handleLinkClick}>
          Services
        </NavLink>
        <NavLink to="/about" onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={handleLinkClick}>
          Contact
        </NavLink>
        <ThemeToggle />
      </div>

      <button className="nav__toggle" onClick={toggleMobileMenu}>
        {mobileOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
}