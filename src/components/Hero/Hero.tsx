import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-layout">
          <div className="hero-content">
            <p className="hero-eyebrow">
              SMART FORECASTING FOR A CLEANER FUTURE
            </p>

            <h1 className="hero-title">
              <span className="hero-title-line">AI-Driven</span>
              <span className="hero-title-highlight">Renewable Energy</span>
              <span className="hero-title-line">Prediction</span>
            </h1>

            <p className="hero-description">
              Harnessing artificial intelligence to predict renewable-energy
              generation, optimise energy usage, and support a sustainable
              future.
            </p>

            <div className="hero-actions">
              <a
                href="#predictions"
                className="hero-button hero-button-primary"
              >
                Explore Predictions
              </a>

              <a
                href="#dashboard"
                className="hero-button hero-button-secondary"
              >
                View Dashboard
              </a>

              <a
                href="#join"
                className="hero-button hero-button-secondary"
              >
                Join Green Energy
              </a>
            </div>
          </div>

          <aside className="mission-card">
            <div className="mission-heading">
              <span className="mission-icon">🌿</span>
              <h2>Our Mission</h2>
            </div>

            <p>
              To empower a cleaner, smarter, and greener world through accurate
              energy predictions and data-driven sustainability.
            </p>

            <div className="mission-divider" />

            <strong>100%</strong>
            <small>Sustainable Future</small>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;