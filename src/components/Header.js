// src/components/Header.js
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/Autogram-Logo.svg'; // Import your SVG logo here
import profileImage from '../assets/profile.jpg'; // Replace with your profile image path

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Logo className="h-10 mr-2" alt="Autogramapp Logo" />
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
            className="h-8 w-8 rounded-full border border-gray-300"
                  />
                  <span className="text-gray-700 m-4 font-medium">Major Tom</span>
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