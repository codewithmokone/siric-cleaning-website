import Footer from "./components/footer/Footer";
import HeroSection from "./components/herosection/HeroSection";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import CustomizedSolutions from "./components/main/CustomizedSolutions";
import Mission from "./components/main/Mission";
import Services from "./components/main/Services";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Mission />
      <CustomizedSolutions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
