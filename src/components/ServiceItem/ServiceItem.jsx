import React from "react";
import "./ServiceItem.scss";

export default function ServiceItem({ text }) {
  return (
    <li className="service-item">
      <span className="bullet">•</span>
      <span className="service-text">{text}</span>
    </li>
  );
}