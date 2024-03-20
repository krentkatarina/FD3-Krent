import React from 'react';

import './br2jsx.css';

function BR2JSX (props) {
  let reg = /<br\s*\/*>/;
  let textArr = props.text.split(reg);
  let text =[];
  for (let i = 0; i < textArr.length; i++){
    text.push(textArr[i]);
    if(i < textArr.length -1){
        text.push(<br key={i}></br>);
    }
  }
  return(
    <div className="br">{text}</div>
  );
}

export default BR2JSX;