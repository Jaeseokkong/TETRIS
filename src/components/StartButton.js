import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => {
  return (
    <StyledStartButton onClick={callback}><span>start game</span></StyledStartButton>
  )
}

export default StartButton;