import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="nav">
      <div className="nav__logo">Camarun</div>

      <div className={`nav__links ${mobileOpen ? "nav__links--open" : ""}`}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/services">
          Services
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
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