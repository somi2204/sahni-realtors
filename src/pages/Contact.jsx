import React, { useRef, useState } from "react";

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const formBody = new URLSearchParams({
        formType: "contact",
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      await fetch("https://script.google.com/macros/s/AKfycbwj5QNkeOhhoCzLdLpdTpjzaBTbD8YnH-XSDGDp36Lz_TNnn5-GdlzIr9slkFkUyDpgwQ/exec", {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setStatus("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section className="contact-section">

      <h1>CONTACT US</h1>

      <p className="contact-subtext">
        You can reach us anytime by calling or texting{" "}
        <strong>+91 9312218193</strong>.
      </p>

      <form ref={form} className="contact-form" onSubmit={handleSubmit} data-aos="fade-right">

        <input
          type="text"
          name="name"
          value={`${formData.firstName} ${formData.lastName}`}
          readOnly
          hidden
        />

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

        {status && <p className="form-status">{status}</p>}

      </form>
    </section>
  );
}

export default Contact;