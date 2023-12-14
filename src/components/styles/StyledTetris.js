import styled from 'styled-components';
import bgImage from '../../img/background.png';
import emulator from '../../img/emulator.png'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;

`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
    justify-content: center;
    /* height: 100%; */
    position: absolute;
    left: 15%;
    top: 16.5%;

    aside {
        width : 100%;
        max-width: 150px;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        height : 51.7vw;
        justify-content: space-between;
    }
`

export const StyledEmulator = styled.div`
    background-image: url(${emulator});
    background-repeat: no-repeat;
    background-size: cover;
    width: 60%;
    height: 100%;
    max-width: 1000px;
    position: absolute;
    z-index: 0;
    left: 20%;
    top: 3%;
`
