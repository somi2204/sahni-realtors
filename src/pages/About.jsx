import React from "react";

function About() {
  return (
    <>
      {/* Intro Section */}
      <section className="about-intro" data-aos="fade-up">
        <h1>About Sahni Properties</h1>

        <p>
          Sahni Properties has been serving clients in Mayur Vihar Phase 1, Delhi since 2000,
          offering expert property consulting and real estate services.
          With deep knowledge of the local market, we help clients buy,
          sell, and manage properties with confidence.
        </p>
      </section>

      {/* Mission & Expertise */}
      <section className="about-section" data-aos="fade-up" data-aos-delay="100">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide honest and reliable real estate guidance,
          helping clients make informed decisions and achieve their property goals.
        </p>

        <h2>Our Expertise</h2>
        <p>
          We specialize in residential plots and rental properties,
          offering tailored solutions that maximize property value.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section" data-aos="fade-up" data-aos-delay="200">
        <h2>Why Choose Us</h2>

        <ul>
          <li>✔ Customized solutions for every client</li>
          <li>✔ Strong local market knowledge</li>
          <li>✔ End-to-end property support</li>
          <li>✔ Client-first approach</li>
        </ul>
      </section>

      {/* Quick Info */}
      <section className="about-section" data-aos="fade-up" data-aos-delay="300">
        <h2>Quick Information</h2>

        <p><strong>Established:</strong> 2000</p>
        <p><strong>Services:</strong> Buying, Selling, Renting</p>
        <p><strong>Specialization:</strong> Residential Plots</p>
      </section>

      {/* Visit Section */}
      <section className="about-section visit-section">
        <div className="visit-left" data-aos="fade-right">
          <h2>Visit Us</h2>

          <p>
            Shop No – 22, Near Metro Station,<br />
            Pillar No. 28 Pink Line, Pocket – 3,<br />
            Mayur Vihar Phase I, Delhi – 110091
          </p>

          <h3>Working Hours</h3>
          <p>
            Tuesday – Sunday: 9:00 AM – 8:30 PM<br />
            Monday: Closed
          </p>
        </div>

        <div className="visit-map" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.793478528538!2d77.29707997389875!3d28.605971775679173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd309eebed77%3A0x6fbb6f70ca14c445!2sSahni%20Properties%20-%20Realtors%20and%20Developers!5e0!3m2!1sen!2sin!4v1771326343998!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sahni Realtors Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default About;