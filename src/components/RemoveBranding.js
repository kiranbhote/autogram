// src/components/RemoveBranding.js
import React, { useState } from 'react';

const RemoveBranding = ({ showProModal }) => {
  const [isBrandingRemoved, setIsBrandingRemoved] = useState(false);

  const handleToggle = () => {
    if (!isBrandingRemoved) {
      // Show the Pro modal and pass a callback function to handle confirmation
      showProModal((confirmed) => {
        if (confirmed) {
          setIsBrandingRemoved(true);
        }
      });
    } else {
      setIsBrandingRemoved(false); // Allow toggle off directly
    }
  };

  return (
    <section className="bg-white rounded-lg p-5 shadow-sm transition-all duration-300 ease-in-out flex items-center justify-between">
      {/* Title and Badge */}
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-medium text-gray-900">Remove Branding</h3>
        <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-0.5 rounded-full">PRO</span>
      </div>

      {/* Toggle Button */}
      <button
        className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
          isBrandingRemoved ? 'bg-green-500' : 'bg-gray-300'
        }`}
        onClick={handleToggle}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isBrandingRemoved ? 'translate-x-6' : ''
          }`}
        ></span>
      </button>
    </section>
  );
};

export default RemoveBranding;