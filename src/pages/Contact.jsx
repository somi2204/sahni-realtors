import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ ADDED: API URL from env
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      property: "Contact Inquiry",
      message: formData.message,
      formType: "contact",
    };

    try {
      // ✅ CHANGED: localhost → deployed backend
      const res = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message);

      // reset
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section className="contact-section">

      <h1>CONTACT US</h1>

      <p className="contact-subtext">
        You can reach us anytime by calling or texting{" "}
        <strong>+91 9312218193</strong>.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            required
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell us how we can help you"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="send-btn">
          SEND
        </button>

      </form>
    </section>
  );
}

export default Contact;