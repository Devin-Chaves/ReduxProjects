import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component - should produce some HTML

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyDdAMe3UQOTzPVr5T7SzVz35Oedpca9keY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and insert
// into DOM

ReactDOM.render(<App />, document.querySelector('.container'));
