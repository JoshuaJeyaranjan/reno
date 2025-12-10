import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "./CategorySlideshow.scss";

export default function CategorySlideshow({ title, description, images = [] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Log the image URLs for debugging
  

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="category-slideshow">
      {/* Title & Description */}

      {/* Main Slideshow */}
      <div className="slideshow-wrapper">
        {images.map((img, i) => (
          <div
            key={i}
            className="slideshow-slide"
            style={{ backgroundImage: `url(${img.url || img})` }}
            onClick={() => openLightbox(i)}
          >
            {img.caption && <span className="slide-caption">{img.caption}</span>}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.url || img, description: img.caption }))}
      />
    </section>
  );
}