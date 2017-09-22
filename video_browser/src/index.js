import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component - should produce some HTML

const App = () => {
  return <div>Hi!</div>;
};

// Take this component's generated HTML and insert
// into DOM

ReactDOM.render(<App />, document.querySelector('.container'));
