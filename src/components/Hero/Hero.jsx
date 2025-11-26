// =============================
// src/components/Hero/Hero.jsx
// =============================
import React from "react";
import { useNavigate } from "react-router-dom";
import './Hero.scss';

export default function Hero({
  title = "Quality Renovations Built to Last",
  subtitle = "Transforming homes with craftsmanship, reliability, and modern design.",
  ctaText = "Get a Free Quote",
  ctaLink = "/contact",               // default link
  backgroundUrl = "",
  overlayOpacity = 0.4,        // default semi-transparent
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (ctaLink) navigate(ctaLink);
  };

  return (
    <section
      className="hero section"
      style={{
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : "none",
      }}
    >
      <div
        className="overlay"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      ></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtext">{subtitle}</p>
          {ctaText && (
            <button className="btn btn-accent" onClick={handleClick}>
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}