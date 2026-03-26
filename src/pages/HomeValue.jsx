import React from "react";

function HomeValue() {
  return (
    <div className="home-value-page">

      {/* HERO SECTION */}
      <section className="value-hero" data-aos="fade-up">
        <h1 className="heading">What Is Your Home Worth?</h1>

        <p className="value-sub">
          Whether you're planning to sell or rent, knowing your property's true
          market value is the first step toward making a smart decision.
        </p>

        <p className="value-sub">
          At Sahni Realtors, we provide expert valuations based on real market
          data, location trends, and demand — so you get the best return from
          your property.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="value-form-section">

        <h2 className="heading2" data-aos="fade-up">
          Tell Us About Your Property
        </h2>

        <p className="value-sub" data-aos="fade-up" data-aos-delay="100">
          Fill in a few details and we will contact you with an estimate.
        </p>

        <form
          className="value-form"
          data-aos="zoom-in"
          data-aos-delay="200"
        >

          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" />

          <select required>
            <option value="">I want to</option>
            <option>Sell my property</option>
            <option>Rent out my property</option>
          </select>

          <select required>
            <option value="">Property Type</option>
            <option>Apartment</option>
            <option>Builder Floor</option>
            <option>Independent House</option>
            <option>Plot</option>
          </select>

          <input type="text" placeholder="Property Location" />

          <div className="double">
            <input type="number" placeholder="# of Bedrooms" />
            <input type="number" placeholder="# of Bathrooms" />
          </div>

          <input type="text" placeholder="Approx. Size (sq ft)" />

          <textarea placeholder="Anything else you'd like us to know?"></textarea>

          <button type="submit">Submit</button>

        </form>

      </section>

    </div>
  );
}

export default HomeValue;