import styled from "styled-components";

export const StyledGuide = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0, 0.9);
    z-index: 10;
    display: flex;
    cursor: pointer;

    img {
        width: 90%;
        max-width : 700px;
        margin: auto;
        opacity: 0.8;
    }
`