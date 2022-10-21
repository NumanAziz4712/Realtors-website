import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Homes from "./components/Homes";
import HomesDisplay from "./components/HomesDisplay";
import Testemonials from "./components/Testemonials";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Testemonials />
      <Homes />
      <HomesDisplay />
      <Footer />
    </div>
  );
}

export default App;
