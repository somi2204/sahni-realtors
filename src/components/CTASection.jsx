import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section" data-aos="fade-up"> 
      <div className="hero-logo">
    <img src="/images/logo.png" alt="Sahni Realtors Logo" data-aos="zoom-in"/>
    </div>
      <h2>Looking to Buy, Sell, or Rent a Property?</h2>
      <p>
        Submit your property details and get a free valuation.
      </p>

      <div className="cta-buttons">

        <a href="Rent.html" className="btn">Get Your Home's Value</a>
      </div>
    </section>
  );
}

export default CTASection;