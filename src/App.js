import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home_page from "./pages/Home_page";
import About_page from "./pages/About_page";
import Contact_page from "./pages/Contact_page";
import ProjectPage from "./pages/Project_page"; // Import the updated component

// aos animation library
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);
  return (
    <div className="bg-[#282C33]">
{/* react-router-dom */}
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home_page />} />
        <Route path="/projects" element={<ProjectPage />} /> {/* Updated route */}
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
