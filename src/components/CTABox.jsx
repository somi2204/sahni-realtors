import { Link } from "react-router-dom";

function CTABox() {
  return (

    <div className="cta-wrapper">
    <div className="cta-box" data-aos="fade-up" data-aos-delay="200">
      <h3>Start Your Property Journey</h3>
      <p>Explore exclusive listings or get expert guidance today.</p>

      <Link to="/rent" className="btn gold-btn">
        View Listings
      </Link>

      <Link to="/contact" className="btn outline-btn">
        Get Free Consultation
      </Link>

      <div className="cta-stats">
        <span>⭐ 1500+ Happy Clients</span>
      </div>
    </div>
    </div>
  );
}

export default CTABox;