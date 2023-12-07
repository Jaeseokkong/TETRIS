import React from 'react';
import Cell from './Cell';
import { StyledScreen } from './styles/StyledScreen';

const Screen = ({ screen }) => {

  return (
    <StyledScreen width={screen[0].length} height={screen.length}>
        {screen.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}
    </StyledScreen>
  )
}

export default Screen