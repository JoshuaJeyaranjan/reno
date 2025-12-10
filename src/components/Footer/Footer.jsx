import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">

        {/* CONTACT SECTION */}
        <div className="footer__section">
          <h4>Contact</h4>
          <a className="footer-link" href="mailto:camarunpm@gmail.com">camarunpm@gmail.com</a>
          <a className="footer-link" href="tel:+14163002031">(416) 300-2031</a>
        </div>

        {/* SERVICES SECTION */}
        <div className="footer__section service-links">
          <h4>Services</h4>
          <NavLink className="footer-link" to="/services/demolition-cleanup-junk-removal" end>
            Demolition & Cleanup
          </NavLink>
          <NavLink className="footer-link" to="/services/flooring" end>Flooring</NavLink>
          <NavLink className="footer-link" to="/services/drywall" end>Drywall</NavLink>
          <NavLink className="footer-link" to="/services/paint" end>Paint</NavLink>
          <NavLink className="footer-link" to="/services/garage-finishing" end>Garage Finishing</NavLink>
          <NavLink className="footer-link" to="/services/lighting" end>Lighting</NavLink>
        </div>

        {/* QUICK LINKS SECTION */}
        <div className="footer__section quick-links">
          <h4>Quick Links</h4>
          <NavLink className="footer-link" to="/" end>Home</NavLink>
          <NavLink className="footer-link" to="/services">Services</NavLink>
          <NavLink className="footer-link" to="/about">About</NavLink>
          <NavLink className="footer-link" to="/contact">Contact</NavLink>
        </div>
      </div>

      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} Camarun Property Management. All rights reserved.
      </div>
    </footer>
  );
}