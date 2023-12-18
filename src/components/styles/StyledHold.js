import styled from "styled-components";

export const StyledHold = styled.div`
    display : grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(150px / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 158px;
    background: #111;
    color : #fff;
    box-sizing: border-box;

    @media screen and (max-width: 768px){ 
        width: 100%;  
        grid-template-rows: repeat(
            ${props => props.height},
            calc(20vw / ${props => props.width})
        );
    }
`

export const StyledHoldWrapper = styled.div`
    width : 150px;
    color : #fff;
    font-size : 1em;
    text-align: center;

    @media screen and (max-width: 768px){   
        width: 20%;
        font-size: 2vw;
    }
`