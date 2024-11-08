// src/components/MessageInput.js
import React from 'react';

const MessageInput = () => {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm transition-all duration-300 ease-in-out">
      {/* Message Title */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Message</h3>
        <span className="text-sm text-gray-500">Enter Message</span>
      </div>

      {/* Message Textarea */}
      <textarea
        placeholder="Type your message here..."
        className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-shadow duration-200 ease-in-out resize-y min-h-[100px]"
      ></textarea>
    </section>
  );
};

export default MessageInput;