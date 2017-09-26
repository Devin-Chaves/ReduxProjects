import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDdAMe3UQOTzPVr5T7SzVz35Oedpca9keY';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});
// Create a new component - should produce some HTML
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
