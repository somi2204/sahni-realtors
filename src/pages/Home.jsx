import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <>

<section className="hero">

    <div className="hero-left">
      <span className="tagline">Trusted Real Estate Services</span>
      <p className="since">Advancing in Real Estate Since 2000</p>
      <h1>Find Your Perfect Home</h1>
      <p className="intro">Sahni Realtors is your trusted partner in buying, selling, and renting
    residential and commercial properties with transparency and expertise.</p>
    <div className="contact-buttons">

      <a href="tel:+919312218193" className="btn call-btn">
        Call Now
      </a>

      <a href="https://wa.me/919312218193?text=Hi%20I%20am%20interested%20in%20your%20properties"
      target="_blank"
      className="btn whatsapp-btn">
      WhatsApp 
</a>
    </div>
    </div>

    <div className="hero-right">
        {/* Building image */}
      <img src="/images/bg3.jpg" alt="Building" className="hero-building" />
    </div>
  </section>

<section className="cta-centered">
  <div className="cta-box">
      <h3>Your Dream Home Awaits</h3>
      <p>Explore properties or learn more about our services.</p>
      <a href="about.html" className="btn">Learn More About Us</a>
      <a href="contact.html" className="btn secondary-btn">
      Work With Us
      </a>
      </div>
</section>

    <section className="services-section">
    <div className="services">
      <div className="service-card" data-aos="fade-up">
        <h3>Buy Property</h3>
        <p>Find the best homes and investment properties that match your needs.</p>
      </div>

      <div className="service-card" data-aos="fade-up">
        <h3>Sell Property</h3>
        <p>Get the best value for your property with our expert market guidance.</p>
      </div>

      <div className="service-card" data-aos="fade-up">
        <h3>Rent Property</h3>
        <p>Discover rental homes that fit your lifestyle and budget.</p>
      </div>
    </div>
  </section>

  <section className="cta-section">
    <div className="hero-logo">
    <img src="/images/logo.png" alt="Sahni Realtors Logo" data-aos="zoom-in"/>
    </div>

    <h2>Looking to Sell or Rent Your Property?</h2>
    <p>Submit your property details and get a free valuation.</p>
    <a href="Rent.html" className="btn">Get Your Home's Value</a>
  </section>

  <footer className="footer">
    <p>© 2026 Sahni Realtors. All rights reserved.</p>
    <p> Shop no 22, DDA Market Rd, Pocket 3, Mayur Vihar Phase I, Pocket 3, Mayur Vihar, New Delhi, Delhi, 110091, India </p>
  </footer>

  </>
  );
}

export default Home;