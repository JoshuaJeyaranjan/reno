import React from "react";
import ServiceItem from "../ServiceItem/ServiceItem.jsx";

export default function ServiceList({ title, items }) {
  return (
    <div className="service-category surface">
      <h3 className="service-category-title">{title}</h3>
      <ul className="service-items">
        {items.map((item, index) => (
          <ServiceItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
}
