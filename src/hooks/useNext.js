import React, { useEffect, useState } from 'react'
import { NEXT_WIDTH, createNext } from '../gameHelper';

export const useNext = (playerList) => {
    const [next, setNext] = useState(createNext());
    
    useEffect(() => {
        // width : 5 height : 15
        const updateNext = prevNext => {
            // 조작되는 블럭 미리보기 제거
            const newNext = Array.from(Array(15), () => new Array(NEXT_WIDTH).fill([0, 'clear']));

            console.log(playerList)
            // 순차적으로 보여질 테트리스 블럭 순회
            playerList.forEach((player, index) => {
                // 리스트 내부 접근
                player.tetromino.shape.forEach((row, y) => {
                    row.forEach((value, x) => {
                        if(value !== 0) {
                            if (row.type === 'Z' || row.type === 'O') {
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

    return [next];
}

