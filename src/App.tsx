import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PredictionCards from "./components/PredictionCards/PredictionCards";
import About from "./components/About/About";
import RenewableEnergy from "./components/RenewableEnergy/RenewableEnergy";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <PredictionCards />
        <About />
        <RenewableEnergy />
      </main>
    </>
  );
}

export default App;