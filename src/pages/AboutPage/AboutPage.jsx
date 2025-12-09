

// =============================
// src/components/AboutSection/AboutSection.jsx
// =============================
import React from "react";
import "./AboutPage.scss";
import Hero from "../../components/Hero/Hero";
import SectionIntro from "../../components/SectionIntro/SectionIntro.jsx";
export default function AboutPage() {
  return (
    <section className="about section">

            <Hero
      title="Building Dreams, One Renovation at a Time" 
      subtitle="At RenoCo, we specialize in turning your renovation visions into reality with quality craftsmanship and exceptional service."
      backgroundUrl="https://plus.unsplash.com/premium_photo-1682597000374-9cfb5a0bdf98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    <SectionIntro
        title="About Camarun Renovations"
        text="Camarun Renovations has been transforming homes and enhancing lives for over a decade. Founded on the principles of quality, integrity, and customer satisfaction, we have built a reputation as one of the most trusted renovation companies in the region. Our team of skilled professionals is passionate about delivering exceptional craftsmanship and personalized service on every project, big or small."
      />  
      <div className="container">
        <div className="about__inner surface">
          
          <div className="about__content">
            <div className="about__item">
              <h3 className="about__heading">Our Mission</h3>
              <p>
                To deliver high-quality renovations that improve comfort, functionality, 
                and long-term value. We focus on clear communication, honest timelines, 
                and craftsmanship you can trust.
              </p>
            </div>

            <div className="about__item">
              <h3 className="about__heading">Our Team</h3>
              <p>
                Our crew is made up of experienced tradespeople—carpenters, installers, 
                designers, and project managers—each dedicated to doing the job right. 
                Every renovation gets the same level of care, whether it's a small upgrade 
                or a complete home transformation.
              </p>
            </div>

            <div className="about__item">
              <h3 className="about__heading">Why Homeowners Choose Us</h3>
              <p>
                We prioritize detail, durability, and transparency. From the first estimate 
                to the final walkthrough, you get consistent communication, clean work, and 
                results that actually last. No shortcuts. No surprises. Just quality work 
                we're proud to stand behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}