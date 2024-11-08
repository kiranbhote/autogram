// src/components/Header.js
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/Autogram-Logo.svg'; // Import your SVG logo here
import profileImage from '../assets/profile.jpg'; // Replace with your profile image path
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Import the Chevron Down icon from Heroicons v2


function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Logo className="h-8 sm:h-10" alt="Autogramapp Logo" /> {/* Adjust logo size for small screens */}
      </div>

      {/* Profile with Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-300"
          />
          {/* Hide profile name on small screens */}
                  <span className="hidden sm:inline-block text-gray-700 ml-2 font-medium">Major Tom</span>
                  <ChevronDownIcon className="w-4 h-4 mx-2 text-gray-700" />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Account
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Help <span className="text-sm text-gray-500">support@autogram.com</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;