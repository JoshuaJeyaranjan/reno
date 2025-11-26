
// =============================
// src/pages/Contact.jsx
// =============================

import React from "react";
import './ContactPage.scss';
import SectionIntro from "../../components/SectionIntro/SectionIntro.jsx";
import Hero from "../../components/Hero/Hero";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
export default function ContactPage() {
  return (
    <div className="contact-page">
      <Hero
      title="Get in Touch with RenoCo"
      subtitle="We're here to help with all your renovation needs. Contact us today for a free consultation!"
      backgroundUrl="https://images.unsplash.com/photo-1758598306263-1da3d660a056?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <SectionIntro
        title="Contact Camarun Renovations"
        text="Whether you're ready to start your renovation project or just have a few questions, we're here to help. Reach out to us via phone, email, or by filling out the contact form below. Our friendly team is eager to assist you in bringing your home improvement visions to life."
      />

      <ContactForm />
    </div>
  );
}

