import React from "react";
import ServiceList from "../ServiceList/ServiceList";
import "./ServiceGrid.scss";

export default function ServiceGrid({ services }) {
  return (
    <>
    {/* <h1 className="services-grid__title">Our Services</h1> */}
    <div className="services-grid">        
      {services.map((category, index) => (
        <ServiceList
          key={index}
          title={category.category}
          items={category.items}
          slug={category.slug}
        />
      ))}
    </div>
    </>
    
  );
}