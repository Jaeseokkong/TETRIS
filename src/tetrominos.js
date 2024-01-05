//테트리스 블록 설정 값
export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0', type: null},
    I: { 
        shape: [
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0],
                    [0, 'I', 0, 0],
                ],
        color: '0, 240, 240',
        type: 'I'

    },
    J: { 
        shape: [
                    [0, 'J', 0],
                    [0, 'J', 0],
                    ['J', 'J', 0],
                ],
        color: '0, 0, 240',
        type: 'J'
    },
    L: { 
        shape: [
                    [0, 'L', 0],
                    [0, 'L', 0],
                    [0, 'L', 'L'],
                ],
        color: '240, 160, 0',
        type: 'L'
    },
    O: { 
        shape: [
                    ['O', 'O'],
                    ['O', 'O'],
                ],
        color: '240, 240, 0',
        type: 'O'
    },
    S: {
        shape: [
                    [0, 0, 0],  
                    [0, 'S', 'S'],
                    ['S', 'S', 0],
                ],
        color: '0, 240, 0',
        type: 'S'
    },
    T: {
        shape: [
                    [0, 0, 0],        
                    ['T', 'T', 'T'],
                    [0, 'T', 0],
                ],
        color: '160, 0, 240',
        type: 'T'
    },
    Z: {
        shape: [
                    ['Z', 'Z', 0],
                    [0, 'Z', 'Z'],
                    [0, 0, 0],  
                ],
        color: '240, 0, 0',
        type: 'Z' 
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}