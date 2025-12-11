import React, { useState } from 'react';
import { WatchIcon, TextAlignEnd } from 'lucide-react';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="flex justify-between sticky top-0 left-0 z-50 lg:justify-around items-center h-20 bg-black text-white px-4">
                <div className="flex justify-end">
                    <h1 className="text-xl font-bold text-end">
                        <WatchIcon className="inline-block mr-2" size={20} />
                        Storm Watch
                    </h1>
                </div>
                <div className="block lg:hidden">
                    <TextAlignEnd className="cursor-pointer" onClick={toggleMenu}/>
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex space-x-6">
                        <li><a href="/" className="">Home</a></li>
                        <li><a href="/#brand-experience" className="">Brand Experience</a></li>
                        <li><a href="/#users-manual" className="">Users Manual</a></li>
                        <li><a href="/#guarantee" className="">Guarantee</a></li>
                        <li><a href="/#contact-us" className="">Contact Us</a></li>
                        <li>
                            <a href="/buy-watches" 
                            className=" bg-lime-500 p-2 rounded-md text-black font-semibold"
                            >Pre-order - $1000</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {
                isMenuOpen && (
                    <div className="lg:hidden fixed top-20 w-full z-50 bg-black text-white px-4 pt-5 pb-10">
                        <ul className="space-y-4">
                            <li><a href="/" className="">Home</a></li>
                            <li><a href="/#brand-experience" className="">Brand Experience</a></li>
                            <li><a href="/#users-manual" className="">Users Manual</a></li>
                            <li><a href="/#guarantee" className="">Guarantee</a></li>
                            <li><a href="/#contact-us" className="">Contact Us</a></li>
                            <li>
                                <a href="/buy-watches" 
                                className=" bg-lime-500 p-2 rounded-md text-black font-semibold"
                                >Pre-order - $1000</a>
                            </li>
                        </ul>
                    </div>
                )
            }
        </>

    )
}

export default Header;