import React, { useCallback, useState } from 'react'
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { SCREEN_HEIGHT, SCREEN_WIDTH, checkCollision } from '../gameHelper';

//현재 선택된 블럭 조작 훅
export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0}, //테트리스 블럭 위치
        tetromino: TETROMINOS[0].shape, //최초 테트리스 블럭은 보이지 않도록
        collided: false, //충돌 속성
    });

    // 조작 블록 회전
    // 90도 회전 시키는 함수
    const rotate = (matrix, dir) => {
        // 행과 열을 뒤 바꿈
        const rotatedTetro = matrix.map((_, index) => matrix.map(col => col[index]))

        // 각 행을 뒤집어 회전된 2차원 배열을 구한다.
        if(dir > 0) return rotatedTetro.map(row => row.reverse()); // 시계 방향
        return rotatedTetro.reverse(); // 반시계 방향

    }


    const playerRotate = (screen, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        //충돌 되지 않는 범위에서 회전 되도록 설정
        while(checkCollision(clonedPlayer, screen, {x: 0, y: 0})){
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1))
            if(offset > clonedPlayer.tetromino[0].length){
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    }

    // 조작 블럭 상태 설정
    const updatePlayerPos = ({ x, y, collided}) => {
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
    
    return [player, updatePlayerPos, resetPlayer, playerRotate]
}

