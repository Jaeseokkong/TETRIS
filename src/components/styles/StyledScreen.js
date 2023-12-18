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

    @media screen and (max-width: 768px){ 
        width: 60%;  
        grid-template-rows: repeat(
            ${props => props.height},
            calc(60vw / ${props => props.width})
        );
    }
`;