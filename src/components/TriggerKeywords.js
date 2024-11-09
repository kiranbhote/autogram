// src/components/TriggerKeywords.js
import React, { useState } from 'react';

const TriggerKeywords = ({ showProModal }) => {
  const [keywords, setKeywords] = useState(["Link"]);
  const [newKeyword, setNewKeyword] = useState("");

  const addKeyword = (e) => {
    e.preventDefault();
    if (keywords.length >= 10) {
      // If the limit is reached, open the Pro modal instead
      showProModal();
      return;
    }

    if (newKeyword && !keywords.includes(newKeyword)) {
      setKeywords([...keywords, newKeyword]);
      setNewKeyword("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
  };

  return (
    <section className="bg-white rounded-lg p-5 shadow-sm transition-all duration-300 ease-in-out">
      {/* Trigger Title */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-gray-900">Trigger Keywords</h3>
        <span className="text-sm text-gray-500">{keywords.length} keywords</span>
      </div>

      {/* Keyword Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 max-w-[80%] md:max-w-full truncate"
            title={keyword} // Tooltip to show the full keyword on hover
          >
            <span className="truncate">{keyword}</span>
            <button
              onClick={() => removeKeyword(keyword)}
              className=" ml-2 text-gray-500 hover:text-gray-700"
              aria-label="Remove keyword"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Add Keyword Input */}
      <form onSubmit={addKeyword} className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Add keyword"
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          className="w-full bg-transparent border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-shadow duration-200 ease-in-out"
        />
        <button
          type="submit"
          className={`text-sm font-medium ${
            newKeyword ? 'text-orange-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Add
        </button>
      </form>
      {/* Display Limit Message */}
      {keywords.length >= 10 && (
        <p className="text-xs text-orange-600 mt-2">
          You can only enter up to 10 trigger keywords in the free plan. Upgrade to Pro for more.
        </p>
      )}
    </section>
  );
};

export default TriggerKeywords;
