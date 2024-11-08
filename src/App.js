// src/App.js
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h2>Welcome to Autogramapp!</h2>
        {/* Add other components here */}
      </div>
    </div>
  );
}

export default App;