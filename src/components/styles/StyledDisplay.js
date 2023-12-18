import styled from "styled-components";

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 10px 10px;
    width: 100%;
    height : 33.3%;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-size: 0.8rem;

    @media screen and (max-width: 768px){   
        padding: 8% 5%;
        font-size: 1.5vw;
    }
`

export const StyledDisplayWrapper = styled.div`
    width : 100%;
    height : 20%;
    background : #000;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    border: 3px solid #333;
    box-sizing: border-box;

    @media screen and (max-width: 768px){   
        height : fit-content;
    }
`