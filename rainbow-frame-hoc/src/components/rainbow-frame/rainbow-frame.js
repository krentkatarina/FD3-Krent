import React from 'react';
import {Fragment} from 'react'
import {withRainbowFrame} from '../with-rainbow-frame/with-raninbow-frame.js'


function RainbowFrame () {
  let FramedFragment= withRainbowFrame(colors)(Fragment);
    return(
      <FramedFragment></FramedFragment>)
}

export default RainbowFrame;