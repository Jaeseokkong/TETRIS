import React from 'react'
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({type}) => {

    return (
        <StyledCell type={type} color={TETROMINOS[type].color}/>
    )
}
//mome 사용으로 조작 중인 셀을다시 렌더링하지 않도록 해준다. 
export default React.memo(Cell);