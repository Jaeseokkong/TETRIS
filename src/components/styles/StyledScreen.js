import styled from 'styled-components';

export const StyledScreen = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(480px / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 480px;
    background: #111;
    box-sizing: border-box;
    position: relative;

    @media screen and (max-width: 768px){ 
        width: 60%;  
        grid-template-rows: repeat(
            ${props => props.height},
            calc(60vw / ${props => props.width})
        );
    }
`;

export const StyledPause = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: white;

    &:before {
        content: "PAUSED";
        background: red;
        padding: 5% 10%;
        border-radius: 5px;

        @media screen and (max-width: 768px){ 
            font-size: 4vw;
            border-radius: 3px;
        }
    }
`