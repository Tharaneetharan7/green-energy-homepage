import "./About.css";

const features = [
  "Artificial Intelligence",
  "Machine Learning Models",
  "Deep Learning Models",
  "Power BI Analytics Dashboard",
  "Sustainable Energy Management",
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="about-subtitle">About Our Platform</p>

          <h2 className="about-title">
            AI-Driven Renewable Energy Prediction Platform
          </h2>

          <p className="about-description">
            Our platform combines Artificial Intelligence, Machine Learning,
            Deep Learning, and Data Analytics to improve renewable-energy
            prediction accuracy. The solution supports wind energy, solar
            irradiance, solar power generation, electricity consumption, and
            electricity price forecasting while promoting sustainable energy
            management.
          </p>

          <div className="about-features">
            {features.map((feature) => (
              <div className="feature-item" key={feature}>
                <span className="feature-check" aria-hidden="true">
                  ✓
                </span>

                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <article className="about-image-card">
            <div className="about-icon" aria-hidden="true">
              🌍
            </div>

            <h3>Green Future</h3>

            <p>
              AI helping create a sustainable, intelligent, and data-driven
              energy future.
            </p>

            <div className="about-stat">
              <strong>5</strong>
              <span>AI Prediction Modules</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;