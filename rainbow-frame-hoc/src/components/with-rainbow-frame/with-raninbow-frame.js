import React from 'react';

let withRainbowFrame = (colors) => (Fragment) => ({ ...props }) => {
    let frame = colors.reduce((item, color) => {
      return  <div style = {{border: color + ' solid 5px',  padding: '5px'}}>{item}</div>}, 
        <Fragment {...props} ></Fragment>);

    return (
        <div style={{ width: 420, textAlign: 'center', marginTop: 10}}>
            {frame}
        </div>
    );
};

export {withRainbowFrame};