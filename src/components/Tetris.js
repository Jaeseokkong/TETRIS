import React, { useState } from 'react';

import { createScreen, checkCollision } from '../gameHelper';

//Styled Components
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

//Components
import Screen from './Screen';
import Display from './Display';
import StartButton from './StartButton';

//Custom Hooks
import { useInterval } from '../hooks/useInterval'
import { usePlayer } from '../hooks/usePlayer';
import { useScreen } from '../hooks/useScreen';
import { useGameStatus } from '../hooks/useGameStatus';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [screen, setScreen, rowsCleared] = useScreen(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

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
        setDropTime(1000)
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    //최하단 드롭
    const hardDrop = () => {
        
    }

    //한 칸 드롭
    const drop = () => {
        //10줄당 1레벨 증가
        if (rows > (level + 1) * 1) {
            setLevel(prev => prev + 1);
            //속도 빠르게
            const FallingSpeed = Math.max(1000 - level * 50, 100)
            setDropTime(FallingSpeed);
        }

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

    //아래 방향키를 눌렀을때 자동으로 내려오는 시간 간격을 초기화시킴
    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if(keyCode === 40) {
                const FallingSpeed = Math.max(1000 - level * 50, 100)
                setDropTime(FallingSpeed)
            }
        }
    }

    //블록 내리기 함수
    const dropPlayer = () => {
        setDropTime(null);
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

    useInterval(() => {
        drop()
    }, dropTime)

    return (
        <div>
            <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
                <StyledTetris>
                    <Screen screen={screen}/>
                    <aside>
                        {gameOver ? (
                            <Display gameOver={gameOver} text="Game Over"/>
                        ) : (
                            <div>
                                <Display text={`Score ${score}`}/>
                                <Display text={`Rows ${rows}`}/>
                                <Display text={`Level ${level}`}/>
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