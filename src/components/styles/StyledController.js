import styled from "styled-components";
import { darken } from 'polished';

export const StyledControllerWrapper = styled.div`
    max-width: 768px;
    width : 100%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Pixel';
    @media screen and (max-width: 768px){
        width: 90%;
        margin-top: 7.5%;
    }

`

export const StyledDirectialPad = styled.div`
    width: 30%;
    aspect-ratio: 1 / 1;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 33.3%;
        height: 33.3%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2D2D2D;
    }
`

export const DirectialButton = styled.div`
    position: absolute;
    width: 33.3%;
    height: 33.3%;
    color: #fff;
    background-color: #2D2D2D;
    border: none;
    border-radius: 5px 5px 0 0 ;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s, background-color 0.1s;

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right:  5px solid transparent;
        border-bottom:  5px solid white;
        top: -20%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.1s ease-in-out;
    }

   

    ${(props) => {
        const { index } = props;

        let position = '';
        let rotation = '';

        switch (index) {
            case 0:
                position = 'top: 15%; left: 50%;';
                rotation = 'rotate(0deg)';
                break;
            case 1:
                position = 'top: 50%; left: 85%;';
                rotation = "rotate(90deg)";
                break;
            case 2:
                position = "top: 85%; left: 50%;";
                rotation = 'rotate(180deg)';
                break;
            case 3:
                position = "top: 50%; left: 15%;";
                rotation = "rotate(-90deg)";
                break;
            default:
                break;
        }

        return `
            ${position}
            transform: translate(-50%, -50%) ${rotation};

            &:active {
                transform: translate(-50%, -50%) ${rotation} scale(0.95) ;
                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;
            }
        `
    }}

    @media screen and (max-width: 768px){
        &::before {
            border-left: 0.7vw solid transparent;
            border-right:  0.7vw solid transparent;
            border-bottom:  0.7vw solid white;
        }
    }

`;

export const StyledABPad = styled.div`
   width: 30%;
   aspect-ratio: 1/1;
   position: relative;
`

export const StyledABButton = styled.div`
    position: relative;
    top: ${props => (props.type === "B" ? "60%" : "10%")};
    left: ${props => (props.type === "B" ? "25%" : "75%")};
    transform: translate(-50%, -50%);
    width: 33.3%;
    height: 33.3%;
    color: #fff;
    background-color: #E53935;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s, background-color 0.1s;

    &::before {
        content: "${props => props.type}";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 2rem;
    }

    &:active {
        transform: translate(-50%, -50%) scale(0.95) ;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;
    }

    @media screen and (max-width: 768px){
        &::before {
            font-size: 4vw;
        }
    }
`

export const StyledControlPanel = styled.div`
    position: relative;
    width: 25%;
    aspect-ratio: 2/1;
    display: flex;
`

export const StyledControlButton = styled.div`
    width: 7.5%;
    height: 80%;
    position: relative;
    background-color: #8B8C8E;
    display:block;
    margin-right: 5px;
    transform: rotate(40deg) translate(-50%, -50%);
    top: 50%;
    left: ${props => (props.type === "pause" ? "15%" : "45%")};
    border-radius: 10px;
    cursor: pointer;

    &::before {
        content: "${props => (props.type)}";
        position: absolute;
        display: block;
        transform: rotate(-90deg) translate(-50%, -50%);
        color: #fff;
        top: 0%;
        left: 60%;
        font-size: 1rem;
    }

    &:active {
        transform: rotate(40deg) translate(-50%, -50%) scale(0.95) ;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;
    }

    @media screen and (max-width: 768px){
        &::before {
            font-size: 1.9vw;
        }
    }
`





