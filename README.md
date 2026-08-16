# 🌱 Renewable Energy Prediction Platform

**Five sources. One grid. One intelligent platform.**

An AI-powered renewable energy forecasting and analytics platform designed to predict renewable-energy generation, electricity consumption, and electricity prices using **Machine Learning, Deep Learning, Data Analytics, and modern web technologies**.

The project is being developed as a full-stack renewable-energy intelligence platform, evolving from academic research into a practical web application.

---

## 🌍 Project Overview

Renewable-energy generation is naturally variable because wind, solar radiation, weather conditions, water availability, and electricity demand continuously change.

The **Renewable Energy Prediction Platform** aims to combine multiple forecasting capabilities within a single application to support:

* Renewable-energy forecasting
* Electricity-demand forecasting
* Electricity-price forecasting
* Energy planning
* Sustainability analysis
* Data-driven decision-making
* Power BI analytics

The platform will eventually integrate:

**React Frontend → Backend API → MySQL Database → ML/DL Models → Power BI Analytics**

---

## ⚡ Prediction Capabilities

The platform is designed around the following prediction and analytics modules.

### 🌬️ Wind Energy Prediction

Forecast wind-power generation using turbine and weather information such as:

* Wind speed
* Wind direction
* Temperature
* Turbine operating data
* Historical power generation

Example models:

`CNN-LSTM • GRU • XGBoost • Random Forest • LSTM`

---

### ☀️ Solar Irradiance Prediction

Predict solar radiation using environmental and atmospheric variables including:

* Temperature
* Humidity
* Cloud cover
* Atmospheric pressure
* Solar angles
* Historical irradiance

Example models:

`LSTM • Bi-LSTM • Random Forest • CNN-LSTM`

---

### 🔆 Solar Energy Prediction

Estimate solar-power generation using variables such as:

* Solar irradiance
* Panel capacity
* Temperature
* Panel efficiency
* Tilt
* Orientation

Example models:

`CNN-LSTM • ANN/MLP • XGBoost • LSTM`

---

### 💧 Hydropower Prediction

A planned forecasting module for predicting hydropower generation using environmental, water-flow, and historical generation information.

This module will extend the platform toward multi-source renewable-energy forecasting.

---

### ⚡ Energy Consumption Forecasting

Forecast electricity demand to help identify consumption patterns and peak-demand periods.

Potential applications include:

* Demand forecasting
* Peak-load identification
* Energy optimisation
* Grid planning
* Household energy planning

Example models:

`LSTM • Transformer • Random Forest • XGBoost`

---

### 💰 Electricity Price Prediction

Forecast electricity prices using information such as:

* Electricity demand
* Renewable generation
* Weather conditions
* Historical electricity prices
* Market-related variables

Example models:

`XGBoost • Gradient Boosting • LSTM • Random Forest`

---

## 🤖 Machine Learning & Deep Learning

The project explores and benchmarks multiple machine-learning and deep-learning architectures.

### Machine Learning

* Linear Regression
* Random Forest
* Gradient Boosting
* XGBoost

### Deep Learning

* Artificial Neural Network / MLP
* LSTM
* Bi-LSTM
* GRU
* CNN-LSTM
* Transformer

Model performance can be evaluated using metrics such as:

* MAE
* MSE
* RMSE
* MAPE
* R² Score

---

## 📊 Power BI Analytics

Power BI will be integrated into the platform to provide interactive analytics and model-performance visualisation.

Planned dashboards include:

* Actual vs Predicted Energy
* Renewable Generation Trends
* Electricity Consumption Trends
* Electricity Price Trends
* Model Performance Comparison
* Forecast Accuracy
* Sustainability KPIs
* Energy-source comparison

---

## 💻 Frontend Development

The frontend is being developed using:

* React
* TypeScript
* HTML
* CSS
* Vite
* Responsive Web Design

The interface follows a renewable-energy visual theme using green, white, and energy-related design elements.

