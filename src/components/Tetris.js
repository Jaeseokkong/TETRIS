import React from 'react';
import { createScreen } from '../gameHelper';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <div>
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createScreen()}/>
                <aside>
                    <div>
                        <Display text="점수"/>
                        <Display text="줄 수"/>
                        <Display text="레벨"/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    </div>
  )
}

export default Tetris;