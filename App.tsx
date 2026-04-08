import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AutomationProducts from './components/AutomationProducts';
import Products from './components/Products';
import BrandsCarousel from './components/BrandsCarousel';
import IoTSolutions from './components/IoTSolutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import SEO from './components/SEO';
import { initGA, pageview } from './components/analytics';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sunrise System - Industrial Automation & PLC SCADA Solutions in Vapi, Gujarat | Panel Manufacturing"
        description="Leading industrial automation company in Vapi, Gujarat. Turnkey PLC, SCADA, DCS solutions, panel manufacturing (MCC/PCC), VFD, HMI, instrumentation. Serving Vapi GIDC, Silvassa, Daman, South Gujarat industries. 24/7 support."
        keywords="industrial automation Vapi, PLC programming Vapi, SCADA solutions Gujarat, panel manufacturers Vapi GIDC, automation company Vapi, VFD suppliers Gujarat, HMI Vapi, instrumentation Vapi, electrical panel Vapi, control panel manufacturers, Siemens Vapi, Schneider Electric Vapi, automation Silvassa, panel manufacturers Daman, industrial automation South Gujarat"
        url="https://sunrisesystem.co.in/"
      />
      <div className="font-sans text-dark bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <AutomationProducts />
          <Products />
          <BrandsCarousel />
          <IoTSolutions />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

// Analytics wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics on app mount
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnalyticsWrapper>
    </BrowserRouter>
  );
}

export default App;