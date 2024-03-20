import React from 'react';
import Filter from './components/filter/filter.js';

let wordsList = [
                  'california',
                  'everything', 
                  'aboveboard', 
                  'washington', 
                  'basketball', 
                  'weathering', 
                  'characters', 
                  'literature', 
                  'contraband', 
                  'appreciate'
                ];

function App() {
    return (
      <Filter words={wordsList} />
    ) 
}

export default App;
