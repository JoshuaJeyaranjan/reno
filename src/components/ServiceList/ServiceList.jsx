import React from "react";
import ServiceItem from "../ServiceItem/ServiceItem.jsx";
import "./ServiceList.scss";

export default function ServiceList({ title, items }) {
  return (
    <div className="service-category surface">
      <div className="service-category-header">
        <div className="accent-bar"></div>
        <h3 className="service-category-title">{title}</h3>
      </div>

      <ul className="service-items">
        {items.map((item, index) => (
          <ServiceItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
}