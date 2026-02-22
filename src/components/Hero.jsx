function Hero() {
  return (
    <section className="hero">
      {/* your hero content */}

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
      <img src="/bg3.jpg" alt="Building" className="hero-building" />
    </div>
  </section>
  );
}

export default Hero;