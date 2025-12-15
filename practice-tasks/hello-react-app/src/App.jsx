import React from 'react';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1>Introduction to React</h1>
      <p>
        React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.
      </p>
      <footer>
        <p>Copyright {currentYear}</p>
      </footer>
    </div>
  );
}

export default App;
