// =============================
// src/pages/Services.jsx
// =============================

import React from "react";
import { servicesData } from "../../data/services.js";
import ServicesList from "../../components/ServiceList/ServiceList.jsx";
import "../../styles/main.scss";

export default function ServicePage() {
  return (
    <div className="services-page">
      <section className="section services-hero">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            We offer a wide range of home renovation and improvement services.
          </p>
        </div>
      </section>

      <section className="section services-list">
        <div className="container services-grid">
          {servicesData.map((service, index) => (
            <ServicesList
              key={index}
              title={service.category}
              items={service.items}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
