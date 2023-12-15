import styled from "styled-components";

export const StyledHold = styled.div`
    display : grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(10vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    min-width: 90px;
    max-width: 10vw;
    background: #111;
    margin-right: 10px;
`