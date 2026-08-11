import "./DashboardPreview.css";

const dashboardFeatures = [
  "Wind Energy Forecast",
  "Solar Irradiance Forecast",
  "Solar Energy Forecast",
  "Electricity Consumption Forecast",
  "Electricity Price Forecast",
  "AI Model Performance Metrics",
];

function DashboardPreview() {
  return (
    <section
      className="dashboard-preview-section"
      id="dashboard"
      aria-labelledby="dashboard-preview-title"
    >
      <div className="dashboard-preview-container">
        <div className="dashboard-preview-content">
          <p className="dashboard-preview-subtitle">
            Business Intelligence
          </p>

          <h2
            className="dashboard-preview-title"
            id="dashboard-preview-title"
          >
            Renewable Energy Analytics Dashboard
          </h2>

          <p className="dashboard-preview-description">
            Transform renewable-energy predictions into clear business
            intelligence through interactive analytics, forecast comparisons,
            sustainability metrics, and model-performance insights.
          </p>

          <div className="dashboard-feature-list">
            {dashboardFeatures.map((feature) => (
              <div
                className="dashboard-feature-item"
                key={feature}
              >
                <span aria-hidden="true">✓</span>
                {feature}
              </div>
            ))}
          </div>

          <a
            className="dashboard-preview-button"
            href="#dashboard-preview-panel"
          >
            View Dashboard Preview
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="dashboard-preview-panel"
          id="dashboard-preview-panel"
        >
          <div className="dashboard-toolbar">
            <div>
              <span className="dashboard-status-dot" />
              <strong>Green Energy Analytics</strong>
            </div>

            <span>Power BI Preview</span>
          </div>

          <div className="dashboard-kpis">
            <article>
              <span>Wind Forecast</span>
              <strong>5.82 MW</strong>
              <small>+4.8%</small>
            </article>

            <article>
              <span>Solar Irradiance</span>
              <strong>820 W/m²</strong>
              <small>Optimal</small>
            </article>

            <article>
              <span>Consumption</span>
              <strong>1,250 kWh</strong>
              <small>-2.3%</small>
            </article>
          </div>

          <div className="dashboard-chart">
            <div className="dashboard-chart-header">
              <div>
                <span>Forecast Performance</span>
                <strong>Actual vs Predicted</strong>
              </div>

              <span>24 Hours</span>
            </div>

            <div className="chart-placeholder">
              <div className="chart-grid-line line-one" />
              <div className="chart-grid-line line-two" />
              <div className="chart-grid-line line-three" />

              <div className="chart-line actual-line" />
              <div className="chart-line predicted-line" />

              <p>Power BI / Forecast chart placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;