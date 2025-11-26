// =============================
// src/pages/Services.jsx
// =============================

import React from "react";
import { servicesData } from "../../data/services.js";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid.jsx";
import './ServicePage.scss';
import SectionIntro from "../../components/SectionIntro/SectionIntro.jsx";
import Hero from "../../components/Hero/Hero.jsx";
export default function ServicePage() {
  return (
    <div className="services-page">
      <Hero
      title="Explore Our Comprehensive Renovation Services"
      subtitle="From kitchen remodels to bathroom upgrades, we handle it all with expertise and care."
      backgroundUrl="https://images.unsplash.com/photo-1689102816270-dc301aeaec35?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <SectionIntro
        title="Our Renovation Services"
        text="At Camarun Renovations, we offer a wide range of services to meet all your home improvement needs. Our experienced team is dedicated to delivering high-quality craftsmanship and exceptional customer service on every project. Explore our services below and discover how we can help transform your home."
      />  
          <ServiceGrid
                services={servicesData}
              />
    </div>
  );
}
