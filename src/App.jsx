
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/About.css";
import "./assets/css/Contact.css";
import "./assets/css/Index.css";
import "./assets/css/Services.css";
import "./assets/css/Team.css";


import Navbar from "./component/Navbar";
import Intro from "./component/Intro";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Services from "./Pages/Services";
import Footer from "./component/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Intro/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
