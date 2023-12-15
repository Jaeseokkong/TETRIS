import React, { useEffect, useState } from 'react'
import { NEXT_WIDTH, createNext, createScreen } from '../gameHelper'

//테트리스 화면 훅
export const useScreen = (player, playerList, setPlayerList, resetPlayer) => {
    const [screen, setScreen] = useState(createScreen());
    const [next, setNext] = useState(createNext());
    const [rowsCleared, setRowsCleared] = useState(0);
    
    useEffect(() => {
        setRowsCleared(0);

        //모두 채워진 블록 열을 제외한 배열 재생성
        const sweepRows = newScreen => newScreen.reduce((ack, row) => {
            //모두 채워진 행일 경우
            if(row.findIndex(cell => cell[0] === 0) === -1){
                setRowsCleared(prev => prev + 1);
                //맨위에 행을 추가해준다.(제거한줄만큼 추가)
                ack.unshift(new Array(newScreen[0].length).fill([0, 'clear']))
                return ack;
            }
            //모두 채워지지 않은 행
            ack.push(row);
            return ack;
        }, [])

        const updateScreen = prevScreen => {
            // 해당 셀이 clear면 비우고 아니라면 셀에 블럭을 넣는다. (쌓여있는 블록(merged)을 빼고 모두 비우기)
            const newScreen = prevScreen.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),);
            // 조작하는 블록 넣어줌 
            player.tetromino.forEach((row, y) => { // 모양 배열(shape) 순회 (행 값)
                row.forEach((value, x) => { //배열 내부 2차배열 순회 (열 값)
                    if (value !== 0) { 
                        // 블럭 모양의 값을 좌표와 블럭 좌표를 더해서 해당 위치에 넣어줌
                        newScreen[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`]
                    }
                })
            })

            // 충돌한 경우 (쌓여있는 블록가 만나거나, 맨 밑에 닿은 경우)
            if (player.collided) {
                resetPlayer();
                return sweepRows(newScreen)
            }

            return newScreen;
        }
        setScreen(prev => updateScreen(prev))
    }, [player]);

    useEffect(() => {
        // width : 5 height : 15
        const updateNext = prevNext => {
            // 조작되는 블럭 미리보기 제거
            const newNext = Array.from(Array(15), () => new Array(NEXT_WIDTH).fill([0, 'clear']));

            // 순차적으로 보여질 테트리스 블럭 순회
            playerList.forEach((player, index) => {
                // 리스트 내부 접근
                player.tetromino.forEach((row, y) => {
                    row.forEach((value, x) => {
                        if(value !== 0) {
                            if (value === 'Z' || value === 'O') {
                                newNext[index * 5 + y + 2][x + 1] = [value, 'clear']
                            } else {
                                newNext[index * 5 + y + 1][x + 1] = [value, 'clear']
                            }
                            
                        }
                    })
                })
            })

            return newNext;
        }
        setNext(prev => updateNext(prev));
    }, [playerList]);

    return [screen, setScreen, next, setNext, rowsCleared];
}