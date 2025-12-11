import React from 'react'
import { HeroSection } from '../components/HeroSection/HeroSection';
import { Features } from '../components/features/Features';
import { Products } from '../components/products/Products';
import { PreOrder } from '../components/Order/PreOrder';
import { BuyItem } from '../components/BuyItem/BuyItem';

export const Index = () => {
  return (
    <div>
        <main className="bg-black text-white">
            <HeroSection />
            <Features />
            <Products />
            <PreOrder />
            <BuyItem />
        </main>
    </div>
  )
}
