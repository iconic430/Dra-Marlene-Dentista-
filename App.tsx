import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-lilac-50 min-h-screen text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;