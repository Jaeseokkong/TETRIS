import React, { useState } from 'react';

import { createScreen, checkCollision } from '../gameHelper';

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
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [screen, setScreen] = useScreen(player, resetPlayer);

    //블록 조작 함수
    const movePlayer = dir => {
        if(!checkCollision(player, screen, { x : dir, y: 0})){
            updatePlayerPos({ x: dir, y: 0})
        }
    }

    //게임 시작 함수 
    const startGame = () => {
        //리셋
        setScreen(createScreen());
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if(!checkCollision(player, screen, {x : 0, y : 1})){
            updatePlayerPos({ x: 0, y: 1, collided: false})
        //충돌한 경우 (바닥 또는 쌓여있는 블록에 닿은 경우)
        } else {
            // 게임 오버된 경우 
            if(player.pos.y < 1){
                console.log('GAME OVER');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true});
            
        }
    }

    //블록 내리기 함수
    const dropPlayer = () => {
        drop();
    }

    //키보드 조작
    const move = ({ keyCode }) => {
        if(!gameOver) {
            // ← 왼쪽 방향키
            if (keyCode === 37) {
                movePlayer(-1);
            // → 오른쪽 방향키
            } else if (keyCode === 39) {
                movePlayer(+1)
            // ↓ 아래 방향키
            } else if (keyCode === 40) {
                dropPlayer();
            // ↑ 위 방향키
            } else if (keyCode === 38) {
                playerRotate(screen, 1);
            }

        }
    }

    return (
        <div>
            <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
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
                        <StartButton callback={startGame}/>
                    </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
        </div>
    )
}

export default Tetris;