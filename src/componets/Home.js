import React from 'react';
import './Home.css';
import taxDescription from '../assets/taxtrial.jpg'; // SVG file path

const HomePage = () => {
  const features = [
    {
      title: "History of Taxes",
      description: "Understand how taxation has evolved over the centuries and its impact on economies.",
    },
    {
      title: "Types of Taxes",
      description: "Learn about income tax, corporate tax, VAT, and more in our comprehensive guide.",
    },
    {
      title: "Tax Optimization",
      description: "Discover legal strategies to minimize tax liabilities and save more.",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Tax Training Simplified</h1>
          <p>
            Unlock the world of taxes with our interactive training sessions. Learn
            everything from the basics to advanced techniques in an engaging format.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img id="sideImg" src={taxDescription} alt="Tax Training Illustration" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Explore Our Features</h2>
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest tax news and training opportunities.</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
