import styled from "styled-components";
import { darken } from 'polished';

export const StyledControllerWrapper = styled.div`
    height: 15%;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ;
`

export const StyledDirectialPad = styled.div`
    width: 100px;
    height: 100px;
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
        border-left: 0.2rem solid transparent;
        border-right:  0.2rem solid transparent;
        border-bottom:  0.2rem solid white;
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

`;

export const StyledABPad = styled.div`
   width: 100px;
   height: 100px;
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
    }

    &:active {
        transform: translate(-50%, -50%) scale(0.95) ;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;
    }
`




