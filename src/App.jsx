import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutHeader from "./components/AboutUs/AboutHeader";
import Service from "./components/Services/Service";
import Casestudies from "./components/Case/caseStudies";
import Csr from "./components/CSR/Csr";
import Contact from "./components/contact/Contact";
import Product from "./pages/Product";
import CaseExplain from "./components/Case/CaseExplain";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; // Add useTheme import

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// Separate component to use the theme hook
function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className={`min-h-screen ${isDarkMode ? "bg-n-8" : "bg-gray-100"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutHeader />} />
          <Route path="/service" element={<Service />} />
          <Route path="/casestudies" element={<Casestudies />} />
          <Route path="/csr" element={<Csr />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/casestudies/caseexpline" element={<CaseExplain />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