---

## 🧩 Current Frontend Components

The application is being developed using reusable React components.

```text
src/
│
├── assets/
│   └── hero.png
│
├── components/
│   ├── About/
│   ├── Cards/
│   ├── Common/
│   ├── Dashboard/
│   ├── DashboardPreview/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── PredictionCards/
│   ├── RenewableEnergy/
│   └── Sustainability/
│
├── hooks/
│
├── pages/
│
├── App.tsx
├── main.tsx
└── index.css
```

The exact structure may continue evolving as additional functionality is implemented.

---

## 🏠 Website Sections

The platform is being designed around sections such as:

1. Home
2. About
3. Renewable Energy
4. Sustainability
5. Prediction Summary
6. Renewable Energy Prediction Modules
7. Dashboard Preview
8. Join Green Energy
9. Login
10. Help
11. Contact Us

Additional prediction pages and user functionality will be introduced progressively.

---

## 🎨 Current UI Features

The frontend currently includes or is being developed with:

* Responsive navigation
* Hero section
* AI-driven renewable-energy branding
* Mission card
* Prediction summary cards
* About section
* Renewable-energy capability cards
* Sustainability section
* Dashboard preview
* Responsive grid layouts
* Hover effects
* Fade-in animations
* Mobile-responsive layouts

---

## 🗄️ Database — Planned

The next major architecture layer will introduce a **MySQL database**.

The database is expected to support information such as:

* Users
* Prediction records
* Renewable-energy data
* Wind-energy forecasts
* Solar forecasts
* Hydropower forecasts
* Electricity-consumption forecasts
* Electricity-price forecasts
* Model information
* Model-performance metrics

Example architecture:

```text
React Frontend
      ↓
Backend REST API
      ↓
MySQL Database
      ↓
Machine Learning / Deep Learning Models
      ↓
Prediction Results
      ↓
React UI + Power BI
```

---

## 🔧 Backend — Planned

After the database layer is established, a backend API will connect the frontend with the database and prediction models.

Potential technologies include:

* Python
* FastAPI / Flask
* REST API
* MySQL
* SQLAlchemy
* ML/DL model APIs

The backend will eventually allow the React application to request predictions dynamically rather than displaying static demonstration values.

---

## 🏗️ System Architecture

```text
                    USER
                      │
                      ▼
              React + TypeScript
                 Frontend
                      │
                      ▼
                 REST API
              FastAPI / Flask
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
      MySQL Database        Prediction Engine
                                  │
                                  ▼
                         ML / DL Models
                                  │
                                  ▼
                           Forecast Results
                                  │
                  ┌───────────────┴───────────────┐
                  ▼                               ▼
             React Website                  Power BI
```

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

```bash
cd green-energy-homepage
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display the local development address, normally:

```text
http://localhost:5173/
```

Open the address in your browser.

---

## 🏗️ Production Build

Create a production build using:

```bash
npm run build
```

The generated production files will be created inside the:

```text
dist/
```

directory.

You can test the production build locally using:

```bash
npm run preview
```

---

## 🌐 Deployment

The frontend can be deployed using Vercel.

Current development/deployment workflow:

```text
Local Development
        ↓
Git
        ↓
GitHub
        ↓
Vercel
        ↓
