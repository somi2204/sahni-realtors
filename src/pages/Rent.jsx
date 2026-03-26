import React from "react";

function Rent() {
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

  <h2 className="contact-title" data-aos="fade-up">Ready to Get Started?</h2>
  <p className="contact-subtitle" data-aos="fade-up"
    data-aos-delay="150">
    Let us know a few details and we'll get right back to you.
  </p>

  <div className="rent-form-wrapper" data-aos="fade-up"
    data-aos-delay="300">

    <form className="rent-contact-form">

      <div className="form-row">
        <input type="text" placeholder="First Name*" required />
        <input type="text" placeholder="Last Name*" required />
      </div>

      <div className="form-row">
        <input type="email" placeholder="Email*" required />
        <input type="tel" placeholder="Phone*" required />
      </div>

      <textarea placeholder="Tell us about the home you're looking for..."></textarea>

      <button type="submit" className="rent-send-btn" data-aos="zoom-in"
        data-aos-delay="500">
        Send Message
      </button>

    </form>

  </div>

</section>
    </>
  );
}

export default Rent;