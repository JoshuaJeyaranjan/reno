import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './ContactForm.scss';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");    // inline status
  const [statusType, setStatusType] = useState("");          // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!formData.phone.trim()) {
      setStatusMessage("⚠️ Please enter your phone number.");
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Sending your message...");
    setStatusType("");

    const serviceID = "service_x5lqwdc";
    const adminTemplateID = "template_jf7n484";       
    const autoReplyTemplateID = "template_qxncbqx";   
    const publicKey = "88_C401GQTBOQfSGJ";

    try {
      // 1️⃣ Admin notification
      await emailjs.send(serviceID, adminTemplateID, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: new Date().toLocaleString(),
        logo_url: "https://camarunprojects.com/logo.png"
      }, publicKey);

      // 2️⃣ Auto-reply to user
      await emailjs.send(serviceID, autoReplyTemplateID, {
        name: formData.name,
        email: formData.email,
        title: "Your contact request",
        logo_url: "https://camarunprojects.com/logo.png",
      }, publicKey);

      setStatusMessage("✅ Your message has been sent successfully!");
      setStatusType("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatusMessage("⚠️ Failed to send your message. Please try again later.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="contact-form" className="contact-form surface" onSubmit={handleSubmit}>
      <label className="form-label">Contact Us</label>

      {statusMessage && (
        <p className={`form-status ${statusType}`}>
          {statusMessage}
        </p>
      )}

      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <input
        className="form-input"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <textarea
        className="form-textarea"
        name="message"
        placeholder="Your Message"
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