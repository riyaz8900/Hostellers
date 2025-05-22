import { useRef, useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserDropdown = () => {
  const userRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={userRef} className="relative">
      <div
        className="cursor-pointer bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"
        onClick={() => setIsDropdownOpen(prev => !prev)}
      >
        <FaUser size={25} />
      </div>

      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-[200px] bg-white shadow-lg rounded-lg border border-gray-200 z-10"
          onClick={(e) => e.stopPropagation()} // ✅ prevents dropdown toggle on internal clicks
        >
          <ul className="text-sm text-gray-700">
            <li>
              <Link
                to="/register"
                className="block px-4 py-2 hover:bg-gray-100 hover:border-r-4 border-blue-600"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-100 hover:border-r-4 border-blue-600"
              >
                SignIn
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">
              Volunteer
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">
              Developers & Owners
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">
              Contact us
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:border-r-4 border-blue-600">
              About us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
