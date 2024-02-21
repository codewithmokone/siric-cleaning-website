import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
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
      {/* <Router>
        <Switch>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Navbar />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Services />} />
            <Route path="mission" element={<Mission />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
