import React from 'react';
import { WatchIcon } from 'lucide-react';
function Header() {
    return (
        <div className="flex justify-around items-center h-20 bg-black text-white px-4">
            <div className="flex justify-end">
                <h1 className="text-xl font-bold text-end">
                    <WatchIcon className="inline-block mr-2" size={20} />
                    Storm Watch
                </h1>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="">Home</a></li>
                    <li><a href="#brand-experience" className="">Brand Experience</a></li>
                    <li><a href="#users-manual" className="">Users Manual</a></li>
                    <li><a href="#guarantee" className="">Guarantee</a></li>
                    <li><a href="#contact-us" className="">Contact Us</a></li>
                    <li>
                        <a href="#pre-order" 
                        className=" bg-lime-500 p-2 rounded-md text-black font-semibold"
                        >Pre-order - $1000</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;