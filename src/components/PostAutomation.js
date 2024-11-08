// src/components/MainSection.js
import React, { useState } from 'react';
import PostSelection from './PostSelection';
import TriggerKeywords from './TriggerKeywords';
import PlanSelectionModal from './PlanSelectionModal';

const MainSection = () => {
  // State to control the visibility of the Pro modal
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  // Function to open the Pro modal
  const showProModal = () => {
    setIsProModalOpen(true);
  };

  // Function to close the Pro modal
  const closeProModal = () => {
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

      {/* Render the PlanSelectionModal */}
      {isProModalOpen && (
        <PlanSelectionModal isOpen={isProModalOpen} onClose={closeProModal} />
      )}
    </div>
  );
};

export default MainSection;