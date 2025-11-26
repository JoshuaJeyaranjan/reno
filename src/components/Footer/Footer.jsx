import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">

        {/* CONTACT SECTION */}
        <div className="footer__section">
          <h4>Contact</h4>
          <a href="mailto:info@renoco.com">info@renoco.com</a>
          <a href="tel:+15551234567">(555) 123-4567</a>
          <a
            href="https://maps.google.com/?q=123+Renovation+St,+Cityville"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Renovation St., Cityville
          </a>
        </div>

        {/* SERVICES SECTION */}
        <div className="footer__section">
          <h4>Services</h4>
          <p>Demolition & Cleanup</p>
          <p>Flooring</p>
          <p>Drywall</p>
          <p>Paint & Finishing</p>
          <p>Garage & Basement</p>
          <p>Lighting & Doors</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer__section quick-links">
          <h4>Quick Links</h4>

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
        </div>
      </div>

      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} RenoCo. All rights reserved.
      </div>
    </footer>
  );
}