import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PredictionCards from "./components/PredictionCards/PredictionCards";
import About from "./components/About/About";
import RenewableEnergy from "./components/RenewableEnergy/RenewableEnergy";
import Sustainability from "./components/Sustainability/Sustainability";
import DashboardPreview from "./components/DashboardPreview/DashboardPreview";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PredictionCards />
      <About />
      <RenewableEnergy />
      <Sustainability />
      <DashboardPreview />
    </>
  );
}

export default App;