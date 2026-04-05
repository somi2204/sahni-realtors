import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function HomeValue() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    intent: "",
    type: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_1qm3ngg",      // 🔁 replace
        "template_ixru0md",     // 🔁 replace (use SAME template as others)
        form.current,
        "xgOdug_4KnxfD9CRV"       // 🔁 replace
      )
      .then(
        () => {
          setStatus("Message sent successfully!");

          setFormData({
            name: "",
            phone: "",
            email: "",
            intent: "",
            type: "",
            location: "",
            bedrooms: "",
            bathrooms: "",
            size: "",
            message: "",
          });
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          setStatus("Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="home-value-page">

      <section className="value-hero" data-aos="fade-up">
        <h1 className="heading">What Is Your Home Worth?</h1>
        <p className="value-sub">
          Whether you're planning to sell or rent, knowing your property's true
          market value is the first step toward making a smart decision.
        </p>
      </section>

      <section className="value-form-section">

        <h2 className="heading2">Tell Us About Your Property</h2>

        <form ref={form} className="value-form" onSubmit={handleSubmit}>

          {/* ✅ identify form type (important for shared template) */}
          <input type="hidden" name="formType" value="Home Valuation" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="intent"
            required
            value={formData.intent}
            onChange={handleChange}
          >
            <option value="">I want to</option>
            <option>Sell my property</option>
            <option>Rent out my property</option>
          </select>

          <select
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Property Type</option>
            <option>Apartment</option>
            <option>Builder Floor</option>
            <option>Independent House</option>
            <option>Plot</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Property Location"
            value={formData.location}
            onChange={handleChange}
          />

          <div className="double">
            <input
              type="number"
              name="bedrooms"
              placeholder="# of Bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
            />

            <input
              type="number"
              name="bathrooms"
              placeholder="# of Bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="size"
            placeholder="Approx. Size (sq ft)"
            value={formData.size}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Anything else you'd like us to know?"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>

          {/* ✅ inline status (no popup) */}
          {status && <p className="form-status">{status}</p>}

        </form>

      </section>

    </div>
  );
}

export default HomeValue;