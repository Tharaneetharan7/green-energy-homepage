import "./PredictionCards.css";

function PredictionCards() {
  return (
    <section className="prediction-section" id="predictions">

      <div className="prediction-container">

        {/* Section Heading */}

        <div className="prediction-header">

          <h2>AI Prediction Summary</h2>

          <p>
            Real-time renewable energy prediction powered by Artificial Intelligence
            and Machine Learning models.
          </p>

        </div>

        {/* Prediction Cards Grid */}

        <div className="prediction-grid">

          {/* Wind Energy */}

          <div className="prediction-card">

            <div className="prediction-icon">
              🌬️
            </div>

            <h3>Wind Energy</h3>

            <h1>5.82 MW</h1>

            <p className="prediction-status">
              ↑ 4.8% Today
            </p>

            <button className="prediction-button">
              View Details
            </button>

          </div>

          {/* Solar Irradiance */}

          <div className="prediction-card">

            <div className="prediction-icon">
              ☀️
            </div>

            <h3>Solar Irradiance</h3>

            <h1>820 W/m²</h1>

            <p className="prediction-status">
              Sunny Conditions
            </p>

            <button className="prediction-button">
              View Details
            </button>

          </div>

          {/* Energy Consumption */}

          <div className="prediction-card">

            <div className="prediction-icon">
              ⚡
            </div>

            <h3>Energy Consumption</h3>

            <h1>1250 kWh</h1>

            <p className="prediction-status">
              ↓ 2.3% Optimised
            </p>

            <button className="prediction-button">
              View Details
            </button>

          </div>

          {/* Electricity Price */}

          <div className="prediction-card">

            <div className="prediction-icon">
              💰
            </div>

            <h3>Electricity Price</h3>

            <h1>$0.23</h1>

            <p className="prediction-status">
              Stable Forecast
            </p>

            <button className="prediction-button">
              View Details
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PredictionCards;