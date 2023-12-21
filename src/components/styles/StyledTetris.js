import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("img/background.png") #000;
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

