import React from 'react'
import Cell from './Cell'
import { StyledHold, StyledHoldWrapper } from './styles/StyledHold'

const Hold = ({ hold }) => {
  return (
    <StyledHoldWrapper>
        <span>Hold</span>
        <StyledHold width={hold[0].length} height={hold.length}>
          {hold.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}
        </StyledHold>
    </StyledHoldWrapper>
    
  )
}

export default Hold