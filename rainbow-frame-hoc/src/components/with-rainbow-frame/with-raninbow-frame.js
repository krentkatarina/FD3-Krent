import React from 'react';

let withRainbowFrame = (colors) => (Comp) => ({ ...props }) => {
    let frame = colors.reduce((item, color) => {
      return  <div style = {{border: color + ' solid 5px',  padding: '5px'}}>{item}</div>}, 
        <Comp {...props} ></Comp>);

    return (
        <div style={{ width: 420, textAlign: 'center', marginTop: 10}}>
            {frame}
        </div>
    );
};

export {withRainbowFrame};