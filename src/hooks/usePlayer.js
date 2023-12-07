import React, { useState } from 'react'
import { randomTetromino } from '../tetrominos'

//현재 선택된 블럭 조작 훅
export const usePlayer = () => {
    console.log(randomTetromino())
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0}, //테트리스 블럭 위치
        tetromino: randomTetromino().shape, //테트리스 블럭 모양(랜덤)
        collided: false, //충돌 속성
    });
    
    return [player]
}

