export const SCREEN_WIDTH = 12;
export const SCREEN_HEIGHT = 20;
export const NEXT_WIDTH = 5;
export const NEXT_HEIGHT = 15;
export const HOLD_WIDTH = 5;
export const HOLD_HEIGHT = 5;

//스크린 2차 배열 생성 [[[0, 'clear'], [0, 'clear'], [...] ...], []](length : 12), [...]] (length 20)
export const createScreen = () => Array.from(Array(SCREEN_HEIGHT), () => new Array(SCREEN_WIDTH).fill([0, 'clear']));

//조작 블럭이 스크린을  벗어 나지못하도록 체크하는 함수
export const checkCollision = (player, screen, { x: moveX, y: moveY}) => {
    //조작 블럭의 2차원 배열을 순회
    for (let y = 0; y < player.tetromino.shape.length; y++){
        for(let x = 0; x < player.tetromino.shape[y].length; x++){
            if (player.tetromino.shape[y][x] !== 0){
                // 테트리스 블록 셀이 있는지 확인
                if (
                    // 스크린 공간 안에서 움직이는지 확인 
                    // 높이 안에 포함되는지
                    !screen[y + player.pos.y + moveY] ||

                    // 너비 안에 포함되는지
                    !screen[y + player.pos.y + moveY][x + player.pos.x + moveX] ||

                    // 빈 공간인지                
                    screen[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                    
                ) {
                    return true;
                }
            }
        }
    }
}


export const createNext = () => Array.from(Array(NEXT_HEIGHT), () => new Array(NEXT_WIDTH).fill([0, 'clear']));
export const createHold = () => Array.from(Array(HOLD_HEIGHT), () => new Array(HOLD_WIDTH).fill([0, 'clear']));

