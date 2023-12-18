import styled from "styled-components";

export const StyledStartButton = styled.div`
    box-sizing: border-box;
    height: 40px;
    width: 95%;
    border-radius: 20px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    text-align: center;
    outline: none;
    cursor: pointer;
    display: flex;
    margin-left: 2.5%;
    transition: 0.4s ease-in-out;

    &:hover {
        background: #D9D9D9;
        color : red;
    }

    span {
        display: block;
        margin : auto;
    }

    @media screen and (max-width: 768px){   
        font-size: 2vw;
    }
`