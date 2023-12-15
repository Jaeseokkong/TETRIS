import React from 'react'
import Cell from './Cell'
import { StyledHold } from './styles/StyledHold'

const Hold = ({ hold }) => {
  return (
    <div>
        <div>Hold</div>
        <StyledHold width={hold[0].length} height={hold.length}>
          {hold.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}
        </StyledHold>
    </div>
    
  )
}

export default Hold