// src/components/ConfirmationModal.js
import React from 'react';

function ConfirmationModal({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-0">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Yes, Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmationModal.defaultProps = {
  title: "Log Out",
  message: "Are you sure you want to log out?",
};

export default ConfirmationModal;