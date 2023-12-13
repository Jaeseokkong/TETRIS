import React from 'react'
import { StyledNext } from './styles/StyledNext'
import Cell from './Cell'

const Next = ({ next }) => {
  return (
    <div>
      <div>Next</div>
      <StyledNext width={next[0].length} height={next.length}>
          {next.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}
      </StyledNext>
    </div>
  )
}

export default React.memo(Next);