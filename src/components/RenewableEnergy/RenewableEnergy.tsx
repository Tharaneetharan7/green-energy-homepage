import "./RenewableEnergy.css";

type EnergyService = {
  icon: string;
  title: string;
  description: string;
  model: string;
  link: string;
  theme: string;
};

const energyServices: EnergyService[] = [
  {
    icon: "🌬️",
    title: "Wind Energy Prediction",
    description:
      "Forecast wind-power generation using turbine, weather, wind-speed, and wind-direction data.",
    model: "CNN-LSTM • GRU • XGBoost",
    link: "#wind-energy",
    theme: "wind",
  },
  {
    icon: "☀️",
    title: "Solar Irradiance Prediction",
    description:
      "Predict solar radiation using temperature, humidity, cloud cover, atmospheric pressure, and solar-angle data.",
    model: "LSTM • Bi-LSTM • Random Forest",
    link: "#solar-irradiance",
    theme: "irradiance",
  },
  {
    icon: "🔆",
    title: "Solar Energy Prediction",
    description:
      "Estimate solar-power generation from irradiance, panel capacity, temperature, efficiency, tilt, and orientation.",
    model: "CNN-LSTM • ANN • XGBoost",
    link: "#solar-energy",
    theme: "solar",
  },
  {
    icon: "⚡",
    title: "Energy Consumption Forecasting",
    description:
      "Forecast electricity demand, identify peak periods, and support efficient energy-usage planning.",
    model: "LSTM • Transformer • Random Forest",
    link: "#energy-consumption",
    theme: "consumption",
  },
  {
    icon: "💰",
    title: "Electricity Price Prediction",
    description:
      "Predict future electricity prices using demand, renewable generation, weather, and historical market data.",
    model: "XGBoost • Gradient Boosting • LSTM",
    link: "#electricity-price",
    theme: "price",
  },
  {
    icon: "📊",
    title: "Power BI Analytics",
    description:
      "Explore model performance, actual-versus-predicted results, sustainability metrics, and forecast trends.",
    model: "Power BI • DAX • Data Analytics",
    link: "#dashboard",
    theme: "dashboard",
  },
];

function RenewableEnergy() {
  return (
    <section
      className="renewable-section"
      id="renewable-energy"
      aria-labelledby="renewable-energy-title"
    >
      <div className="renewable-container">
        <header className="renewable-header">
          <p className="renewable-subtitle">Our Prediction Capabilities</p>

          <h2 id="renewable-energy-title" className="renewable-title">
            Intelligent Renewable Energy Solutions
          </h2>

          <p className="renewable-description">
            Explore AI-powered forecasting modules designed to improve energy
            planning, reduce uncertainty, optimise consumption, and support
            sustainable decision-making.
          </p>
        </header>

        <div className="renewable-grid">
          {energyServices.map((service) => (
            <article
              className={`renewable-card renewable-card--${service.theme}`}
              key={service.title}
            >
              <div className="renewable-card-icon" aria-hidden="true">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p className="renewable-card-description">
                {service.description}
              </p>

              <div className="renewable-model">
                <span>Models and tools</span>
                <strong>{service.model}</strong>
              </div>

              <a className="renewable-link" href={service.link}>
                Explore Module
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RenewableEnergy;