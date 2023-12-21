import React, { useEffect, useState } from 'react'
import { HOLD_WIDTH, createHold } from '../gameHelper';
import { TETROMINOS } from '../tetrominos';

export const useHold = (player, resetPlayer, holdChangePlayer) => {
    const [hold, setHold] = useState(createHold());
    const [holdType, setHoldType] = useState(null);
    const [can, setCan] = useState(true);

    const switchHold = () => {
        if(can === true){
            setCan(false)
            const newHold = Array.from(Array(5), () => new Array(HOLD_WIDTH).fill([0, 'clear']))
            //setCan(false)
            const holdTetromino = TETROMINOS[player.tetromino.type]
            console.log(holdTetromino)
            hold.forEach((cell, index) => {
                holdTetromino.shape.forEach((row, y) => {
                    row.forEach((value, x) => {
                        if(value !== 0){
                            newHold[y + 1][x + 1] = [value, 'clear']
                        }
                    })
                })
            })
            //홀드가 비워져 있을 경우
            if(holdType === null){
                resetPlayer();
            } else {
                holdChangePlayer(holdType)
            }
            setHoldType(holdTetromino.type)
            setHold(newHold)
        }
    }

    const resetHold = () => {
        setHold(createHold());
        setHoldType(null);
    }

    return [hold, setCan, switchHold, resetHold];
}
