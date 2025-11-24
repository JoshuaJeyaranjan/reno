// =============================
// src/components/Nav.jsx
// =============================

import React, { useState } from "react";
import '../../styles/main.scss';
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="nav">
      <div className="nav__logo">Camarun</div>
      <div className={`nav__links ${mobileOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </div>
      <button className="nav__toggle" onClick={toggleMobileMenu}>
        {mobileOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
}