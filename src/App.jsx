
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/About.css";
import "./assets/css/Contact.css";
import "./assets/css/Index.css";
import "./assets/css/Services.css";
import "./assets/css/Team.css";


import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Footer from "./components/Footer";
import Services from "./Pages/Services";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
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
