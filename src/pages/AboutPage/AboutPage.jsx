// =============================
// src/pages/About.jsx
// =============================

import React from "react";
import "../../styles/main.scss";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="section about-hero">
        <div className="container">
          <h1 className="section-title">About RenoCo</h1>
          <p className="section-subtitle">
            We are a trusted renovation company with years of experience in transforming homes.
          </p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container surface">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality, reliable renovation services that enhance the comfort and
            beauty of your home.
          </p>
          <h2>Our Team</h2>
          <p>
            Our team consists of skilled professionals who are passionate about every project
            from planning to execution.
          </p>
          <h2>Why Choose Us</h2>
          <p>
            Attention to detail, timely delivery, and exceptional craftsmanship are what set us apart.
          </p>
        </div>
      </section>
    </div>
  );
}
