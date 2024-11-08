// src/components/Header.js
import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/Autogram-Logo.svg'; // Import your SVG logo here
import profileImage from '../assets/profile.jpg'; // Replace with your profile image path

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Logo className="h-10 sm:h-10" alt="Autogramapp Logo" />
          </div>
          
<div className='flex'>
      {/* Upgrade to Pro Button (Visible only on larger screens) */}
      <button className="mr-4 hidden sm:inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium ml-4 hover:bg-blue-700">
        Upgrade to Pro
      </button>

      {/* Profile Section with Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-300"
          />
          <span className="hidden sm:inline-block text-gray-700 ml-2 font-medium">Major Tom</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-2 text-gray-700">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
                  </button>
                  </div>

        {/* Dropdown Menu with Animation */}
        <div
          className={`absolute right-2 mt-12 w-52 bg-white border border-gray-200 rounded-md shadow-lg
                      transform transition-all duration-200 ease-out
                      ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
          <ul>
            {/* Upgrade to Pro Button for Mobile */}
            <li className="block sm:hidden px-2 py-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
                Upgrade to Pro
              </button>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">My Account</li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
              Help <span className="text-sm text-gray-500">support@autogram.com</span>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;