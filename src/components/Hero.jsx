function Hero() {
  return (
    <section className="hero">
      {/* your hero content */}


    <div className="hero-left">
      <span className="tagline" data-aos="fade-down" data-aos-delay="100">Trusted Real Estate Services</span>
      <p className="since" data-aos="fade-down" data-aos-delay="100">Advancing in Real Estate Since 2000</p>
      <h1 data-aos="fade-up" data-aos-delay="300">Find Your Perfect Home</h1>
      <p className="intro" data-aos="fade-up" data-aos-delay="400">Sahni Realtors is your trusted partner in buying, selling, and renting
    residential and commercial properties with transparency and expertise.</p>
    <div className="contact-buttons" data-aos="zoom-in" data-aos-delay="500">

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

  <div className="hero-right" data-aos="fade-left" data-aos-delay="300">
    <div className="hero-box">
  <h3>Your Dream Home Awaits</h3>

  <p>
    Explore properties or learn more about our services.
  </p>

  <div className="hero-cta-buttons">
  <a href="/about" className="btn">
    Learn More About Us
  </a>

  <a href="/contact" className="btn secondary-btn">
    Work With Us
  </a>
  </div>
</div>
</div>
    
  </section>
  );
}

export default Hero;
