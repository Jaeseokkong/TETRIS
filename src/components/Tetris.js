import React, { useState } from 'react';

//Styled Components
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

//Components
import Screen from './Screen';
import Display from './Display';
import StartButton from './StartButton';

//Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useScreen } from '../hooks/useScreen';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player] = usePlayer();
    const [screen, setScreen] = useScreen(player);
    console.log(player)
    return (
        <div>
            <StyledTetrisWrapper>
                <StyledTetris>
                    <Screen screen={screen}/>
                    <aside>
                        {gameOver ? (
                            <Display gameOver={gameOver} text="Game Over"/>
                        ) : (
                            <div>
                                <Display text="score"/>
                                <Display text="rows"/>
                                <Display text="level"/>
                            </div>
                        )}
                        <StartButton/>
                    </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
        </div>
    )
}

export default Tetris;