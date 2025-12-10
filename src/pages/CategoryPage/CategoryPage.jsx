import React from "react";
import CategorySlideshow from "../../components/CategorySlideshow/CategorySlideshow";
import "./CategoryPage.scss";
import '../../components/SectionIntro/SectionIntro.jsx';
import SectionIntro from "../../components/SectionIntro/SectionIntro.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
export default function CategoryPage({
  title,
  description,
  images,
  services = [],
  children
}) {
  return (
    <div className="category-page">
        <Hero
        title={title}
        subtitle={description}
        overlayOpacity={0.6}
        backgroundUrl="https://res.cloudinary.com/du8ttmlo9/image/upload/v1764364177/flooring1_kd0mjk.jpg"
      />

      {/* Slideshow */}
      <CategorySlideshow        
        images={images}
      />

      {/* <SectionIntro
        title={title}
        subtitle={description}
      />     */}

      {/* Optional Services Block */}
      {services.length > 0 && (
        <section className="category-services section container surface">
          <h2>Services Offered</h2>
          <ul>
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Optional extra content */}
      
        <section className="category-extra section container">
          <ContactForm />
        </section>
      
    </div>
  );
}