import styled from 'styled-components';
import bgImage from '../../img/background.png';
import emulator from '../../img/emulator.png'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: 25%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    justify-content: space-between;
    left: 15%;
    top: 16.5%;
    font-family: Pixel, Arial, Helvetica, sans-serif;

    aside {
        width : 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        aspect-ratio: 1 / 5;

        @media screen and (max-width: 768px){ 
            width: 20%;
            aspect-ratio: 1 / 4.5;

        }
    }

    @media screen and (max-width: 768px){ 
        width: 100%;
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
