import React, { useState, useEffect } from 'react';

const Controls = props => {

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(()=>{
        props.changesMade && props.changesMade(sort, filter);
  },[sort, filter])

  function sortWords(eo) {
        setSort(eo.target.checked);
  };

  function filterWords(eo) {
        setFilter(eo.target.value);
  };
  function deleteValues() {
        setSort(false);
        setFilter("");
  };

  return (
    <div className='filterRow'>
      <input type='checkbox' 
            onChange={sortWords}
            checked={sort}/>

      <input type='text' 
            value={filter} 
            onChange={filterWords}/>

      <input className='filterButton' 
            type='button' 
            value='сброс' 
            onClick={deleteValues}/>
    </div>
  );
};

export default Controls;