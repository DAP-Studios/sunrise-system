import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const Home: React.FC = () => {
  return (
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
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;