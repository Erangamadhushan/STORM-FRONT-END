import React from 'react';
import Header from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        {/* Main content goes here */}
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
