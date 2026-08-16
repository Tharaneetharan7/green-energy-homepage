# AI-Driven Renewable Energy Prediction — Homepage

A React + TypeScript marketing/landing page for an AI-powered renewable energy forecasting platform — presenting the prediction modules, a live-style dashboard preview, and the sustainability story behind the project.

🔗 **Live:** [green-energy-homepage.vercel.app](https://green-energy-homepage.vercel.app)

> **Status:** Static front-end. The forecast numbers shown are placeholder/mock data — this site isn't wired to a live model API yet. See [Relationship to the wider project](#relationship-to-the-wider-project) below.

## What's on the page

| Section | What it shows |
|---|---|
| **Hero** | Mission statement and primary CTAs (Explore Predictions, View Dashboard, Join Green Energy) |
| **Prediction Cards** | Snapshot cards for Wind Energy, Solar Irradiance, Energy Consumption, and Electricity Price |
| **About** | Project background |
| **Renewable Energy** | Six forecasting modules, each naming the model architectures behind it: Wind (CNN-LSTM, GRU, XGBoost), Solar Irradiance (LSTM, Bi-LSTM, Random Forest), Solar Energy (CNN-LSTM, ANN, XGBoost), Energy Consumption (LSTM, Transformer, Random Forest), Electricity Price (XGBoost, Gradient Boosting, LSTM), and a Power BI analytics module |
| **Sustainability** | Sustainability messaging/impact section |
| **Dashboard Preview** | A Power BI–style analytics panel mockup — KPIs, an actual-vs-predicted chart placeholder, and a feature checklist for the eventual full dashboard |

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build tooling
- Component-scoped CSS (no framework — each component ships its own `.css`)
- ESLint (flat config) for linting

No routing library or data-fetching layer is wired in yet — it's currently a single scrollable page (`App.tsx` composes all sections in order, navigated via in-page anchors like `#predictions`, `#dashboard`).

## Project structure

```
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── PredictionCards/
│   ├── About/
│   ├── RenewableEnergy/
│   ├── Sustainability/
│   └── DashboardPreview/
├── pages/
│   └── WindPrediction        # placeholder — reserved for a future routed detail page
├── App.tsx
├── main.tsx
└── index.css
```

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

## Relationship to the wider project

This site is the front-end face of a larger **Renewable Energy Prediction Platform** — a full-stack build (FastAPI backend, PostgreSQL, five forecasting domains: wind, solar irradiance, solar energy, hydro, demand) evolving out of an MSc research project. The six modules in the "Renewable Energy" section above map directly to that platform's forecasting domains.

Model training and evaluation work currently lives separately in [`RenewableEnergyForecast`](https://github.com/Tharaneetharan7/RenewableEnergyForecast) (wind — the only domain audited and built so far). The two repos are being combined into a single monorepo, with this homepage becoming the `frontend/` and the model work becoming `research/wind/`.

**Near-term direction for this repo specifically:**
- Replace the mock numbers in Prediction Cards / Dashboard Preview with real forecast values once a backend API exists
- Flesh out `pages/WindPrediction` (currently empty) into a real routed detail view — will need a router added, e.g. React Router
- Wire the "Explore Module" links in the Renewable Energy section to actual per-domain pages rather than in-page anchors

## Author

**Tharaneetharan Thavarasan**
ERP Consultant (SAP FICO / Microsoft D365 F&O) | Data & Business Analyst | AI/ML
[LinkedIn](https://www.linkedin.com/in/tharaneetharan-thavarasan-52754940) · [Portfolio](https://tharaneetharan7.github.io/tharanee-portfolio/#home) · [Medium](https://medium.com/@ttharaneetharan7)
