export const SCREEN_WIDTH = 12;
export const SCREEN_HEIGHT = 20;

//스크린 2차 배열 생성 [[[0, 'clear'], [0, 'clear'], [...] ...], []](length : 12), [...]] (length 20)
export const createScreen = () => Array.from(Array(SCREEN_HEIGHT), () => new Array(SCREEN_WIDTH).fill([0, 'clear']))
    
