import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-section" data-aos="fade-up">

        <h1 data-aos="fade-up">CONTACT US</h1>

        <p className="contact-subtext" data-aos="fade-up" data-aos-delay="100">
          You can reach us anytime by calling or texting{" "}
          <strong>+91 9312218193</strong>.
          Prefer to use the contact form? Fill it out below and
          we'll get back to you quickly.
        </p>

        <form className="contact-form" data-aos="fade-up"
  data-aos-delay="200">

          <div className="form-row" data-aos="fade-right" data-aos-delay="300">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>

          <div className="form-row" data-aos="fade-left" data-aos-delay="400">
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone Number*" required/>
          </div>

          <textarea
            placeholder="Tell us how we can help you"
            data-aos="fade-up"
  data-aos-delay="500"
          ></textarea>

          <button type="submit" className="send-btn" data-aos="zoom-in"
  data-aos-delay="600">
            SEND
          </button>

        </form>

      </section>
    </>
  );
}

export default Contact;