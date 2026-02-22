import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section">
      <h2>Looking to Buy, Sell, or Rent a Property?</h2>
      <p>
        Let Sahni Realtors guide you with over 20 years of trusted experience in Mayur Vihar.
      </p>

      <div className="cta-buttons">
        <Link to="/contact" className="btn">
          Book Free Consultation
        </Link>

        <a
          href="https://wa.me/919312218193"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary-btn"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default CTASection;