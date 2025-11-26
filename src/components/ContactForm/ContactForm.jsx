// =============================
// src/components/ContactForm/ContactForm.jsx
// =============================
import React, { useState } from "react";
import './ContactForm.scss';

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onSubmit) {
      await onSubmit(formData);
    }

    // Reset form after submission (optional)
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <form className="contact-form surface" onSubmit={handleSubmit}>
        <label className="form-label">Contact Us</label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="form-input"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="form-input"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="form-textarea"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}