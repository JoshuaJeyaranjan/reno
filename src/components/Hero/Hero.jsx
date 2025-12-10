// =============================
// src/components/Hero/Hero.jsx
// =============================
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Hero.scss';

export default function Hero({
  title = "Quality Renovations Built to Last",
  subtitle = "Transforming homes with craftsmanship, reliability, and modern design.",
  ctaText = "Get a Free Quote",
  ctaLink = "/contact#contact-form", // default to contact with hash
  backgroundUrl = "",
  overlayOpacity = 0.4, // default semi-transparent
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (!ctaLink) return;

    // Check if CTA is a hash link
    if (ctaLink.startsWith("#")) {
      const id = ctaLink.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Split path and hash
    const [path, hash] = ctaLink.split("#");

    // If already on target path, just scroll to hash
    if (location.pathname === path && hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Otherwise navigate to the path with hash
    navigate(ctaLink);
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