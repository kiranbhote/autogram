import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/Autogram-Logo.svg';
import profileImage from '../assets/profile.jpg';
import ConfirmationModal from './ConfirmationModal';
import PlanSelectionModal from './PlanSelectionModal';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const openLogoutPopup = () => {
    setLogoutPopupOpen(true);
    setDropdownOpen(false);
  };

  const closeLogoutPopup = () => {
    setLogoutPopupOpen(false);
  };

  const openPlanModal = () => {
    setPlanModalOpen(true);
  };

  const closePlanModal = () => {
    setPlanModalOpen(false);
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
    <header
      className="sticky top-0 z-55 bg-white shadow-sm p-4 flex items-center justify-between"
      style={{
        paddingLeft: "max((100vw - 1000px) / 2, 20px)",
        paddingRight: "max((100vw - 1000px) / 2, 20px)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo className="h-10 sm:h-10" alt="Autogramapp Logo" />
      </div>

      <div className="flex items-center">
        {/* Become a Pro Button */}
        <button
          onClick={openPlanModal}
          className="hidden sm:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium ml-4 hover:bg-blue-700"
        >
          Become a Pro
        </button>

        {/* Profile Section with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none ml-4">
            <img
              src={profileImage}
              alt="Profile"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-300"
            />
            <span className="hidden sm:inline-block text-gray-700 ml-2 font-medium">Major Tom</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-2 text-gray-500">
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md
                        transform transition-all duration-200 ease-out
                        ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
          >
            <ul className="text-gray-700 text-sm">
              <li className="block sm:hidden px-2 py-2">
                <button onClick={openPlanModal} className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                  Become a Pro
                </button>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">My Account</li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Help <span className="text-gray-500">support@autogram.com</span>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-red-500" onClick={openLogoutPopup}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ConfirmationModal
        isOpen={logoutPopupOpen}
        onClose={closeLogoutPopup}
        onConfirm={closeLogoutPopup}
        title="Confirm Logout"
        message="Are you sure you want to logout?"
      />
      <PlanSelectionModal isOpen={planModalOpen} onClose={closePlanModal} />
    </header>
  );
}

export default Header;
