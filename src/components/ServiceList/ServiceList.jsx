import React from "react";
import ServiceItem from "../ServiceItem/ServiceItem.jsx";
import "./ServiceList.scss";
import { Link } from "react-router-dom";

export default function ServiceList({ title, items, slug }) {
  return (
    <Link to={`/services/${slug}`} className="service-category-link service-category surface "> 
    <div className="">
      
      <div className="service-category-header">
        <div className="accent-bar"></div>
        <h3 className="service-category-title">{title}</h3>
      </div>
      

      <ul className="service-items">
        {items.map((item, index) => (
          <ServiceItem
            key={index}
            text={item}
            to={`/services/${slug}`}
          />
        ))}
      </ul>
    </div>
    </Link>
  );
}