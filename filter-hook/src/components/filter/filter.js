import React, { useState} from 'react';

import "./filter.css";
import Controls from '../controls/controls.js';
import List from '../list/list.js';

const Filter = props => {

  const [words, setWords] = useState(props.words);

  function changes(sort, filter) {
    let list = props.words.slice();
    if (sort)
    list.sort();
    if (filter)
    list = list.filter(v => v.includes(filter));
    setWords(list);
  };

  return (
    <div>
      <Controls changes={changes}/>
      <List words={words}/>
    </div>
  );
};

export default Filter;