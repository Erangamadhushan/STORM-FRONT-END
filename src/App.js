import React from 'react';
import Header from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Features } from './components/features/Features';
import { Products } from './components/products/Products';
import { PreOrder } from './components/Order/PreOrder';
import { BuyItem } from './components/BuyItem/BuyItem';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        {/* Main content goes here */}
        <HeroSection />
        <Features />
        <Products />
        <PreOrder />
        <BuyItem />
      </main>
      <Footer />
    </>
  );
}

export default App;
