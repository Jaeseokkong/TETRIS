import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    //한번에 얻을 수 있는 줄수에 대한 점수
    const linePoints = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
        //라인 지운 경우 
        if (rowsCleared > 0) {
            // 테트리스 점수 공식
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared);
        }
    }, [level, linePoints, rowsCleared])

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel]
}