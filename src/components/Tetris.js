import React, { useState } from 'react';

import { createScreen, checkCollision } from '../gameHelper';

//Styled Components
import { StyledEmulator, StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

//Components
import Screen from './Screen';
import Display from './Display';
import StartButton from './StartButton';

//Custom Hooks
import { useInterval } from '../hooks/useInterval'
import { usePlayer } from '../hooks/usePlayer';
import { useScreen } from '../hooks/useScreen';
import { useGameStatus } from '../hooks/useGameStatus';
import Hold from './Hold';
import Next from './Next';
import { StyledDisplayWrapper } from './styles/StyledDisplay';
import { TETROMINOS } from '../tetrominos';
import { useNext } from '../hooks/useNext';
import { useHold } from '../hooks/useHold';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [holdCheck, setHoldCheck] = useState(false);

    const [player, playerList, updatePlayerPos, resetPlayer, initPlayer, playerRotate, holdChangePlayer] = usePlayer();
    const [screen, setScreen, rowsCleared] = useScreen(player, resetPlayer);
    const [next] = useNext(playerList);
    const [hold, setCan, switchHold] = useHold(player, resetPlayer, holdChangePlayer);
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
        initPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }

    const levelUp = () => {
        //10줄당 1레벨 증가
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            //속도 빠르게
            const FallingSpeed = Math.max(1000 - level * 50, 100)
            setDropTime(FallingSpeed);
        }
    }

    //최하단 드롭
    const hardDrop = () => {
        levelUp();
        let y = 1;
        while(checkCollision(player, screen, {x : 0, y : y}) !== true) y++;
        setCan(true)
        updatePlayerPos({ x: 0, y: y - 1, collided: true});
    }

    //한 칸 드롭
    const drop = () => {
        levelUp();
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
            setCan(true)
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

    // 블록 홀드
    const holdPlayer = () => {
        switchHold();    
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
            // 스페이스키
            } else if (keyCode === 32) {
                hardDrop();
            // Shift키
            } else if (keyCode === 16) {
                holdPlayer();
            } 

        }
    }

    useInterval(() => {
        drop()
    }, dropTime)

    return (
        <div>
            <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
                {/* <StyledEmulator/> */}
                <StyledTetris>
                    <Hold hold={hold}/>
                    <Screen screen={screen}/>
                    <aside>
                        <Next next={next}/>
                        {gameOver ? (
                            <StyledDisplayWrapper>
                                <Display gameOver={gameOver} text="Game Over"/>
                            </StyledDisplayWrapper>
                        ) : (
                            <StyledDisplayWrapper>
                                <Display text={`Score ${score}`}/>
                                <Display text={`Rows ${rows}`}/>
                                <Display text={`Level ${level}`}/>
                            </StyledDisplayWrapper>
                        )}
                        <StartButton callback={startGame}/>
                    </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
        </div>
    )
}

export default Tetris;