import "./Sustainability.css";

type SustainabilityFeature = {
  icon: string;
  title: string;
  description: string;
};

const sustainabilityFeatures: SustainabilityFeature[] = [
  {
    icon: "🌱",
    title: "Reduce Carbon Emissions",
    description:
      "Use accurate renewable-energy forecasting to reduce dependence on fossil-fuel generation and support lower-carbon energy planning.",
  },
  {
    icon: "⚡",
    title: "Smart Energy Optimisation",
    description:
      "Balance renewable generation and electricity demand through AI-powered forecasts and efficient energy-usage decisions.",
  },
  {
    icon: "🌍",
    title: "Renewable Energy Integration",
    description:
      "Improve the integration of wind and solar energy by predicting generation variability and supporting reliable energy systems.",
  },
  {
    icon: "📊",
    title: "Data-Driven Sustainability",
    description:
      "Combine AI predictions, model performance indicators, and Power BI analytics to support measurable sustainability decisions.",
  },
];

function Sustainability() {
  return (
    <section
      className="sustainability-section"
      id="sustainability"
      aria-labelledby="sustainability-title"
    >
      <div className="sustainability-container">
        <header className="sustainability-header">
          <p className="sustainability-subtitle">
            Sustainability Through Intelligence
          </p>

          <h2
            className="sustainability-title"
            id="sustainability-title"
          >
            Building a Cleaner and Smarter Energy Future
          </h2>

          <p className="sustainability-description">
            Artificial Intelligence can support a more sustainable energy
            system by improving renewable-energy forecasting, optimising
            electricity consumption, reducing uncertainty, and enabling
            data-driven environmental decisions.
          </p>
        </header>

        <div className="sustainability-layout">
          <div className="sustainability-feature-grid">
            {sustainabilityFeatures.map((feature) => (
              <article
                className="sustainability-feature-card"
                key={feature.title}
              >
                <div
                  className="sustainability-feature-icon"
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>

                <div>
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="sustainability-impact-card">
            <p className="impact-label">
              Sustainability Impact
            </p>

            <h3>
              Turning Energy Data Into Environmental Action
            </h3>

            <p className="impact-description">
              Our platform connects renewable-energy predictions with
              sustainability analytics to help users understand how smarter
              forecasting can improve energy efficiency and environmental
              performance.
            </p>

            <div className="impact-metrics">
              <div className="impact-metric">
                <strong>5</strong>
                <span>Prediction Modules</span>
              </div>

              <div className="impact-metric">
                <strong>24/7</strong>
                <span>Energy Insights</span>
              </div>

              <div className="impact-metric">
                <strong>AI</strong>
                <span>Driven Decisions</span>
              </div>
            </div>

            <a
              className="sustainability-button"
              href="#dashboard"
            >
              Explore Sustainability Insights
              <span aria-hidden="true">→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;