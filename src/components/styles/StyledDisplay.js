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
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
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
`