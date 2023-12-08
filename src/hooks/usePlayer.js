import React, { useCallback, useState } from 'react'
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../gameHelper';

//현재 선택된 블럭 조작 훅
export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0}, //테트리스 블럭 위치
        tetromino: TETROMINOS[0].shape, //최초 테트리스 블럭은 보이지 않도록
        collided: false, //충돌 속성
    });

    // 조작 블럭 상태 설정
    const updatePlayerPos = ({ x, y, collided = false }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x + x), y: (prev.pos.y + y)},
            collided,
        }))
    }

    //리셋 함수
    //무한 루프를 방지하기 위해서 useCallback 훅 사용
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: SCREEN_WIDTH / 2 - 2, y: 0}, // x 가운데 최상단 블럭을 두기 위한 좌표
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])
    
    return [player, updatePlayerPos, resetPlayer]
}

