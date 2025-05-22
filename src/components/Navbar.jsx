import { useState,useEffect, useRef } from "react";
import { FaUser, FaBars } from "react-icons/fa6";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hotels, setHotels] = useState(false);
    const userRef = useRef(null);
    const hotelsRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (userRef.current && !userRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (hotelsRef.current && !hotelsRef.current.contains(event.target)) {
                setHotels(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropDown = () => {
        setHotels((prev) => !prev);
        setHotels(true);
    }
    return (
        <div className='container mx-auto py-5 px-3  flex justify-between items-center'>
            <div>
                <Link to="/" className='font-semibold text-2xl'>Livo<span className='text-yellow-800 '>RA</span></Link>
            </div>
            {/* Hamburger (Mobile Only) */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                    <FaBars />
                </button>
            </div>
            <div className='hidden md:block lg:block'>
                <ul className='flex gap-5 items-center text-lg'>
                    <li
                        ref={hotelsRef}
                        className="flex items-center cursor-pointer relative"
                        onClick={() => toggleDropDown()}

                    >
                        <span className="mr-1">
                            {hotels ? <RxCaretUp size={25} /> : <RxCaretDown size={25} />}
                        </span>
                        Hotels

                        {hotels && (
                            <div className="absolute top-10 mt-2 w-[320px] bg-white shadow-lg rounded-lg border border-gray-200 z-10 p-2">
                                <ul className="grid grid-cols-4 gap-2 text-sm text-gray-700">
                                    {[
                                        "Bangalore", "Hyderabad", "Mumbai", "Delhi",
                                        "Chennai", "Pune", "Jaipur", "Kolkata",
                                        "Goa", "Ahmedabad", "Chandigarh", "Lucknow"
                                    ].map((city) => (
                                        <li
                                            key={city}
                                            className="px-2 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-2 border-blue-600"
                                        >
                                            {city}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>


                    <li><Link to="/hostel"  className="block px-4 py-2 ">Hostel</Link></li>
                    <li>bamHostel</li>
                    <li>Destination</li>
                    <li>Work Stations</li>
                    <li><Link to="/events"  className="block px-4 py-2 ">Events</Link></li>
                    <li>Groups</li>
                    <li><Link to="/register"  className="block px-4 py-2 ">Signup</Link></li>
                        <li><Link to="/login" className="block px-4 py-2">SignIn</Link></li>
                    <div ref={userRef} className="relative">
                        <div className="cursor-pointer bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center" onClick={() => setIsDropdownOpen(prev => !prev)}>
                            <FaUser size={25} />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-[200px] bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                                <ul className="text-sm text-gray-700">
                                     {/* <li><Link to="/register"  className="block px-4 py-2 hover:bg-gray-100 hover:border-r-4 border-blue-600">Signup</Link></li>
                        <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-100 hover:border-r-4 border-blue-600">SignIn</Link></li> */}
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">Voulnteer</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">Developers & Owners</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">Contact us</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">About us</li>


                                </ul>
                            </div>
                        )}
                    </div>

                </ul>

            </div>
            {/* mobile view menu */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 px-3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <button onClick={() => setMenuOpen(false)} className="text-2xl font-bold">&times;</button>
                </div>
                <ul className="flex flex-col gap-4 p-4 text-lg">

                    <li>Hostel</li>
                    <li>bamHostel</li>
                    <li>Destination</li>
                    <li>Work Stations</li>
                    <li>Events</li>
                    <li>Groups</li>
                    <li><Link to="/register"  className="block px-4 py-2 hover:bg-gray-100 ">Signup</Link></li>
                        <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-100 ">SignIn</Link></li>

                    <div ref={userRef} className="relative mt-2">
                        <div
                            className="cursor-pointer bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"
                            onClick={() => setIsDropdownOpen(prev => !prev)}
                        >
                            <FaUser size={25} />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                                <ul className="text-sm text-gray-700">
    
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">Voulnteer</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">Developers & Owners</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">Contact us</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">About us</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
