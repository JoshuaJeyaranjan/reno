import React from "react";
import "../../styles/main.scss";
import { servicesData } from "../../data/services";
import ServiceList from "../../components/ServiceList/ServiceList";
export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Quality Renovations Built to Last</h1>
            <p className="hero-subtext">
              Transforming homes with craftsmanship, reliability, and modern design.
            </p>
            <button className="btn btn-accent">Get a Free Quote</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
        <section className="section services">  
        <div className="container">
          <h2 className="section-title">Our Renovation Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for every room in your home
          </p>

          <div className="services-list">
            {servicesData.map((serviceCategory, index) => (
              <ServiceList
                key={index}
                title={serviceCategory.category}
                items={serviceCategory.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <div className="about-content surface">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              We bring years of experience, attention to detail, and a dedication to 
              customer satisfaction to every renovation project we take on.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We’d love to hear about your project</p>

          <form className="contact-form surface">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Email Address" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
            <button className="btn btn-accent">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}