// src/components/MainSection.js
import React, { useState } from 'react';

import PlanSelectionModal from './PlanSelectionModal';
import PostSelection from './PostSelection';
import TriggerKeywords from './TriggerKeywords';
import MessageInput from './MessageInput';
import AutoReply from './AutoReply';
import RemoveBranding from './RemoveBranding';

const MainSection = () => {
  // State to control the visibility of the Pro modal
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [confirmFeature, setConfirmFeature] = useState(null); // Stores callback to confirm feature

  // Function to open the Pro modal and pass a callback
  const showProModal = (confirmCallback) => {
    setConfirmFeature(() => confirmCallback);
    setIsProModalOpen(true);
  };

  // Function to close the Pro modal and handle confirmation
  const closeProModal = (confirmed) => {
    if (confirmed && confirmFeature) {
      confirmFeature(true); // Enable the feature if the user confirms
    } else if (confirmFeature) {
      confirmFeature(false); // Keep the feature disabled if the user cancels
    }
    setIsProModalOpen(false);
  };

  return (
    <div
      className="pt-12 p-4 bg-gray-50 space-y-6"
      style={{
        paddingLeft: "max((100vw - 1000px) / 2, 20px)",
        paddingRight: "max((100vw - 1000px) / 2, 20px)",
      }}
    >
      {/* Pass showProModal to TriggerKeywords */}
      <TriggerKeywords showProModal={showProModal} />
      <MessageInput />
      <AutoReply showProModal={showProModal} />
      <RemoveBranding showProModal={showProModal} />
      
      {/* Render the PlanSelectionModal */}
      {isProModalOpen && (
        <PlanSelectionModal
          isOpen={isProModalOpen}
          onClose={() => closeProModal(false)} // Close without confirmation
          onConfirm={() => closeProModal(true)} // Close with confirmation
        />
      )}
    </div>
  );
};

export default MainSection;