Live Website
```

---

## 🗺️ Development Roadmap

### Phase 1 — Frontend Development

* [x] React + TypeScript project setup
* [x] Navigation bar
* [x] Hero section
* [x] Mission card
* [x] Prediction summary cards
* [x] About section
* [x] Renewable-energy capability section
* [x] Sustainability section
* [x] Dashboard preview
* [ ] Additional prediction pages
* [ ] Login and registration interface
* [ ] Contact and Help sections
* [ ] Footer
* [ ] Complete responsive testing

### Phase 2 — Database

* [ ] Design database architecture
* [ ] Create ER diagram
* [ ] Create MySQL database
* [ ] Create tables and relationships
* [ ] Insert sample data
* [ ] Connect backend to MySQL

### Phase 3 — Backend

* [ ] Build REST API
* [ ] Connect frontend and backend
* [ ] Implement authentication
* [ ] Prediction API endpoints
* [ ] Database CRUD operations

### Phase 4 — AI Integration

* [ ] Integrate trained ML/DL models
* [ ] Wind prediction API
* [ ] Solar irradiance prediction API
* [ ] Solar-energy prediction API
* [ ] Hydropower prediction API
* [ ] Energy-consumption prediction API
* [ ] Electricity-price prediction API

### Phase 5 — Analytics

* [ ] Develop Power BI dashboards
* [ ] Model-performance dashboard
* [ ] Energy forecast dashboard
* [ ] Sustainability dashboard
* [ ] Integrate analytics into the platform

### Phase 6 — Production Deployment

* [ ] Frontend deployment
* [ ] Backend deployment
* [ ] Cloud MySQL database
* [ ] API security
* [ ] Testing
* [ ] Performance optimisation
* [ ] Production release

---

## 🎯 Project Objectives

The key objectives of this project are to:

* Improve renewable-energy forecasting using AI.
* Compare multiple machine-learning and deep-learning architectures.
* Forecast electricity generation and consumption.
* Support sustainable energy management.
* Provide understandable visual analytics.
* Connect AI predictions with an accessible web interface.
* Develop a scalable full-stack renewable-energy platform.

---

## 🌱 Sustainability Vision

The long-term goal is to create an intelligent energy platform capable of connecting:

**Renewable Generation + Energy Demand + Electricity Prices + AI Forecasting + Analytics**

By combining these capabilities, the platform aims to support smarter energy planning and a more sustainable energy future.

---

## 🔮 Future Enhancements

Future versions may include:

* Real-time weather API integration
* Real-time renewable-energy predictions
* Interactive prediction charts
* Geographic energy visualisation
* User authentication
* Personalised dashboards
* Household energy recommendations
* Carbon-emission analysis
* Automated model selection
* Explainable AI using SHAP
* Prediction confidence intervals
* Cloud-based model deployment
* IoT/smart-meter integration
* Mobile-responsive prediction dashboard

---

## 🛠️ Technology Stack

| Layer              | Technologies                 |
| ------------------ | ---------------------------- |
| Frontend           | React, TypeScript, HTML, CSS |
| Build Tool         | Vite                         |
| Database           | MySQL                        |
| Backend            | Python, FastAPI / Flask      |
| Machine Learning   | Scikit-learn, XGBoost        |
| Deep Learning      | TensorFlow / Keras           |
| Analytics          | Power BI                     |
| Version Control    | Git, GitHub                  |
| Deployment         | Vercel                       |
| Model Optimisation | Optuna                       |
| Explainable AI     | SHAP                         |

---

## 📚 Project Background

This platform builds on renewable-energy prediction and energy forecasting research involving Machine Learning, Deep Learning, Data Science, and sustainability.

The project is being expanded beyond model experimentation into a **production-oriented full-stack application**, bringing together AI prediction models, database technologies, APIs, web development, and business intelligence.

---

## 👨‍💻 Author

**Tharaneetharan Thavarasan**

Master of Information Technology — Data Science & Artificial Intelligence

Areas of interest:

* Artificial Intelligence
* Machine Learning
* Deep Learning
* Data Analytics
* Renewable Energy
* Sustainability
* Full-Stack Development
* Power BI
* ERP & Enterprise Systems

---

## 📌 Project Status

**🚧 Active Development**

Current focus:

**Frontend Development → MySQL Database → Backend API → AI Model Integration → Power BI Integration → Production Deployment**

---

## ⭐ Project Vision

> **Five sources. One grid. One intelligent platform.**

Using Artificial Intelligence and Data Science to make renewable-energy forecasting more accessible, understandable, and useful for sustainable energy decision-making.
