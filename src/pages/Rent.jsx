import React, { useState, useRef } from "react";

function Rent() {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
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
      formType: "rentInquiry",
      name: `${formData.firstname} ${formData.lastname}`,
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
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error("FETCH ERROR:", error);
    setStatus("Something went wrong. Try again.");
  }
};

  return (
    <>
      {/* HERO */}
      <section className="buy-hero" data-aos="fade-up">
        <h1>Find the Right Place to Call Home</h1>
        <p>
          Whether you're buying your forever home or renting your next space,
          Sahni Realtors makes the journey smooth and stress-free.
        </p>

        <button className="hero-btn">Explore Properties</button>
      </section>

      {/* HOW WE HELP */}
      <section className="process">
        <h2 data-aos="fade-up">How We Help You</h2>

        <div className="process-grid">
          <div className="step" data-aos="fade-up" data-aos-delay="100">
            <span>01</span>
            <h3>Understand Your Needs</h3>
            <p>
              We learn your budget, location preferences, and lifestyle
              requirements to match you with the right options.
            </p>
          </div>

          <div className="step" data-aos="fade-up" data-aos-delay="200">
            <span>02</span>
            <h3>Curated Listings</h3>
            <p>
              No random listings — only handpicked properties that truly
              fit what you're looking for.
            </p>
          </div>

          <div className="step" data-aos="fade-up" data-aos-delay="300">
            <span>03</span>
            <h3>Site Visits</h3>
            <p>
              We arrange convenient viewings and give honest insights
              so you can decide confidently.
            </p>
          </div>

          <div className="step" data-aos="fade-up" data-aos-delay="400">
            <span>04</span>
            <h3>Close with Confidence</h3>
            <p>
              From negotiation to paperwork, we handle the details
              while you focus on your move.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section">
        <h2 data-aos="fade-up">Why Choose Sahni Realtors?</h2>

        <div className="why-container">
          <div className="why-item" data-aos="zoom-in" data-aos-delay="100">
            <div className="why-circle">
              <span className="why-number">01</span>
              <span className="why-text">Local market experts since 2000</span>
            </div>
          </div>

          <div className="why-item" data-aos="zoom-in" data-aos-delay="200">
            <div className="why-circle">
              <span className="why-number">02</span>
              <span className="why-text">Honest advice, no pressure selling</span>
            </div>
          </div>

          <div className="why-item" data-aos="zoom-in" data-aos-delay="300">
            <div className="why-circle">
              <span className="why-number">03</span>
              <span className="why-text">Strong negotiation support</span>
            </div>
          </div>

          <div className="why-item" data-aos="zoom-in" data-aos-delay="400">
            <div className="why-circle">
              <span className="why-number">04</span>
              <span className="why-text">End-to-end assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section className="rent-contact-section">
        <h2 className="contact-title" data-aos="fade-up">
          Ready to Get Started?
        </h2>

        <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="150">
          Let us know a few details and we'll get right back to you.
        </p>

        <div
          className="rent-form-wrapper"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <form ref={form} className="rent-contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              value={`${formData.firstname} ${formData.lastname}`}
              readOnly
              hidden
            />

            <div className="form-row">
              <input
                type="text"
                name="firstname"
                placeholder="First Name*"
                required
                value={formData.firstname}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastname"
                placeholder="Last Name*"
                required
                value={formData.lastname}
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
                placeholder="Phone*"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about the home you're looking for..."
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="rent-send-btn"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}

          </form>
        </div>
      </section>
    </>
  );
}

export default Rent;