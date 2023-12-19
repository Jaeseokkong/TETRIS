import React from 'react'
import { StyledNext, StyledNextWrapper } from './styles/StyledNext'
import Cell from './Cell'

const Next = ({ next }) => {
  return (
    <StyledNextWrapper>
      <span>Next</span>
      <StyledNext width={next[0].length} height={next.length}>
          {next.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}
      </StyledNext>
    </StyledNextWrapper>
  )
}

export default React.memo(Next);