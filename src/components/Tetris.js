import React from 'react';
import { createScreen } from '../gameHelper';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

//Components
import Screen from './Screen';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <div>
        <StyledTetrisWrapper>
            <StyledTetris>
                <Screen screen={createScreen()}/>
                <aside>
                    <div>
                        <Display text="score"/>
                        <Display text="rows"/>
                        <Display text="level"/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    </div>
  )
}

export default Tetris;