import React  from 'react';

const List = props => {
  return (
    <div>
      <div className="wordsBlock">{props.words.map((word, i) => <div key={i} >{word}</div>)}</div>
    </div>
  );
};

export default List;