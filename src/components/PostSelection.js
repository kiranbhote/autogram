// src/components/PostSelection.js
import React from 'react';

const PostSelection = () => {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      {/* Post Selection Title */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Post</h3>
        <button className="text-sm text-gray-500 flex items-center">
          Select post
          <span className="ml-1">▼</span>
        </button>
      </div>

      {/* Radio Options */}
      <div className="space-y-2 mb-6">
        <label className="flex items-center">
          <input type="radio" name="postOption" className="mr-2" />
          <span>Apply for all posts and reels</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="postOption" className="mr-2" />
          <span>Apply for next post or reel <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded">PRO</span></span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="postOption" className="mr-2" defaultChecked />
          <span>Apply for a current post or reel</span>
        </label>
      </div>

    </section>
  );
};

export default PostSelection;