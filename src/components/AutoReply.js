// src/components/AutoReply.js
import React, { useState } from 'react';

const AutoReply = ({ showProModal }) => {
  const [replies, setReplies] = useState(["Please check your DM"]);
  const [newReply, setNewReply] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  const addReply = (e) => {
    e.preventDefault();
    if (replies.length >= 10) {
      showProModal(); // Show the Pro modal if more than 10 replies are added
    } else if (newReply && !replies.includes(newReply)) {
      setReplies([...replies, newReply]);
      setNewReply("");
    }
  };

  const removeReply = (replyToRemove) => {
    setReplies(replies.filter((reply) => reply !== replyToRemove));
  };

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm transition-all duration-300 ease-in-out">
      {/* Title and Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Auto Reply</h3>
        <div className="flex items-center space-x-2">
          {!isEnabled && (
            <span className="text-xs text-gray-500">Auto Reply is OFF</span>
          )}
          <button
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
              isEnabled ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => setIsEnabled(!isEnabled)}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 transform ${
                isEnabled ? 'translate-x-6' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Show reply count, mode selection, and input only if enabled */}
      {isEnabled && (
        <>
          
       

          {/* Reply List */}
          <div className="flex flex-wrap gap-2 mb-4">
            {replies.map((reply, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 max-w-[80%] md:max-w-full truncate"
                title={reply} // Tooltip to show the full reply on hover
              >
                <span className="truncate">{reply}</span>
                <button
                  onClick={() => removeReply(reply)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                  aria-label="Remove reply"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
              </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Add Reply Input */}
          <form onSubmit={addReply} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Add auto reply"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              className="w-full bg-transparent border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-shadow duration-200 ease-in-out"
            />
            <button
              type="submit"
              className={`text-sm font-medium ${
                newReply ? 'text-orange-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Add
            </button>
          </form>

          {/* Display Limit Message */}
          {replies.length >= 10 && (
            <p className="text-xs text-orange-600 mt-2">
              You can only enter up to 10 manual replies in the free plan. Upgrade to Pro for more.
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default AutoReply;