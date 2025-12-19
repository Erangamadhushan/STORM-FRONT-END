import React, { use, useState, useEffect } from 'react'; // Import React and useState hook
import { WatchIcon, TextAlignEnd } from 'lucide-react'; // Import icons from lucide-react
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook
import { getCountryCode } from "../../utils/country.code"; // Import the utility function
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { isAuthenticated, user, logout } = useAuth();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const code = isAuthenticated && getCountryCode(user.shippingAddress.country);

    return (
        <>
            <div className="flex justify-between sticky top-0 left-0 z-50 lg:justify-around items-center h-20 bg-transparent backdrop-blur-md text-white px-4">
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
                        <li><a href="/terms-and-conditions" className="">Guarantee</a></li>
                        <li><a href="/contact" className="">Contact Us</a></li>
                        <li>
                            <a href="/buy-watches" 
                            className=" bg-lime-500 p-2 rounded-md text-black font-semibold"
                            >Pre-order - $1000</a>
                        </li>
                    </ul>
                </nav>
                {
                isAuthenticated ? (
                    <div className="hidden lg:block">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-6 focus:outline-none"
                            >
                            <p className="text-sm flex items-center gap-2">
                                {code && (
                                    <img
                                        src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                                        alt={user.shippingAddress.country}
                                        title={user.shippingAddress.country}
                                        className="rounded-full w-8 h-7"
                                    />
                                )}
                            </p>
                            <img
                                src={user.avatar || "/avatar.png"}
                                alt="profile"
                                className="w-8 h-8 rounded-full border offset ring-offset-3 ring-green-500 object-cover"
                            />
                        </button>

                        {open && (
                            <div className="absolute top-20 right-4 bg-gray-800 text-white rounded-md shadow-lg w-48">
                                <div className="p-4 border-b border-gray-700">
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="text-sm flex items-center gap-2">
                                        {code && (
                                            <img
                                                src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                                                alt={user.shippingAddress.country}
                                                title={user.shippingAddress.country}
                                                className="rounded-sm"
                                            />
                                        )}
                                        {user.shippingAddress.country}
                                    </p>
                                </div>
                                <ul className="py-2">
                                    <li>
                                        <a
                                            href="/user-profile/summary"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/orders"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            Orders
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            onClick={logout}
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="hidden lg:block">
                        <Link to="/login" state={{ from: location.pathname }} className="bg-lime-500 p-2 px-5 rounded-md text-black font-semibold">Login</Link>
                    </div>
                )
                }
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