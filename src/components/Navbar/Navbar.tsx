import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [predictionsOpen, setPredictionsOpen] = useState(false);

  function togglePredictions() {
    setPredictionsOpen((currentValue) => !currentValue);
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-symbol">🌿</span>

          <span className="logo-text">
            GREEN <strong>ENERGY</strong>
          </span>
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#renewable-energy">Renewable Energy</a>
          <a href="#sustainability">Sustainability</a>

          <div className="predictions-menu">
            <button
              type="button"
              className="predictions-button"
              onClick={togglePredictions}
              aria-expanded={predictionsOpen}
            >
              Predictions
              <span className="dropdown-arrow">
                {predictionsOpen ? "▲" : "▼"}
              </span>
            </button>

            {predictionsOpen && (
              <div className="predictions-dropdown">
                <a href="#wind-energy">Wind Energy</a>
                <a href="#solar-irradiance">Solar Irradiance</a>
                <a href="#solar-energy">Solar Energy</a>
                <a href="#energy-consumption">Energy Consumption</a>
                <a href="#electricity-price">Electricity Price</a>
              </div>
            )}
          </div>

          <a href="#join">Join Green Energy</a>
          <a href="#login">Login</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;