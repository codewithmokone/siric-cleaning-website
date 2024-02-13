import "./App.css";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/herosection/HeroSection";
import Contact from "./components/main/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
