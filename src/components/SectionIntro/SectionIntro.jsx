// src/components/SectionIntro.jsx
import React from "react";
import "./SectionIntro.scss";

export default function SectionIntro({ title, subtitle, text }) {
  return (
    <section className="section-intro">
      <div className="section-intro__inner">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}