import React from 'react';

function DoubleButton ({caption1, caption2, children, cbPressed}) {
    return (
        <>
            <input type='button' value={caption1} onClick={() => cbPressed(caption1)} />
            <span>{children}</span>
            <input type='button' value={caption2} onClick={() => cbPressed(caption2)} />
        </> 
    );
}

export default DoubleButton;