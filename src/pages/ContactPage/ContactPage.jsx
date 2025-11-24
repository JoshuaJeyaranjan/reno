
// =============================
// src/pages/Contact.jsx
// =============================

import React from "react";
import "../../styles/main.scss";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="section contact-section">
        <div className="container">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Fill out the form below and we'll get back to you promptly.
          </p>

          <form className="contact-form surface">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
            <button className="btn btn-accent">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

