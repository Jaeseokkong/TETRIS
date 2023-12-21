import React from 'react';
import Cell from './Cell';
import { StyledScreen, StyledPause } from './styles/StyledScreen';

const Screen = ({ screen, pause }) => {

  return (
    <StyledScreen width={screen[0].length} height={screen.length}>
        {pause && <StyledPause/>}
        {screen.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}
    </StyledScreen>
  )
}

export default Screen