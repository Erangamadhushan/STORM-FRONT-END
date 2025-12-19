import React from 'react'
import { WatchIcon } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center min-h-[300px] bg-black text-white px-2 pt-10 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-6">
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-bold text-end flex flex-col">
                    <WatchIcon className="inline-block mr-2" size={60} /><br/>
                    <span className="text-2xl md:text-4xl">Storm Watch</span>
                </h1>
            </div>
            <div className="p-5 bg-gradient-to-b from-gray-900 to-black rounded-lg">
                <h1 className="text-xl font-bold pl-20 mb-10 text-lime-500">Storm</h1>
                <ul className="mt-2 space-y-3 pl-20">
                    <li><a href="/about" className="hover:underline">Our Company</a></li>
                    <li><a href="/about" className="hover:underline">Our Story</a></li>
                    <li><a href="/careers" className="hover:underline">Careers</a></li>
                    <li><a href="/site-map" className="hover:underline">Site Map</a></li>
                </ul>
            </div>
            <div className="p-5">
                <h1 className="text-xl font-bold pl-20 mb-10 text-gray-400">Support</h1>
                <ul className="mt-2 space-y-3 pl-20">
                    <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    <li><a href="/customer-care" className="hover:underline">Customer Care</a></li>
                    <li><a href="#warranty" className="hover:underline">Warranty</a></li>
                    <li><a href="#shipping" className="hover:underline">Shipping</a></li>
                    <li><a href="#track-order" className="hover:underline">Track Order</a></li>
                </ul>
            </div>
            <div className="p-5">
                <h1 className="text-xl font-bold pl-20 mb-10 text-gray-400">Social Media</h1>
                <ul className="mt-2 space-y-3 pl-20">
                    <li><a href="#instagram" className="hover:underline">Instagram</a></li>
                    <li><a href="#facebook" className="hover:underline">Facebook</a></li>
                    <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
                    <li><a href="#twitter" className="hover:underline">Twitter</a></li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-6 items-baseline">
            <div className="p-5">
                <p>
                    Find strength in numbers. Making progress as an athlete requires accurate data and insights.
                </p>
            </div>
            <div className="text-center md:text-justify">
                <p>Documentation</p>
            </div>
            <div className="text-center md:text-justify">
                <p>Privacy Policy</p>
            </div>
            <div className="text-center md:text-justify">
                <p><a href="/terms-and-conditions">Terms & Conditions</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer;
